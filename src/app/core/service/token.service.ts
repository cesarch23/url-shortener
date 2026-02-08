import { inject, Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Role, Roles } from '../model/model.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private router = inject(Router);

  saveToken(token:string):void{
    this.removeToken();
    setCookie('token', token, { expires: 1, path: '/'});
  }
  getToken():string | undefined {
     return getCookie('token');
  }
  removeToken():void{
    removeCookie('token');
  }
  isValidToken():boolean{
    const token = this.getToken();
    if(!token)return false;
    const decodedToken = jwtDecode<JwtPayload>(token);
    if( decodedToken && decodedToken.exp){
      const today = new Date(); 
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodedToken.exp);
      return today.getTime() < tokenDate.getTime();
    }
    return false;
  }
  getUserRole():Role | null {
    const token = getCookie('token');
    if (!token) return null;
    try {
      const decoded = jwtDecode<{ role: Role }>(token);
      return decoded.role || null;
    } catch {
      return null;
    }

  }
  redirectBasedRole(){
    const userRole:Role | null = this.getUserRole();
    if(!userRole) {
      this.router.navigate(['/'])
    }
    if(userRole === Roles.USER) this.router.navigate(['/dashboard/home']);
    else if(userRole === Roles.ADMIN) this.router.navigate(['/admin']);
  }


}
