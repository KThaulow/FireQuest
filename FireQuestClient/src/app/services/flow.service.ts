import { Injectable } from '@angular/core';
import { FlowChart, FlowNode } from '../models/nodes/flow-node.model';
import { flowConfig } from '../models/nodes/flowConfig';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  private flowchart: FlowChart;

  constructor() {
    this.flowchart = flowConfig;
  }

  selectAnswer(currentNode: FlowNode, answer: string): FlowNode | null {
    const nextTransition = currentNode.next?.find(t => t.answer === answer);
    if (nextTransition && nextTransition.nextNodeId) {
       return this.getNodeById(nextTransition.nextNodeId);
    }

    return null;
  }

  getAllNodes(): FlowNode[] {
    return this.flowchart.nodes;
  }

  getStartingNode(): FlowNode {
    return this.getNodeById(this.flowchart.startNodeId);
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

  findMaxDepth(node: FlowNode, visited = new Set<string>(), depth = 0): number {
    // If the node is already in the visited set, return the current depth (cycle detected)
    if (visited.has(node.id)) {
      return depth;
    }
  
    // If it's a result node, we've reached the end of this path
    if (!node.next) {
      return depth;
    }
  
    // Mark the current node as visited
    visited.add(node.id);
  
    // Recursively check each possible answer's next node
    const nextDepths = node.next.map((answer) => {
      const nextNode = this.flowchart.nodes.find(n => n.id === answer.nextNodeId);
      if (nextNode) {
        return this.findMaxDepth(nextNode, new Set(visited), depth + 1); // Pass a copy of the visited set to avoid mutation
      }
      return depth;
    });
  
    // Return the maximum depth from all possible paths
    return Math.max(...nextDepths);
  }
}