import { inject, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _snackBar = inject(MatSnackBar);

  private openSnackBar(
    message:string,
    action:string,
    duration:number,
    type: 'alert' | 'error' |'success' | 'info',
    horizontalPosition: 'start' | 'center' | 'end' | 'left' | 'right',
    verticalPosition:'top' | 'bottom'
   ){
    this._snackBar.open(message,action,{
        horizontalPosition: horizontalPosition,
        verticalPosition: verticalPosition,
        duration:duration
      });
  }
  showToast(
    message:string,
    action:string = 'ok',
    duration:number=10000,//10 segundos -> en ms
    type: 'alert' | 'error' |'success' | 'info' = 'info',
    horizontalPosition: 'start' | 'center' | 'end' | 'left' | 'right' = 'center',
    verticalPosition:'top' | 'bottom' = 'bottom'
  ){

    if(type === 'alert' ){
      this.openSnackBar(message,action,duration,type,horizontalPosition,verticalPosition)
    }
    else if(type === 'error'){
      this.openSnackBar(message,action,duration,type,horizontalPosition,verticalPosition)
    }
    else if(type === 'success'){
      this.openSnackBar(message,action,duration,type,horizontalPosition,verticalPosition)
    }
    else if(type === 'info'){
      this.openSnackBar(message,action,duration,type,horizontalPosition,verticalPosition)
    }
    else{
      this.openSnackBar(message,action,duration,type,horizontalPosition,verticalPosition)
    }

  }
}
