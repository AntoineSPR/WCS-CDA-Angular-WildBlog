import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HomePageComponent } from '../home-page/home-page.component';
import { Article } from '../../home-page/home-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  _http: HttpClient = inject(HttpClient);
  url: string = "http://localhost:3000/articles";

  articleId!: number;
  article!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.getArticleById(this.articleId);
  }

  getArticleById(id: number): void {
    this.article = this._http.get<Article>(this.url + "/" + id);
    console.log(this.article);
  }
}

