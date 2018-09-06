import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';
  newusername:string ='';
  newpassword:string = '';
  constructor(private router:Router, private form:FormsModule) { }
  

  ngOnInit() {
    console.log("Testing if dom is ready");

    if (typeof(Storage) !== "undefined") {
      console.log('storage ready');

    }
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "super" && this.password == "123"){
      alert('You are logged in as the Super Admin.');
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "super"); 
      localStorage.setItem("username", this.username);
    }
    else if(this.username == "group" && this.password == "123"){
      alert('You are logged in as the Group Admin');
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "group");
      localStorage.setItem("username", this.username)
    }
    else if (this.username == "correctusername" && this.password =="correctpassword"){
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "general");
      localStorage.setItem("username", this.username)
    }else{
      alert('Username and password were incorrect. Please try again or create new user.');
    }  
    }

  createUser(event){
    event.preventDefault(); 
    if(this.newusername != '' && this.newpassword != ''){
      localStorage.setItem("login-type", "general");
      localStorage.setItem("username", this.newusername);
      localStorage.setItem("password", this.password);
      this.router.navigateByUrl('/groups');
    }
  }

  }


