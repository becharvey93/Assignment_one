import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  router: any;
  constructor() { }

  ngOnInit() {
    localStorage.setItem("username", "");
    localStorage.setItem("login-type", "");
    localStorage.setItem("password", "");
    alert("You have now been logged out");
    this.router.navigateByUrl('/login');

  }

}
