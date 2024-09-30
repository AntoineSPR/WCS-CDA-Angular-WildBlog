import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HomePageComponent, Article } from '../home-page/home-page.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, ArticleComponent, HomePageComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  @Input() article!: Article | undefined;
  @Input() homePageComponent!: HomePageComponent;
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article = this.homePageComponent.articles.find(a => a.id === this.articleId);
    });
  }
}
