import {Component, OnInit} from '@angular/core';
import {Article} from '../Article';
import {ArticleService} from '../article.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor(private articleSvc: ArticleService,
              private location: Location) {
  }

  article: Article;
  backupArticle: Article;

  ngOnInit() {
    this.article = this.articleSvc.getSelectedArticle();
    this.backupArticle = this.article;
    // console.log('OnInit '+ this.article.title + ' ' + this.articleSvc.getSelectedArticle().title;
  }

  onCancel(): void {
    this.location.back();
  }
}
