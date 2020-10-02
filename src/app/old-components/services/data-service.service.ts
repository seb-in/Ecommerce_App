import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private globalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/07-26-2020.csv"
  constructor(private http: HttpClient) { }

  getglobalData() {
    return this.http.get(this.globalDataUrl , {responseType : 'text'}).pipe(
      map(result=>{
        
      })
    )
      
  }
}