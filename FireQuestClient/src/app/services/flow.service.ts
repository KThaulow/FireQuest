import { Injectable } from '@angular/core';
import { FlowChart, FlowNode } from '../models/flow-node.model';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  private flowchart: FlowChart;
  private currentNode: FlowNode;

  constructor() {
    // Example static flowchart data
    this.flowchart = flowchartData;
    this.currentNode = this.getNodeById(this.flowchart.startNodeId);
  }

  getCurrentNode(): FlowNode {
    return this.currentNode;
  }

  selectAnswer(answer: string) {
    const transition = this.currentNode.next?.find(t => t.answer === answer);
    if (transition && transition.nextNodeId) {
      this.currentNode = this.getNodeById(transition.nextNodeId);
    }
  }

  getNodeById(nodeId: string): FlowNode {
    return this.flowchart.nodes.find(node => node.id === nodeId)!;
  }

  resetFlow() {
    this.currentNode = this.getNodeById(this.flowchart.startNodeId);
  }
}

// Example flowchart data (replace this with actual data or fetch from an API)
const flowchartData: FlowChart = {
  startNodeId: 'start',
  nodes: [
    {
      id: 'start',
      type: 'question',
      content: 'Do you want to retire early?',
      next: [
        { answer: 'Yes', nextNodeId: 'savings' },
        { answer: 'No', nextNodeId: 'end' }
      ]
    },
    {
      id: 'savings',
      type: 'question',
      content: 'Do you have a savings plan?',
      next: [
        { answer: 'Yes', nextNodeId: 'invest' },
        { answer: 'No', nextNodeId: 'startSaving' }
      ]
    },
    {
      id: 'invest',
      type: 'question',
      content: 'Do you invest regularly?',
      next: [
        { answer: 'Yes', nextNodeId: 'end' },
        { answer: 'No', nextNodeId: 'startInvest' }
      ]
    },
    {
      id: 'startSaving',
      type: 'result',
      content: 'Start saving now'
    },
    {
      id: 'startInvest',
      type: 'result',
      content: 'Start invest now'
    },
    {
      id: 'end',
      type: 'result',
      content: 'You have everything under control'
    }
  ]
};