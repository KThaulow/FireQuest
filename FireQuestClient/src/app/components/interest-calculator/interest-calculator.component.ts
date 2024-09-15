import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
  
@Component({
  selector: 'app-interest-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, BaseChartDirective],
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.scss'],
})
export class InterestCalculatorComponent {
  existingSavings = 100000;
  expectedReturn = 5;
  years = 10;
  months = 0;
  compoundInterval = 'annually';
  monthlyContribution = 0;
  result = 0;

  // Chart configuration
  public chartData: ChartData<'line'> = {
    labels: [] as string[],  // Years
    datasets: [
      {
        data: [] as number[],  // Data for each year
        label: 'Savings Growth',
        borderColor: '#4CAF50',
        fill: false,
      },
    ],
  };

  public chartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: { 
        title: { 
          display: true, 
          text: 'Years' 
        } 
      },
      y: { 
        title: { 
          display: true, 
          text: 'Amount' 
        },
        beginAtZero: true 
      },
    },
  };

  constructor() {
    this.calculate();  // Initial calculation
  }

  calculate() {
    const totalYears = this.years + this.months / 12;
    const annualReturn = this.expectedReturn / 100;
    let balance = this.existingSavings;
  
    const yearlyData = [];
    for (let i = 1; i <= totalYears; i++) {
      balance = balance * (1 + annualReturn);
      balance += this.monthlyContribution * 12;
      yearlyData.push(parseFloat(balance.toFixed(2)));  // Convert to number before pushing
    }
  
    // Update chart data and labels
    this.chartData.labels = Array.from({ length: totalYears }, (_, i) => `Year ${i + 1}`);
    this.chartData.datasets[0].data = yearlyData;
  }
}