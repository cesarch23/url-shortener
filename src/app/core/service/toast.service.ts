import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastParams } from '../model/model.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _snackBar = inject(MatSnackBar);

  private openSnackBar(
    message: string,
    action: string,
    duration: number,
    type: 'alert' | 'error' | 'success' | 'info',
    horizontalPosition: 'start' | 'center' | 'end' | 'left' | 'right',
    verticalPosition: 'top' | 'bottom',
  ) {
    this._snackBar.open(message, action, {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: duration,
    });
  }
  showToast({
    message,
    action = 'ok',
    duration = 10000,
    type = 'info',
    horizontalPosition = 'center',
    verticalPosition = 'bottom',
  }: ToastParams) {
    if (type === 'alert') {
      this.openSnackBar(
        message,
        action,
        duration,
        type,
        horizontalPosition,
        verticalPosition,
      );
    } else if (type === 'error') {
      this.openSnackBar(
        message,
        action,
        duration,
        type,
        horizontalPosition,
        verticalPosition,
      );
    } else if (type === 'success') {
      this.openSnackBar(
        message,
        action,
        duration,
        type,
        horizontalPosition,
        verticalPosition,
      );
    } else if (type === 'info') {
      this.openSnackBar(
        message,
        action,
        duration,
        type,
        horizontalPosition,
        verticalPosition,
      );
    } else {
      this.openSnackBar(
        message,
        action,
        duration,
        type,
        horizontalPosition,
        verticalPosition,
      );
    }
  }
}
