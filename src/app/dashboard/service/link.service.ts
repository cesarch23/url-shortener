import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { LinkDTO, LinkUpdateRequest, PageLinkDTO, ShorUrlRequest } from '../../core/model/model.interface';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { withAuthToken } from '../../core/interceptor/token.interceptor';
import { AuthService } from '../../core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private baseUrl =  `${environment.API_BASE_URL}/api/v1/users`;
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  
  generateShortUrl(shorUrlRequest:ShorUrlRequest,userId:string){
    return this.http.post<LinkDTO>(`${this.baseUrl}/${userId}/links`,shorUrlRequest,{ context: withAuthToken() })
    .pipe(catchError((error:HttpErrorResponse)=>{
      if(error.status == HttpStatusCode.Unauthorized ){
        return throwError(()=>new Error("No tienes permiso para ingresar"))
      }
      return throwError(()=>new Error("Salio algo mal en nuestro servidor")) 
    }));
  }
  public getLinksByUserId(pageIndex:number, pageSize:number):Observable<PageLinkDTO>{
    const userId = this.authService.currentUser$()?.id;
    if(!userId) {
      return this.authService.getCurrentUser().pipe(
        switchMap(user=> this.getLinksByUserIdRequest(pageIndex,pageSize,user.id))
      );
    }else{
      return this.getLinksByUserIdRequest(pageIndex,pageSize,userId)
    }
  }
  private getLinksByUserIdRequest(pageIndex:number, pageSize:number,userId:number):Observable<PageLinkDTO>{
      return this.http.get<PageLinkDTO>(`${this.baseUrl}/${userId}/links?page=${pageIndex}&size=${pageSize}`,{ context: withAuthToken() })
      .pipe(catchError((error:HttpErrorResponse)=>{
        if(error.status == HttpStatusCode.Unauthorized ){
          return throwError(()=>new Error("No tienes permiso para ingresar"))
        }
         return throwError(()=>new Error("Salio algo mal en nuestro servidor")) 
      }));
  }
  public updateLink(linkRequest: LinkUpdateRequest){

    return this.http.put<LinkDTO>(`${this.baseUrl}/links`,{...linkRequest}, { context: withAuthToken()  })
    .pipe(catchError((error:HttpErrorResponse)=>{
        if(error.status == HttpStatusCode.Unauthorized ){
          return throwError(()=>new Error("No tienes permiso para ingresar"))
        }
         return throwError(()=>new Error("Salio algo mal en nuestro servidor")) 
      }));
  }

 
}
