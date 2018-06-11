import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../Article';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {

  private filteredArticles;

  constructor(private articleSvc: ArticleService,
              private route: ActivatedRoute) {
    this.filteredArticles = this.articleSvc.filteredArticles;
  }

  ngOnInit() {

    // this.articleSvc.searchArticle().subscribe(data => {
    // this.articleSvc.getArticles().subscribe(data => {
    //   const filter = this.route.snapshot.paramMap.get('filter');
    //   // console.log(data);
    //   this.filteredArticles = data.filter(element => {
    //     if (!element.title.toLowerCase().indexOf(filter.toLowerCase())) {
    //       return true;
    //     }
    //   });
    // });
    // console.log(this.filteredArticles);
    // // this.filteredArticles = data;
  }

}
