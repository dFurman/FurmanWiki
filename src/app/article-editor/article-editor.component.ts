import {Component, OnInit} from '@angular/core';
import {Article} from '../Article';
import {ArticleService} from '../article.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  constructor(private articleSvc: ArticleService,
              private location: Location,
              private route: ActivatedRoute,) {
  }

  article: Article;


  ngOnInit() {
    this.setArticle(+this.route.snapshot.paramMap.get('id'));
  }

  setArticle(id) {
    this.article = this.articleSvc.getArticle(id);
  }

  onSave(title, author, body, imgUrl) {
    this.article.title = title;
    this.article.author = author;
    this.article.body = body;
    this.article.imgUrl = imgUrl;
  }
}
