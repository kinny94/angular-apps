import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  constructor(private router: Router) {

  }

  routeToHome(): void {
    this.router.navigate(['/']);
  }
}
