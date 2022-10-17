import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disgust';
   scurry() {

    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

    console.log(offsetLeft, offsetTop);

    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';
  }

  button.forEach(button =>
  button.addEventListener('mouseenter', scurry));
}

const button = document.querySelectorAll('button');


//make a directive, use host listener
