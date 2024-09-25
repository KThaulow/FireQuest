import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
}

@Component({
  selector: 'app-article-manager',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule
  ],
  templateUrl: './article-manager.component.html',
  styleUrls: ['./article-manager.component.css']
})
export class ArticleManagerComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  categories: string[] = [];
  currentCategory: string | null = null;

  ngOnInit() {
    // Initialize with sample data
    this.articles = [
      { id: 1, title: 'First Article', content: 'This is the first article content in markdown', category: 'General' },
      { id: 2, title: 'Angular Tips', content: '# Angular Tips\n\n- Use standalone components\n- Leverage signals for state management', category: 'Development' },
      { id: 3, title: 'Markdown Guide', content: '## Markdown Basics\n\n1. Headers\n2. Lists\n3. *Emphasis*\n4. **Strong**\n5. [Links](https://example.com)', category: 'Writing' }
    ];
    this.updateCategories();
    this.filteredArticles = this.articles;
  }

  updateCategories() {
    this.categories = Array.from(new Set(this.articles.map(a => a.category)));
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.filteredArticles = this.articles.filter(a => a.category === category);
  }

  showAllArticles() {
    this.currentCategory = null;
    this.filteredArticles = this.articles;
  }
}