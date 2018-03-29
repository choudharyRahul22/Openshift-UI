import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            /*{path: '' , redirectTo: '/signin', pathMatch: 'full'},
            {path: 'signin' , component: SignInComponent}*/
          ]
        )
      ]
    }).compileComponents();
  }));
  it('should create the App Component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
