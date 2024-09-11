import { FlowChart } from "./flow-node.model";
import { childSavingsQuestions, earlyRetirementQuestions, investGoalQuestions, investmentHorizonQuestions, retirementSavingsQuestions, unrestrictedSavingsQuestions } from "./passiveInvestmentFlow";

export const flowConfig: FlowChart = {
  startNodeId: 'start',
  nodes: [
    ...investmentHorizonQuestions,
    ...investGoalQuestions,
    ...childSavingsQuestions,
    ...retirementSavingsQuestions,
    ...earlyRetirementQuestions,
    ...unrestrictedSavingsQuestions
  ],
};