import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../../core/service/token.service';
import { Role, Roles } from '../../../core/model/model.interface';
import { AuthService } from '../../../core/service/auth.service';


 
@Component({
  selector: 'app-oauth2-redirect',
  imports: [],
  templateUrl: './oauth2-redirect.component.html',
  styleUrl: './oauth2-redirect.component.scss'
})
export class Oauth2RedirectComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private tokenService = inject(TokenService);
  private authService = inject(AuthService);

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const error = params['error'];

      console.log('Token recibido parametor:', token);
      if (token) {
        this.tokenService.saveToken(token);
        const userRole:Role | null = this.tokenService.getUserRole();
        this.authService.loadCurrentUser();

        if(!userRole) console.warn('Hubo un error , inicie sesion nuevamente ');
        if(userRole === Roles.USER) this.router.navigate(['/dashboard/home']);
        else if(userRole === Roles.ADMIN) this.router.navigate(['/admin']);
        else this.router.navigate(['/']);

      } else if (error) {
        // Si hay error, mostramos mensaje y redirigimos al login
        console.log('Error en autenticación desde google', error);
        this.router.navigate(['/']);
      } else {
        // Si no hay ni token ni error, algo salió mal
        this.router.navigate(['/']); 
      }
    });
  }

}
