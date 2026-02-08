import { HttpContext, HttpContextToken, HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { throwError } from 'rxjs';


export const TOKEN_REQUIRED = new HttpContextToken<boolean> (()=>false);

export function withAuthToken(){
  return new HttpContext().set(TOKEN_REQUIRED, true);
}
 
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);
  const authService = inject(AuthService);

  if(req.context.get(TOKEN_REQUIRED)){
    const isValidToken = tokenService.isValidToken();
    console.log(" validando token desde intecpetor: ",isValidToken)
    if(isValidToken){
      const token = tokenService.getToken();

      if (!token || !tokenService.isValidToken()) {
        authService.logout();
        return throwError(() =>
          new HttpErrorResponse({ status: 401 })
        );
      }

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  
  }
  return next(req);

};
