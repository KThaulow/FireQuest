import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowService } from '../../services/flow.service';
import { FlowNode } from '../../models/flow-node.model';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FlowchartComponent {
  currentNode: FlowNode;

  constructor(private flowService: FlowService) {
    this.currentNode = this.flowService.getCurrentNode();
  }

  onSelectAnswer(answer: string) {
    this.flowService.selectAnswer(answer);
    this.currentNode = this.flowService.getCurrentNode();
  }

  resetFlow() {
    this.flowService.resetFlow();
    this.currentNode = this.flowService.getCurrentNode();
  }
}