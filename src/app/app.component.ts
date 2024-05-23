import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  Odd: number[] = [];
  even: number[] = [];

  showoutput(event: number){
    if(event % 2 != 0){
      this.Odd.push(event)
      console.log(event);
    }else{
      this.even.push(event)
    }

  };
}
