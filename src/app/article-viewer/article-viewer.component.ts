import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../Article';
import {ActivatedRoute} from '@angular/router';
import {ArticleEditorComponent} from '../article-editor/article-editor.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {

  selectedArticle: Article = this.articleSvc.selectedArticle;
  id: number;

  constructor(private articleSvc: ArticleService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.setArticle(+this.route.snapshot.paramMap.get('id'));
  }

  setArticle(id) {
    this.selectedArticle = this.articleSvc.getArticle(id);
  }


  openEditor(){
    const dialogRef = this.dialog.open(ArticleEditorComponent, {
      width: '65%',
      height: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
