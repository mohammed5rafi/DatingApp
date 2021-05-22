import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User>;
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout();
  }
}
