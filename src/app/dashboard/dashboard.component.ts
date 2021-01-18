import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://neoreader-preprod.neovel.io/V1/book/offline/mostRead')
    .subscribe(res => {console.log(res);
    this.books = res})
  }

}
