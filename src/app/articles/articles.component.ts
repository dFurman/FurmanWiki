import {Component, OnInit} from '@angular/core';
import {Article} from '../Article';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];

  constructor(private articleSvc: ArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.articleSvc.getArticles().subscribe(data => this.articles = data);
    // console.log(this.articleSvc.getArticlesDB().subscribe(data => return data));
    // this.articles = this.articleSvc.filteredArticles;
    this.articleSvc.getFilteredArticle().subscribe(data => {
      this.articles = data;
    })
  }

}
