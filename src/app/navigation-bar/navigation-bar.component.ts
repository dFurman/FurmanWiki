import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {SearchArticlesComponent} from '../search-articles/search-articles.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private articleSvc: ArticleService) { }

  ngOnInit() {
  }

  setFilteredArticles(filter){
    this.articleSvc.searchArticle(filter);
  }

}
