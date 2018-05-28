import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../Article';
import {ArticleViewerComponent} from '../article-viewer/article-viewer.component';

@Component({
  selector: 'app-aricle-side-nav',
  templateUrl: './aricle-side-nav.component.html',
  styleUrls: ['./aricle-side-nav.component.css']
})
export class AricleSideNavComponent implements OnInit {
  articles: Article[] = [];
  articlesToggle: boolean = true;

  constructor(private articleSvc: ArticleService,
              private articleCmp: ArticleViewerComponent) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleSvc.getArticles().subscribe(articles => this.articles = articles);
  }

  selectArticle(id): void{
    this.articleSvc.selectArticle(id);
    this.articleCmp.setArticle(id);
  }

  toggleArticles(){
    if(this.articlesToggle){
      this.articlesToggle = false;
    } else {
      this.articlesToggle = true;
    }
  }

}
