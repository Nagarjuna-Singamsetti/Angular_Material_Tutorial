import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Material';
  alert=0;
  opened=false;
  log(state: any){
    console.log(state);
  }
  logChange(index:any){
    console.log(index);
  }
  selectedValue:string='';
}
