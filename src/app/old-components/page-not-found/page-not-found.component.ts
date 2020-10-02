import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class = "mat-display-4">
      Page not found!!
    </div>
  `,
  styles: [`
    div {
      color: red;
      text-align: center;
      padding-top: 70px;
      width: 80%
    }
  `]
  
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
