import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // snack-bar
  constructor(private _snackBar:MatSnackBar){}
    openSnackBar(message: string,action:string){
      let snackBarRef=this._snackBar.open(message,action,{duration:3000});
      snackBarRef.afterDismissed().subscribe(
        ()=>{
          console.log("Action Dismissed")
        }
      );
      snackBarRef.onAction().subscribe(
        ()=>{
          console.log("Action was Triggered")
        }
      );
    }

  
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
  options:string[]=['Angular','React','Vue'];

  objectOptions=[
    {name:'Angular'},
    {name:'Angular Material'},
    {name:'React'},
    {name:'Vue'}
  ];
  displayFn(subject:any){
    return subject ? subject.name : undefined;
  }
myControl=new FormControl();
// Autocomplete
filterdOptions: Observable<string[]> | undefined;

ngOnInit(): void {
this.filterdOptions=this.myControl.valueChanges.pipe(
startWith(''),
map(value => this._filter(value))
);
}
private _filter(value:string):string[]{
  const filterValue =value.toLowerCase()
  return this.options.filter(option=>option.toLowerCase().includes(filterValue));
}
//date
minDate=new Date();
maxDate=new Date(2022, 11, 31 );


// dateFilter = date => {
//   const day =date.getDay();
//   return day !=0 && day !=6;
// }
  

//snackbar

}
function openSnackBar(message: any) {
  throw new Error('Function not implemented.');
}

