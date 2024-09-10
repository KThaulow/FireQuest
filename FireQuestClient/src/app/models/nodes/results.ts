import { FlowNode } from './flow-node.model';

export const resultNodes: FlowNode[] = [
  {
    id: 'result1',
    type: 'result',
    content: 'You like coffee with milk!',
  },
  {
    id: 'result2',
    type: 'result',
    content: 'You like black coffee!',
  },
  {
    id: 'result3',
    type: 'result',
    content: 'You prefer tea!',
  },
  {
    id: 'result4',
    type: 'result',
    content: 'You might prefer another beverage!',
  },
];