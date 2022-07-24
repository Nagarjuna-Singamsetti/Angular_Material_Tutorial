import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingComponent } from './component/scrolling/scrolling.component';
import { RoutesComponent } from './component/routes/routes.component';
import { DummyComponent } from './component/dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ScrollingComponent,
    RoutesComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [RoutesComponent]
})
export class AppModule { }
