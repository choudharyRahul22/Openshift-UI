import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment.prod";


@Injectable()
export class AuthService {

  token: string;
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  signinUser(username: string, password: string) {
    let url = environment.loginApi;

    let headers = new Headers({
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    });

    let RequestBody = '<loginRequest>';
    RequestBody += '<userName>'
      + username
      + '</userName>';
    RequestBody += '<password>'
      + password
      + '</password>';
    RequestBody += '<action>'
      + "GET"
      + '</action>';
    RequestBody += '</loginRequest>';

    return this.http.post(
      url,
      RequestBody,
      {headers: headers})
      .map(
        (response: Response) => {
          const data = response;
          return data;
        }
      );
  }

  getToken() {
    /*firebase.auth().currentUser.getToken().
    then(
      (tokenRec: string) => {
        this.token = tokenRec;
      }
    );
    return this.token;*/
  }

  logout() {
    /*firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/login"]);*/
  }

  isAuthenticated() {
    /*return this.token != null;*/
  }

}
