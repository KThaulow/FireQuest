import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class InterestCalculatorComponent {
  existingSavings: number = 50000;
  expectedReturn: number = 7;
  years: number = 10;
  months: number = 0;
  compoundInterval: string = 'annually';
  monthlyContribution: number = 5000;

  calculate() {
    const totalYears = this.years + this.months / 12;
    const annualRate = this.expectedReturn / 100;
    const monthlyRate = annualRate / 12;
    let finalAmount = this.existingSavings;
    
    for (let i = 0; i < totalYears * 12; i++) {
      finalAmount = finalAmount * (1 + monthlyRate) + this.monthlyContribution;
    }
    
    alert(`Final Amount: ${finalAmount.toFixed(2)} Kr.`);
  }
}
