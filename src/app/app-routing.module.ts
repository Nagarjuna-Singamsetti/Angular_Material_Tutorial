import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DummyComponent } from './component/dummy/dummy.component';
import { RoutesComponent } from './component/routes/routes.component';
import { ScrollingComponent } from './component/scrolling/scrolling.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  {path:"",redirectTo:"Dummy",pathMatch:'full'},
  {path:"App",component:AppComponent},
  {path:"Table",component:TableComponent},
  {path:"Scrolling",component:ScrollingComponent},
  // {path:"Routing", component:RoutesComponent},
  {path:"Dummy", component:DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
