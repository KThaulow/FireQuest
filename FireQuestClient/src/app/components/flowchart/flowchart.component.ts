import { Component, OnInit } from '@angular/core';
import { FlowService } from '../../services/flow.service';
import { FlowNode } from '../../models/nodes/flow-node.model';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule]
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
    this.currentNode = this.flowService.getStartingNode();
    this.nodeHistory.push(this.currentNode);
    this.updateProgress();
  }

  selectAnswer(answer: string): void {
    this.nextNode = this.flowService.selectAnswer(this.currentNode, answer);
    this.transitionDirection = 'left';
    this.isTransitioning = true;
    
    setTimeout(() => {
      this.currentNode = this.nextNode!;
      this.nodeHistory.push(this.currentNode);
      this.nextNode = null;
      this.isTransitioning = false;
      this.updateProgress();
    }, 500);
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
      }, 500);
    }
  }

  resetFlow(): void {
    this.currentNode = this.flowService.getStartingNode();
    this.nodeHistory = [this.currentNode];
    this.nextNode = null;
    this.isTransitioning = false;
    this.updateProgress();
  }

  get canGoBack(): boolean {
    return this.nodeHistory.length > 1;
  }

  private updateProgress(): void {
    const maxDepth = this.flowService.findMaxDepth(this.currentNode);
    this.progressPercentage = (this.nodeHistory.length / (maxDepth + this.nodeHistory.length)) * 100;

    if(this.currentNode.type == 'result')
    {
      this.progressPercentage = 100;
    }
  }
}