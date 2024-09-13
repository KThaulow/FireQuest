import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent {
  links = [
    {
      title: 'Spiir',
      description: 'Få overblik over dine penge på den nemmeste måde',
      url: 'https://www.spiir.dk/',
    },
    {
      title: 'Gratis Budgetskema',
      description: 'Sådan lægger du et budget. Få gode råd til at lægge et budget',
      url: 'https://www.nordea.dk/privat/dit-liv/opsparing/budget.html',
    },
    {
      title: 'Tænk',
      description: 'Husk disse budgetposter, når du lægger budget',
      url: 'https://taenk.dk/privatoekonomi/gode-raad/budget-oversigt-over-budgetposter',
    },
  ];
}