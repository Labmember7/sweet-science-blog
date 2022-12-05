import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleContentComponent } from '../article-content/article-content.component';
import { Article } from '../Models/article';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  article: Article = {
    title: "Title",
    creator: "Creator",
    createdAt: new Date(),
    content: "Content...",
  };
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ArticleContentComponent, {
      data: this.article,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}