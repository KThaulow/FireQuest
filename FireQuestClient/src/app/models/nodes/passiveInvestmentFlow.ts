import { FlowNode } from "./flow-node.model";

// Investment Horizon Section
export const investmentHorizonQuestions: FlowNode[] = [
  {
    id: 'start',
    type: 'question',
    content: 'Er din tidshorisont mere end 5 år?',
    next: [
      { answer: 'Ja', nextNodeId: 'investGoal' },
      { answer: 'Nej', nextNodeId: 'lessThan5Years' },
    ],
  },
  {
    id: 'lessThan5Years',
    type: 'result',
    content: 'Med en tidshorisont på under 5 år, vil det i de fleste tilfælde være for risikabelt at investere.',
  },
];

// Investment Goal Section
export const investGoalQuestions: FlowNode[] = [
  {
    id: 'investGoal',
    type: 'question',
    content: 'Hvad er dit mål med at investere?',
    next: [
      { answer: 'Jeg vil gerne tilgodese mine børn', nextNodeId: 'childSavings' },
      { answer: 'Jeg vil gerne have penge til rådighed efter jeg runder folkepensionsalderen eller tidligst 3/5 år før', nextNodeId: 'retirementSavings' },
      { answer: 'Jeg vil gerne kunne trække mig tilbage fra arbejdsmarkedet før folkepensionsalderen', nextNodeId: 'earlyRetirement' },
      { answer: 'Jeg vil gerne opbygge en formue uden begrænsninger for udbetaling', nextNodeId: 'unrestrictedSavings' },
    ],
  },
];

// Child Savings Section
export const childSavingsQuestions: FlowNode[] = [
  {
    id: 'childSavings',
    type: 'result',
    content: 'Opret en børneopsparing til dine børn. Det mest optimale depot kommer an på din bank.',
  },
];

// Retirement Savings Section
export const retirementSavingsQuestions: FlowNode[] = [
  {
    id: 'retirementSavings',
    type: 'question',
    content: 'Betaler du topskat?',
    next: [
      { answer: 'Ja', nextNodeId: 'pensionSavings' },
      { answer: 'Nej', nextNodeId: 'earlyPension' },
    ],
  },
  {
    id: 'pensionSavings',
    type: 'result',
    content: 'Opret en aldersopsparing. Investér i akkumulerende ETF\'er.',
  },
  {
    id: 'earlyPension',
    type: 'result',
    content: 'Opret en aktiesparekonto. Investér i akkumulerende ETF\'er.',
  },
];

// Early Retirement Section
export const earlyRetirementQuestions: FlowNode[] = [
  {
    id: 'earlyRetirement',
    type: 'question',
    content: 'Har du mindre end 15 år til din folkepensionsalder?',
    next: [
      { answer: 'Ja', nextNodeId: 'pensionAccount' },
      { answer: 'Nej', nextNodeId: 'unrestrictedSavings' },
    ],
  },
  {
    id: 'pensionAccount',
    type: 'result',
    content: 'Opret en ratepension. Investér i akkumulerende ETF\'er.',
  },
];

// Unrestricted Savings Section
export const unrestrictedSavingsQuestions: FlowNode[] = [
  {
    id: 'unrestrictedSavings',
    type: 'result',
    content: 'Opret et almindeligt depot (frie midler). Investér i danske akkumulerende aktiefonde eller ETF\'er.',
  },
];