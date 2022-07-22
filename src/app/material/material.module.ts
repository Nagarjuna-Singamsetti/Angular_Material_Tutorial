import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
 import {MatBadgeModule} from '@angular/material/badge';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatListModule} from '@angular/material/list';
 import {MatDividerModule} from '@angular/material/divider';

const  material=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
