import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SelectWorkAreaComponent} from "./select-work-area/select-work-area.component";
import {CreateOrderComponent} from "./create-order/create-order.component";

const appRoutes: Routes = [
  {path: '' , redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in' , component: SignInComponent},
  {path: 'select-work-area' , component: SelectWorkAreaComponent},
  {path: 'create-order' , component: CreateOrderComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
