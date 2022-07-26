import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = 'Washington'
  userData = {
    email: "washloeps@gmail.com",
    role: "Desenvolvedor"
  }
  title = 'curso-angular';
}
