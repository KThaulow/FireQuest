import { FlowNode } from "./flow-node.model";

export const teaQuestions: FlowNode[] = [
  {
    id: 'tea1',
    type: 'question',
    content: 'Do you prefer tea instead?',
    next: [
      { answer: 'Yes', nextNodeId: 'result3' },
      { answer: 'No', nextNodeId: 'result4' },
    ],
  },
];