import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pylogin',
  templateUrl: './pylogin.component.html',
  styleUrls: ['./pylogin.component.css']
})
export class PyloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  OnClick(){
    this.router.navigate(['/pyhome']);
  }

}
