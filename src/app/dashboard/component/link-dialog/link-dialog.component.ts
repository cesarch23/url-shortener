import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef, MatDialogTitle, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LinkDTO } from '../../../core/model/model.interface';
import { MatButtonModule } from '@angular/material/button';
import { LinkService } from '../../service/link.service';
import { AuthService } from '../../../core/service/auth.service';
import { ToastService } from '../../../core/service/toast.service';

@Component({
  selector: 'app-link-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions
],
  templateUrl: './link-dialog.component.html',
  styleUrl: './link-dialog.component.scss'
})
export class LinkDialogComponent {

  private linkService = inject(LinkService);
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private readonly dialogRef = inject(MatDialogRef<LinkDialogComponent>);
  private currentUser = this.authService.currentUser$;

  private dateIn30Days: Date = new Date();

  shortUrlForm = new FormGroup({
    longUrl: new FormControl("",[Validators.required, Validators.pattern(/^(https?:\/\/)(localhost|\d{1,3}(\.\d{1,3}){3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/)]),
    expiredDate: new FormControl<Date>(this.dateIn30Days,[Validators.required]),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      update: boolean,
      linkDTO?: LinkDTO
    }
  ){
    if(this.data.update){
      this.loadLinkInfo();
    }else{
      this.dateIn30Days.setDate(new Date().getDate() + 30)
    }
  }
  public shortLink(){
    if(this.shortUrlForm.invalid) return;
    const { longUrl, expiredDate } = this.shortUrlForm.getRawValue();
    const userId = this.currentUser()?.id.toString();
    if(!longUrl || !expiredDate || !userId) return;

    if(this.data.update){
      //TODO ACTUALIZAR LINK
    }else{
      this.linkService.generateShortUrl({ longUrl,expiredDate,userId },userId).subscribe({
        next:(linkDto)=>{
          this.toastService.showToast({message:'http://localhost:4200/'.concat(linkDto.shortCode),action: 'copy'});
          //TODO RECARGAR TABLA DE LINKS
          this.dialogRef.close( {isChange: true} );
        },
        error: (error)=>{
          this.toastService.showToast({message: error,type: 'error'})
        }
      });
    }

  }
  public loadLinkInfo(){
    
  }


}
