import { DataserviceService } from './../../services/dataservice.service';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData()
    .subscribe(
      {
        next : (result)=>{
          console.log(result)
        }
      }

    )
  }

}
