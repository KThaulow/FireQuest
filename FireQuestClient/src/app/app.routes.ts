import { Routes } from '@angular/router';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FlowchartComponent } from './components/flowchart/flowchart.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ArticleManagerComponent } from './components/article-manager/article-manager.component';

export const routes: Routes = 
[
    { path: 'home', component: HomeComponent},
    { path: 'weather', component: WeatherComponent},
    { path: 'interest', component: InterestCalculatorComponent},
    { path: 'flow', component: FlowchartComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'articles', component: ArticleManagerComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
