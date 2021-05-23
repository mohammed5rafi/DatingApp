import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
@Component({
  selector: "app-test-errors",
  templateUrl: "./test-errors.component.html",
  styleUrls: ["./test-errors.component.scss"],
})
export class TestErrorsComponent implements OnInit {
  validationError: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  get404Error() {
    this.http.get(API_URL + "buggy/not-found").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400Error() {
    this.http.get(API_URL + "buggy/bad-request").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get500Error() {
    this.http.get(API_URL + "buggy/server-error").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get401Error() {
    this.http.get(API_URL + "buggy/auth").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get400ValidationError() {
    this.http.post(API_URL + "account/register", {}).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.validationError = error;
      }
    );
  }
}
