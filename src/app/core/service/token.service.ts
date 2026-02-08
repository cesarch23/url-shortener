import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Role } from '../model/model.interface';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveToken(token:string):void{
    console.log("set token cooke " , token);
    setCookie('token', token, { expires: 7, path: '/'});
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


}
