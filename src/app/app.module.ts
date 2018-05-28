import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArticlesComponent } from './articles/articles.component';
import { AricleSideNavComponent } from './aricle-side-nav/aricle-side-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { NewArticleFormComponent } from './new-article-form/new-article-form.component';
import { FormatDatePipe } from './format-date.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    ArticlesComponent,
    AricleSideNavComponent,
    ArticleViewerComponent,
    ArticleEditorComponent,
    NewArticleFormComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
