import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { UserResponse } from '../model/model.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { withAuthToken } from '../interceptor/token.interceptor';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.API_BASE_URL;

  private http = inject(HttpClient);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  private currentUser = signal<UserResponse | null>(null);
  public currentUser$ = this.currentUser.asReadonly();

  loginWithGoogle():void{
    //TODO CHANGE URL
    // this.router.navigateByUrl(`${this.apiUrl}/oauth2/redirect`);
    const redirectUri = `${window.location.origin}/oauth2/redirect`;
    const oauthUrl = `${this.apiUrl}/oauth2/authorize/google?redirect_uri=${redirectUri}`;
    window.location.href = oauthUrl;
  }
  loadCurrentUser():void{
    this.getCurrentUser().subscribe();
  }
  getCurrentUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/api/auth/me`,{ context: withAuthToken() })
    .pipe(
      tap(user=> this.currentUser.update(()=>user)),
      catchError((error:HttpErrorResponse)=>{
        if(error.status === HttpStatusCode.Unauthorized ){
          this.logout();              
          return throwError(()=> new Error("credenciales invalida, vuelva a iniciar sesión"));
        }
        return throwError(()=>new Error("Ocurrio un problema en nuestro servidor"));
      })
    );
  } 
  logout(){
    this.currentUser.update(()=>null);
    this.tokenService.removeToken();
    this.router.navigate(['/']);
  }


}
