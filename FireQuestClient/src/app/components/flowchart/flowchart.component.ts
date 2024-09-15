import { Component, OnInit } from '@angular/core';
import { FlowService } from '../../services/flow.service';
import { FlowNode } from '../../models/nodes/flow-node.model';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule, MatCardModule]
})
export class FlowchartComponent implements OnInit {
  currentNode!: FlowNode;
  nextNode: FlowNode | null = null;
  nodeHistory: FlowNode[] = [];
  isTransitioning = false;
  progressPercentage = 0;

  constructor(private flowService: FlowService) {}

  ngOnInit(): void {
    this.currentNode = this.flowService.getStartingNode();
    this.nodeHistory.push(this.currentNode);
    this.updateProgress();
  }

  selectAnswer(answer: string): void {
    if (this.isTransitioning) return;

    this.nextNode = this.flowService.selectAnswer(this.currentNode, answer);
    this.isTransitioning = true;
    
    setTimeout(() => {
      this.currentNode = this.nextNode!;
      this.nodeHistory.push(this.currentNode);
      this.nextNode = null;
      this.isTransitioning = false;
      this.updateProgress();
    }, 500); // Match this with your transition duration in SCSS
  }

  goBack(): void {
    if (!this.canGoBack || this.isTransitioning) return;

    this.isTransitioning = true;
    this.nextNode = this.nodeHistory[this.nodeHistory.length - 2];
    
    setTimeout(() => {
      this.nodeHistory.pop();
      this.currentNode = this.nextNode!;
      this.nextNode = null;
      this.isTransitioning = false;
      this.updateProgress();
    }, 500); // Match this with your transition duration in SCSS
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
    
    if (this.currentNode.type === 'result') {
      this.progressPercentage = 100;
    }
  }
}