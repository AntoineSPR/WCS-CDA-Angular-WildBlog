import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../home-page/home-page.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  @Input() article!: Article;
  @Output() like: EventEmitter<string> = new EventEmitter<string>();

  togglePublishing(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  likeArticle() {
    this.like.emit(`L'article "${this.article.title}" a reçu du love !`); 
  }
}
