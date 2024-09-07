export interface FlowNode {
  id: string;
  type: 'question' | 'result' | 'decision';
  content: string;  // Question or result content
  next?: FlowTransition[];  // Array of possible transitions
}

export interface FlowTransition {
  answer: string;
  nextNodeId: string;  // ID of the next node
  condition?: (context: any) => boolean;  // Optional condition to check before transition
}

export interface FlowResultNode extends FlowNode {
  type: 'result';  // For result node
  result: string;  // Result or conclusion text
}

export interface FlowChart {
  nodes: FlowNode[];  // List of nodes
  startNodeId: string;  // Starting node ID
}