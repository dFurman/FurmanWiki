import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../Article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {

  selectedArticle: Article = this.articleSvc.selectedArticle;
  id: number;

  constructor(private articleSvc: ArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setArticle(+this.route.snapshot.paramMap.get('id'));
  }

  setArticle(id) {
    this.selectedArticle = this.articleSvc.getArticle(id);
  }

  formatBody(text: string) {
    let newText: string;
    // while (text.indexOf('**')) {
    const first = text.indexOf('**');
    const second = text.indexOf('**', first + 1);
    newText = text.slice(0, first);
    newText += `<span class="bold">`;
    newText += text.slice(first + 2, second);
    newText += `</span>`;
    newText += text.slice(second + 2, text.length);

    text = newText;
    // }
    // console.log(text);
    return text;
  }


}
