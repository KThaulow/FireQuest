import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { FlowchartComponent } from './components/flowchart/flowchart.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, HomeComponent, WeatherComponent, InterestCalculatorComponent, FlowchartComponent, MenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FireQuestClient';
}