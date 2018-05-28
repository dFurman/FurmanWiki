import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private articleSvc: ArticleService) { }
lastArticles: Article[]
  ngOnInit() {
    this.articleSvc.getArticles().subscribe(data => this.lastArticles = data.slice(data.length-5, data.length))
    // console.log(this.lastArticles)
  }

}
