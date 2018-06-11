import {Injectable} from '@angular/core';
import {Article} from './Article';
import {Observable, of} from 'rxjs';
import {ARTICLES} from './mock-articles';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = ARTICLES;
  selectedArticle: Article = this.articles[0];

  filteredArticles: Article[] = this.articles;

  constructor(private http: HttpClient) {
  }


  newFormattedDate() {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyyy = now.getFullYear();
    let hh: any = now.getHours();
    if (hh < 10) {
      hh = '0' + hh;
    }
    let m: any = now.getMinutes();
    if (m < 10) {
      m = '0' + m;
    }
    let ss: any = now.getSeconds();
    if (ss < 10) {
      ss = '0' + ss;
    }

    return `${dd}/${mm}/${yyyy}, ${hh}:${m}:${ss}`;
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  selectArticle(id) {
    this.selectedArticle = this.articles.find(article => article.id === id);
  }

  getArticle(id): Article {
    return this.articles.find(article => article.id === id);
  }

  getArticlesDB() {
    return this.http.get('http://localhost:4000/articles');
  }

  getSelectedArticle(): Article {
    return this.selectedArticle;
  }

  searchArticle(filter): Observable<Article[]> {
    this.filteredArticles = [];
    this.articles.forEach(element => {
      if (element.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
        this.filteredArticles.push(element);
      }
    });
    return this.getFilteredArticle();
  }

  getFilteredArticle(): Observable<Article[]> {
    return of(this.filteredArticles);
  }

  addNewArticle(title: string, body: string, author: string) {
    // const date = new Date();
    const newArticle: Article = {
      id: this.articles[this.articles.length - 1].id + 1,
      // dateCreated: date | formatDate,
      dateCreated: this.newFormattedDate(),
      title: title,
      author: author,
      body: body,
      imgUrl: '../../assets/question-mark.jpg',
    };

    this.articles.push(newArticle);
    console.log('Article Added !');
    return newArticle;
  }

}

