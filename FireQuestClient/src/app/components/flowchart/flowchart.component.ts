import { Component, OnInit } from '@angular/core';
import { FlowService } from '../../services/flow.service';
import { FlowNode } from '../../models/nodes/flow-node.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FlowchartComponent implements OnInit {
  currentNode!: FlowNode;
  nextNode: FlowNode | null = null;
  nodeHistory: FlowNode[] = [];
  transitionDirection: 'left' | 'right' = 'left';
  isTransitioning = false;
  progressPercentage = 0;

  constructor(private flowService: FlowService) {}

  ngOnInit(): void {
    this.currentNode = this.flowService.getCurrentNode();
    this.nodeHistory.push(this.currentNode);
    this.updateProgress();
  }

  selectAnswer(answer: string): void {
    this.flowService.selectAnswer(answer);
    this.nextNode = this.flowService.getCurrentNode();
    this.transitionDirection = 'left';
    this.isTransitioning = true;
    
    setTimeout(() => {
      this.currentNode = this.nextNode!;
      this.nodeHistory.push(this.currentNode);
      this.nextNode = null;
      this.isTransitioning = false;
      this.updateProgress();
    }, 500); // Match this to your CSS animation duration
  }

  goBack(): void {
    if (this.canGoBack) {
      this.transitionDirection = 'right';
      this.nextNode = this.nodeHistory[this.nodeHistory.length - 2];
      this.isTransitioning = true;
      
      setTimeout(() => {
        this.nodeHistory.pop();
        this.currentNode = this.nextNode!;
        this.nextNode = null;
        this.isTransitioning = false;
        this.updateProgress();
      }, 500); // Match this to your CSS animation duration
    }
  }

  resetFlow(): void {
    this.flowService.resetFlow();
    this.currentNode = this.flowService.getCurrentNode();
    this.nodeHistory = [this.currentNode];
    this.nextNode = null;
    this.isTransitioning = false;
    this.updateProgress();
  }

  get canGoBack(): boolean {
    return this.nodeHistory.length > 1;
  }

  private updateProgress(): void {
    const totalNodes = this.flowService.getTotalNodes();
    this.progressPercentage = (this.nodeHistory.length / totalNodes) * 100;
  }
}