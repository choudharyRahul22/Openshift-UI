import {Component, OnInit, ViewChild, ElementRef, Renderer, Renderer2} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  @ViewChild('usr') usr: ElementRef;
  constructor(private authService: AuthService, private renderer: Renderer, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.renderer.selectRootElement(this.usr["nativeElement"]).focus();
    this.initSignInForm();
  }

  initSignInForm() {
    let username = '';
    let password = '';

    this.signInForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required),
    });
  }

  onSignin() {
    const username = this.signInForm.value['username'];
    const password = this.signInForm.value['password'];
    console.log(username + ' : ' + password);
    this.authService.signinUser(username, password)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/select-work-area']);
        },
        (error) => { console.log(error)}
      );
  }

}
