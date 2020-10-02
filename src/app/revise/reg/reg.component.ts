import { StartaService } from './../starta.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  public name = '';
  public password = '';
  public confirmpassword = '';
  public error = '';

  constructor(public router: Router, public start: StartaService) { }

  ngOnInit(): void {
  }

  regtoservice(){
    this.start.registration(this.name,this.password)
    this.router.navigate(['login']);
  }
}
