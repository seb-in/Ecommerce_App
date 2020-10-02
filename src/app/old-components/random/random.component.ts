import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  title = 'binding';
  public n = "Rajesh";
  public message = "";

  constructor() { }

  ngOnInit(): void {
  }

}
