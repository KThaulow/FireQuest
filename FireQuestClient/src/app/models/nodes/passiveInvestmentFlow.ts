import { FlowNode } from "./flow-node.model";


export const accumulatedEtf = `Akkumulerende ETF'er fra skats positivliste. 
    Fordele: Lav AOP, akkumulerende. 
    Ulemper: Vekslingsgebyr, lagerbeskatning og depotgebyr i mange banker. 
    Oplagt til depoter der i forvejen er lagerbeskattede. 
    Eksempel pả en portefolje: 100% iShares MSCI ACWI UCITS (IUSQ)`;

export const danishAccumulatedFonds = `Danske akkumulerende aktiefonde eller ETF'er som ikke er pa Skats positivliste.
    Fordele: Beskattet som kapitalindkomst
    Ulemper: Beskattet som kapitalindkomst
    Oplagt hvis man ikke udnytter sit bundfradrag, eksempelvis ved FIRE eller små børn.
    Eksempel pa en portefolje:
    100% INDEX Globale Aktier Min. Risiko Akk. KL (SPVIGAMRAKL)`;

export const danishRealizingFonds = `Danske realiserings beskattede aktiefonde.
    Fordele: Realisationsbeskatning, ingen vekslingsgebyr
    Ulemper: Lidt hojere AOP, udbyttebetalende
    Oplagt til frie midler hvor man kan udnytte rentes rente effekten ved realiseringsbeskatning
    Eksempel pa en portefolje:
    100% Danske Inv Global Indeks (DK/GI)
    eller
    100% Storebrand Indeks - Alle Markeder A5 (STIIAM)`;

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
      { answer: 'Jeg vil gerne kunne trakke mig tilbage fra arbejdsmarkedet mere end 3/5* ar for folkepensions-alderen, herunder FIRE', nextNodeId: 'aktieSpareKonto' },
      { answer: 'Jeg vil gerne have flere penge til radighed efter jeg runder folkepensionsalderen eller tidligst 3/5 år for', nextNodeId: 'aldersOpsparing' },
      { answer: 'Jeg vil gerne opbygge en formue, hvor der ikke er nogen begransninger angaende udbetaling', nextNodeId: 'aktieSpareKonto' },
    ],
  },
];

// Child Savings Section
export const childSavingsQuestions: FlowNode[] = [
  {
    id: 'childSavings',
    type: 'question',
    content: 'Opret en børneopsparing til dine børn. Det mest optimale produkt kommer an pả din bank. Vær opmarksom pa at minimere gebyrer og AOP. Særlig opmarksomhed pa depotgebyrer for udenlandske vardipapirer',
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'unrestrictedSavingsChildren' },
    ],
  },
  {
    id: 'unrestrictedSavingsChildren',
    type: 'question',
    content: 'Opret et almindeligt depot (frie midler) til dine born. Pengene skal indbetales af andre end barnets forældre, fx bedsteforaldre. Invester i danske akkumulerende aktiefonde eller ETFer som ikke er pa. Skats positivliste',
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'ageSavingKids' },
    ],
  },
  {
    id: 'ageSavingKids',
    type: 'result',
    content: 'Opret en aldersopsparing og /eller aktiesparekonto til dine born. Invester i akkumulerende EFTer. Du kan maksimalt give 74.100 kr (2024) / pengegaver arligt til hvert af dine',
    infoBox: accumulatedEtf
  },
];

// Retirement Savings Section
export const retirementSavingsQuestions: FlowNode[] = [
  {
    id: 'aldersOpsparing',
    type: 'question',
    content: 'Opret en aldersopsparing. Invester i akkumulerende ETFer, Undersog forst om du allerede har en aldersopsparing igennem din arbejdsmarkedspension',
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'retirementSavings' },
    ],
    infoBox: 'Akkumulerende ETFer fra skats positivliste. Fordele: Lav AOP, akkumulerende. Ulemper: Vekslingsgebyr, lagerbeskatning og depotgebyr i mange banker. Oplagt til depoter der i forvejen er lagerbeskattede. Eksempel pả en portefolje: 100% iShares MSCI ACWI UCITS (IUSQ)'
  },
  {
    id: 'retirementSavings',
    type: 'question',
    content: 'Betaler du topskat?',
    next: [
      { answer: 'Ja', nextNodeId: 'pensionSavings' },
      { answer: 'Nej', nextNodeId: 'earlyRetirement' },
    ],
  },
  {
    id: 'pensionSavings',
    type: 'question',
    content: 'Opret en ratepension. Indbetal indtil du enten kommer under topskattegransen, fuldt ud udnytter det forhojede ekstra pensionsfradrag eller rammer indbetalingsloftet. Invester i akkumulerende ETFer',
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'aktieSpareKonto' },
    ],
  },
  {
    id: 'aktieSpareKonto',
    type: 'question',
    content: 'Opret en aktiesparekonto. Investér i akkumulerende ETF\'er.',
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'unrestrictedSavingsDanishFonds' },
    ],
  },
  {
    id: 'bundFradrag',
    type: 'question',
    content: 'Regner du med på et tidspunkt at du ikke udnytter dit bundfradrag fuldt ud?',
    next: [
      { answer: 'Ja', nextNodeId: 'unrestrictedSavingsEtf' },
      { answer: 'Nej', nextNodeId: 'unrestrictedSavingsDanishFonds' },
    ],
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
      { answer: 'Nej', nextNodeId: 'aktieSpareKonto' },
    ],
  },
  {
    id: 'pensionAccount',
    type: 'question',
    content: `Opret en ratepension.
      Indbetal indtil du enten kommer under topskattegransen, fuldt ud udnytter
      det forhojede ekstra pensionsfradrag eller rammer indbetalingsloftet.
      Invester i akkumulerende ETF'er`,
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'aktieSpareKonto' }
    ],
  },
];

// Unrestricted Savings Section
export const unrestrictedSavingsQuestions: FlowNode[] = [
  {
    id: 'unrestrictedSavingsEtf',
    type: 'result',
    content: 'Opret et almindeligt depot (frie midler). Investér i danske akkumulerende aktiefonde eller ETF\'er.',
    infoBox: danishAccumulatedFonds,
  },
  {
    id: 'unrestrictedSavingsDanishFonds',
    type: 'question',
    content: 'Opret et almindeligt depot (frie midler). Investér i danske realiserings beskattede aktiefonde',
    infoBox: danishRealizingFonds,
    next: [
      { answer: 'Det har jeg gjort', nextNodeId: 'bundFradrag' },
    ],
  },
];
