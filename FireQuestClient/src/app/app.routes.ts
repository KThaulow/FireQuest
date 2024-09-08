import { Routes } from '@angular/router';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FlowchartComponent } from './components/flowchart/flowchart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

export const routes: Routes = 
[
    { path: 'home', component: HomeComponent},
    { path: 'weather', component: WeatherComponent},
    { path: 'interest', component: InterestCalculatorComponent},
    { path: 'flow', component: FlowchartComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
