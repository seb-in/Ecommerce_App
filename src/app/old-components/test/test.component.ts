import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
  <button (click) = "fireEvent()" class = "btn btn-primary">Press here for Heading</button>
  <hr>
  <input #myid type = "text" placeholder = "enter details">
  <button (click) = "logValue(myid.value)">Log</button>{{greet}}
  
  <div><p>{{"Welcome " + name1}} </p></div>
  
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
    `,

  styles: []
})
export class TestComponent implements OnInit {

  
  @Input('parentData') public name1;
  @Output() public childEvent = new EventEmitter();
  public siteUrl = window.location.href;
  public greet="";
  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
  onClick(event) {
    console.log(event)
    this.greet = "Hello User"
  }
  logValue(val) {
    console.log(val)
  }
  fireEvent() {
    this.childEvent.emit("Welcome to App-Testing");
  }
}
