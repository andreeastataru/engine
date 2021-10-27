import type * as Babel from "@babel/core";
import { paramParser } from "../parsers";
import {
  passthroughOperationCompiler,
  structOperationCompiler,
  paramsCompiler,
} from "../compilers";
import { Messages } from "../messages";
import { PluginConfig } from "../plugin";
import { extractMeta } from "./extractMeta";
import { rawObjectCompiler } from "../compilers/rawObjectCompiler";
import { randomId } from "@c11/engine.utils";

export const instrumentProducer = (
  babel: typeof Babel,
  config: PluginConfig,
  state: Babel.PluginPass,
  path: Babel.NodePath<Babel.types.VariableDeclarator>
) => {
  const t = babel.types;
  const node = path.node;

  if (!t.isArrowFunctionExpression(node.init)) {
    throw path.buildCodeFrameError(Messages.ARROW_FUNCTION_EXPECTED);
  }

  const fn = node.init as Babel.types.ArrowFunctionExpression;
  const param = fn.params[0];

  if (param && !(t.isObjectPattern(param) || t.isIdentifier(param))) {
    throw path.buildCodeFrameError(Messages.INVALID_FUNCTION_PARAM);
  }

  let props;
  if (t.isObjectPattern(param)) {
    const parsedParam = paramParser(babel, param);
    fn.params = paramsCompiler(babel, parsedParam);
    props = structOperationCompiler(babel, parsedParam);
  } else {
    props = passthroughOperationCompiler(babel);
  }

  const metaProps = extractMeta(babel, state, path);
  const sourceId = `${metaProps.absoluteFilePath}:${metaProps.name}`;
  const buildId = randomId();

  if (
    !(process.env.NODE_ENV == "production" || process.env.NODE_ENV == "test")
  ) {
    const meta = rawObjectCompiler(babel, metaProps);

    const result = t.objectExpression([
      t.objectProperty(t.identifier("fn"), fn),
      t.objectProperty(t.identifier("props"), props),
      t.objectProperty(t.identifier("meta"), meta),
      t.objectProperty(t.identifier("type"), t.stringLiteral("producer")),
      t.objectProperty(t.identifier("buildId"), t.stringLiteral(buildId)),
      t.objectProperty(t.identifier("buildAt"), t.numericLiteral(Date.now())),
      t.objectProperty(t.identifier("sourceId"), t.stringLiteral(sourceId)),
    ]);
    const configId = `__ENGINE_CONFIG__${metaProps.name}`;
    const declaration = path.find((x) => t.isVariableDeclaration(x));
    if (declaration) {
      const foo = t.variableDeclaration("const", [
        t.variableDeclarator(t.identifier(configId), result),
      ]);
      declaration.insertBefore(foo);
    }
    node.init = t.identifier(configId);
  } else {
    const result = t.objectExpression([
      t.objectProperty(t.identifier("fn"), fn),
      t.objectProperty(t.identifier("props"), props),
      t.objectProperty(t.identifier("type"), t.stringLiteral("producer")),
      t.objectProperty(t.identifier("buildId"), t.stringLiteral(buildId)),
    ]);
    node.init = result;
  }
};
