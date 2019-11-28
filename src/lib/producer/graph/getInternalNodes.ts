import merge from 'lodash/merge';
import { Operation, OperationTypes } from '..';
import { GraphStructure, InternalNode, NodeType } from '.';
import { getDeps } from './getDeps';
import { getInvoke } from './getInvoke';

export const getInternalNodes = (op: Operation, ns: string = 'internal') => {
  let graph: GraphStructure = {};
  if (op.type === OperationTypes.STRUCT) {
    Object.keys(op.value).forEach(x => {
      let id = ns ? `${ns}.${x}` : x;
      graph = merge(graph, getInternalNodes(op.value[x], id));
    });
  } else if (ns) {
    const node: InternalNode = {
      id: ns,
      op,
      type: NodeType.INTERNAL,
      value: undefined,
      dependsOn: getDeps(op),
      isDependedBy: [],
      removeListener: null,
      invokableWith: getInvoke(op)
    };
    graph[ns] = node;
  }
  return graph;
};
