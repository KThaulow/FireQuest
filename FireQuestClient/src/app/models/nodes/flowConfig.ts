import { coffeeQuestions } from "./cofee-questions";
import { FlowChart } from "./flow-node.model";
import { resultNodes } from "./results";
import { teaQuestions } from "./tea-questions";

export const flowConfig: FlowChart = {
  startNodeId: 'q1',
  nodes: [
    ...coffeeQuestions,
    ...teaQuestions,
    ...resultNodes,
  ],
};