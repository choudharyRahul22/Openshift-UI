import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [
            /*{path: '' , redirectTo: '/signin', pathMatch: 'full'},
            {path: 'signin' , component: SignInComponent}*/
          ]
        )
      ],
      providers: [
        AuthService,
        {provide: Http, deps: [MockBackend]}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Signin Component', () => {
    expect(component).toBeTruthy();
  });

  it('Service testing : AuthService', () => {
    let authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    expect(authService.signinUser).length > 1;
  });

});
