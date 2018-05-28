import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-article-form',
  templateUrl: './new-article-form.component.html',
  styleUrls: ['./new-article-form.component.css']
})
export class NewArticleFormComponent implements OnInit {

  constructor(private articleSvc: ArticleService,
              private location: Location) {
  }

  private title: string;
  private author: string;
  private body: string;

  ngOnInit() {
  }

  onAdd() {
    const newArticle = this.articleSvc.addNewArticle(this.title, this.body, this.author);
    // this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
