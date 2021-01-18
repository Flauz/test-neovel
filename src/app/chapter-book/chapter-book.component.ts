import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-chapter-book',
  templateUrl: './chapter-book.component.html',
  styleUrls: ['./chapter-book.component.scss']
})
export class ChapterBookComponent implements OnInit {
  chapters = []
  constructor(public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,) { }

  ngOnInit(): void {
    this.getChapter()
  }
  getChapter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://neoreader-preprod.neovel.io/V5/chapters?bookId=${id}`)
      .subscribe(res => {
        console.log(res);
        this.chapters = res
      })
  }
}
