import { Component, inject, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
  articles!: Observable<Article[]>
  _http = inject(HttpClient);
  url = "http://localhost:3000/articles";
  
  getArticles(): void {
    this.articles = this._http.get<Article[]>(this.url);
  }

  ngOnInit() {
    this.getArticles();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
