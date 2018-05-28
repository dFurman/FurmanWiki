import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleViewerComponent} from './article-viewer/article-viewer.component';
import {ArticleEditorComponent} from './article-editor/article-editor.component';
import {NewArticleFormComponent} from './new-article-form/new-article-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/new', component: NewArticleFormComponent},
  {path: 'articles/:id', component: ArticleViewerComponent},
  {path: 'articles/:id/edit', component: ArticleEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
