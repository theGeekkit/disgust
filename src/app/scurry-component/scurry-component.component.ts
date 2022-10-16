import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scurry-component',
  templateUrl: './scurry-component.component.html',
  styleUrls: ['./scurry-component.component.css']
})
export class ScurryComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
function scurry() {
  const offsetLeft = Math.random() * (window.innerWidth - roach1.clientWidth)
  const offsetTop = Math.random() * (window.innerHeight - roach1.clientHeight)

  console.log(offsetLeft, offsetTop);

  roach1.style.top = offsetTop + 'px';
  roach1.style.left = offsetLeft + 'px';
}

roach1.addEventListener('mouseenter', scurry);
