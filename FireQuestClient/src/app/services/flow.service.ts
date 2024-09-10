import { Injectable } from '@angular/core';
import { FlowChart, FlowNode } from '../models/nodes/flow-node.model';
import { flowConfig } from '../models/nodes/flowConfig';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  private flowchart: FlowChart;
  private currentNode: FlowNode;

  constructor() {
    this.flowchart = flowConfig;
    this.currentNode = this.getNodeById(this.flowchart.startNodeId);
  }

  getCurrentNode(): FlowNode {
    return this.currentNode;
  }

  selectAnswer(answer: string): void {
    const nextTransition = this.currentNode.next?.find(t => t.answer === answer);
    if (nextTransition && nextTransition.nextNodeId) {
      this.currentNode = this.getNodeById(nextTransition.nextNodeId);
    }
  }

  getAllNodes(): FlowNode[] {
    return this.flowchart.nodes;
  }

  resetFlow(): void {
    this.currentNode = this.getNodeById(this.flowchart.startNodeId);
  }

  getNodeById(nodeId: string): FlowNode {
    const node = this.flowchart.nodes.find(node => node.id === nodeId);
    if (!node) {
      throw new Error(`Node with id ${nodeId} not found`);
    }
    return node;
  }

  getTotalNodes(): number {
    return this.flowchart.nodes.length;
  }
}