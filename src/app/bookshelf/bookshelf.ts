import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IBook {
  title: string;
  coverUrl: string;
  spineBackgroundColor: string;
  spineForegroundColor: string;
}

@Component({
  selector: 'app-bookshelf',
  imports: [ CommonModule ],
  templateUrl: './bookshelf.html',
  styleUrl: './bookshelf.css',
})
export class Bookshelf {
  books: IBook[] = [
    { title: '1984', coverUrl: '/images/experiments/book-gallery/1984.webp', spineBackgroundColor: '#ae2d32', spineForegroundColor: '#ffe9a2' },
    { title: 'Steve Jobs', coverUrl: '/images/experiments/book-gallery/steve-jobs.webp', spineBackgroundColor: '#ffffff', spineForegroundColor: '#050505' },
    { title: "Hitcher's Guide to the Galaxy", coverUrl: '/images/experiments/book-gallery/hitchhikers-guide-to-the-galaxy.webp', spineBackgroundColor: '#1f7189', spineForegroundColor: '#ffffd5' },
    { title: 'The Ascent of Money', coverUrl: '/images/experiments/book-gallery/the-ascent-of-money.webp', spineBackgroundColor: '#000004', spineForegroundColor: '#fffffd' },
    { title: 'Snow Crash', coverUrl: '/images/experiments/book-gallery/snow-crash.webp', spineBackgroundColor: '#262a57', spineForegroundColor: '#fefcff' }
  ];
  focusedIndex = 2;

  setFocusedIndex(index: number) {
    this.focusedIndex = this.focusedIndex === index ? -1 : index;
  }
}
