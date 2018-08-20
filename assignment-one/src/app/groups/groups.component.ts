import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  username: string;
  router: any;

  constructor() { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "super"){
      alert('You are logged in as the Super Admin.');
      this.router.navigateByUrl('/groups');
    }
    else{
      alert('You do not have permission to create groups');
      this.router.navigateByUrl('/groups');
    }
    }


}
