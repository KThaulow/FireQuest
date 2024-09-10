import { FlowNode } from "./flow-node.model";

export const coffeeQuestions: FlowNode[] = [
  {
    id: 'q1',
    type: 'question',
    content: 'Do you like coffee?',
    next: [
      { answer: 'Yes', nextNodeId: 'q2' },
      { answer: 'No', nextNodeId: 'tea1' },
    ],
  },
  {
    id: 'q2',
    type: 'question',
    content: 'Do you like it with milk?',
    next: [
      { answer: 'Yes', nextNodeId: 'result1' },
      { answer: 'No', nextNodeId: 'result2' },
    ],
  },
];