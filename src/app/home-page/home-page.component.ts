import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { RouterLink } from '@angular/router';

export interface Article {
  id?: number,
  title: string,
  author: string,
  content: string,
  image: string,
  imageAlt?: string,
  isPublished: boolean,
  comment: string,
  likes?: number,
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  likedMessage: string = "";

  displayLike(message: string) {
    this.likedMessage = message;
  } 

  jakeArticle: Article = {
    title: 'Adventure Time',
    author: 'Finn', 
    content: 'Come on, grab your friend, we\'ll go to very distant lands!', 
    image: 'assets/JakeTheDog.jpg', 
    imageAlt: 'Jake. He\'s a dog.',
    isPublished: true, 
    comment: '',
  }

  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: 'Les nouveautés d\'Angular 16 incluent...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 120
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200
    }
  ];
}
