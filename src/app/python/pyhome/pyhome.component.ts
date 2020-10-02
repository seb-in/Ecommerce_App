import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyhome',
  templateUrl: './pyhome.component.html',
  styleUrls: ['./pyhome.component.css']
})
export class PyhomeComponent implements OnInit {


  public fieldArray: Array<any> = [];
  public newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
