import { Component, Input } from '@angular/core';
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

  togglePublishing(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
