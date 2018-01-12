import { Component } from '@angular/core';
import {Bookmark} from './bookmark';
import {BookmarkService} from './bookmark.service';
@Component({
  selector: 'app-root',
  template: `<h4>Component</h4>

  <ul>
<li *ngFor="#bookmark of _bookmarks">
{{bookmark.title}}
</li>
  </ul>
  `,
  styleUrls: ['./app.component.css'],
  providers: [BookmarkService]
})
export class AppComponent {
  title = 'app';

  _bookmarks: Bookmark[];
  errorString: string;

  constructor(private _boomarkService: BookmarkService)
  {

  }

ngOnInit()
{
  this.getBookmarks();
}

  getBookmarks(){
    this._boomarkService.getBookmarks()
        .subscribe(bookmarks => this._bookmarks = bookmarks,
        error => this.errorString = <any> error);
  }

}
