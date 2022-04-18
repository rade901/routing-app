import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'routing-app';
  year = new Date().getFullYear();
  time = new Date().toLocaleTimeString();
  
  public showMe: boolean = false;
  toggle() {
    this.showMe = !this.showMe
  }
}



