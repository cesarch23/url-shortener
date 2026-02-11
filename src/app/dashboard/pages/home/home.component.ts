import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/service/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from "@angular/material/tooltip";
import { Router, RouterLink } from "@angular/router";
import {MatRippleModule} from '@angular/material/core';
import { ToastService } from '../../../core/service/toast.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LinkService } from '../../service/link.service';
@Component({
  selector: 'dashboard-home',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
    MatRippleModule,
    MatDatepickerModule,
    RouterLink
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private linkService = inject(LinkService);
  private router = inject(Router);
  
  readonly currentUser = this.authService.currentUser$;
  links = [
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://developer.mozilla.org/es/docs/Web/CSS/Reference/Properties/flex"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
    {
      shorLink: "https://v19.mate/12345678",
      longUrl: "https://www.google.com/search?q=search+with+algolia&oq=search+with+algolia&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIKCAkQABgKGBYYHtIBCDczODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
    },
  ];
  private dateIn30Days: Date = new Date();
  constructor(){
    this.dateIn30Days.setDate(new Date().getDate() + 30)
  }
  shortUrlForm = new FormGroup({
    longUrl: new FormControl("",[Validators.required, Validators.pattern(/^(https?:\/\/)(localhost|\d{1,3}(\.\d{1,3}){3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/)]),
    expiredDate: new FormControl<Date>(this.dateIn30Days,[Validators.required]),
  })

  public async copyShorLink(shorLink:string){
    try{
      await navigator.clipboard.writeText(shorLink);
      this.toastService.showToast({message: "Enlace copiado al portapapeles",type:'info',horizontalPosition:'center',duration: 2000})
    }
    catch(error){
      this.toastService.showToast({message: "No se pudo copiar al portapapeles",type:'error'})
    }
  }

  public shortLink(){
    if(!this.shortUrlForm.valid) return;
    const { longUrl, expiredDate} = this.shortUrlForm.getRawValue();
    const userId = this.currentUser()?.id.toString();
    if(!expiredDate || !longUrl || !userId) return;
    this.linkService.generateShortUrl({longUrl,expiredDate,userId}).subscribe({
      next:(linkDto)=>{
        this.toastService.showToast({message: 'Link generado con éxito',type: 'success'});
        this.toastService.showToast({message:'https://short.io/'.concat(linkDto.shortCode),action: 'copy'});
        this.router.navigateByUrl("/dashboard/links")
      },
      error: (error)=>{
        this.toastService.showToast({message: error,type: 'error'})
         console.log(" resp ",console.error());
      }
    }
    );
  }

}
