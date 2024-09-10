// src/app/models/flow-node.model.ts
export interface FlowNode {
  id: string;  // Unique identifier for the node
  type: 'question' | 'result';  // Type of node
  content: string;  // The question or result text
  next?: FlowTransition[];  // Array of possible transitions (for questions only)
}

export interface FlowTransition {
  answer: string;  // Answer leading to the next node
  nextNodeId: string;  // The ID of the next node
}

export interface FlowChart {
  nodes: FlowNode[];  // List of nodes in the flow
  startNodeId: string;  // The starting node ID
}