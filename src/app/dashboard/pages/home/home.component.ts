import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/service/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from "@angular/material/tooltip";
import { RouterLink } from "@angular/router";
import {MatRippleModule} from '@angular/material/core';
import { ToastService } from '../../../core/service/toast.service';
import { ToastParams } from '../../../core/model/model.interface'
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
    RouterLink
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
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
  ]

  public async copyShorLink(shorLink:string){
    try{
      await navigator.clipboard.writeText(shorLink);
      this.toastService.showToast({message: "Enlace copiado al portapapeles",type:'info',horizontalPosition:'center',duration: 2000})
    }
    catch(error){
      this.toastService.showToast({message: "No se pudo copiar al portapapeles",type:'error'})
    }
  } 

}
