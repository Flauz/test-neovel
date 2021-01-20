import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book = null
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getBook()
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://neoreader-preprod.neovel.io/V1/book/details?bookId=${id}&language=ALL`)
      .subscribe(res => {
        console.log(res);
        this.book = res
      })
  }

}
