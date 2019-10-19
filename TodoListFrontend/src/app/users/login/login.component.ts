import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private email: String;
  private password: String;

  constructor(
    public router: Router) { }

  ngOnInit() {
  }

  public goToSignUp: any = () => {

    this.router.navigate(['/signup']);

  } // end goToSignUp

  private signInFunction: any = () => {
    if(!this.email) {
      console.log('Please Enter Email!')
    } else if(!this.password) {
      console.log('Please Enter Password')
    } else if(this.email === "rohan@gmail.com" && this.password === "12345") {
      this.router.navigate(['/dash']);
    }
  }

}
