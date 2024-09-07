import { Routes } from '@angular/router';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { WeatherComponent } from './weather/weather.component';
import { FlowchartComponent } from './components/flowchart/flowchart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = 
[
    {path: 'home', component: HomeComponent},
    {path: 'interest-calculator', component: InterestCalculatorComponent},
    {path: 'weather', component: WeatherComponent},
    {path: 'flowchart', component: FlowchartComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
