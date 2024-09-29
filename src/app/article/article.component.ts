import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  title: string,
  author: string, 
  content: string, 
  image: string, 
  imageAlt: string,
  isPublished: boolean, 
  comment: string,
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  article: Article = {
    title: 'Adventure Time',
    author: 'Finn', 
    content: 'Come on, grab your friend, we\'ll go to very distant lands!', 
    image: 'assets/JakeTheDog.jpg', 
    imageAlt: 'Jake. He\'s a dog.',
    isPublished: true, 
    comment: '',
  }

  togglePublishing(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
