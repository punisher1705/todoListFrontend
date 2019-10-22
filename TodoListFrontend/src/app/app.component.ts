import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todoListFrontend';
  private username: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.username = Cookie.get('username');
    console.log(this.username)
  }

  private signOutFunction = () => {
    Cookie.delete('username');
    this.router.navigate(['/login']);
  }
}
