import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'FireQuestClient';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation Ended KT:', event.urlAfterRedirects);
      } else if (event instanceof NavigationStart) {
        console.log('Navigation Started KT:', event.url);
      }
    });
  }

  ngOnInit(): void {
    console.log("Home has loaded")
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called in HomeComponent');
  }
}
