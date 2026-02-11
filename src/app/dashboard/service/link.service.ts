import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { LinkDTO, ShorUrlRequest } from '../../core/model/model.interface';
import { catchError, throwError } from 'rxjs';
import { withAuthToken } from '../../core/interceptor/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private baseUrl =  `${environment.API_BASE_URL}/api/v1/links`;
  private http = inject(HttpClient);
  
  generateShortUrl(shorUrlRequest:ShorUrlRequest){
    return this.http.post<LinkDTO>(this.baseUrl,shorUrlRequest,{ context: withAuthToken() })
    .pipe(catchError((error:HttpErrorResponse)=>{
      if(error.status == HttpStatusCode.Unauthorized ){
        return throwError(()=>new Error("No tienes permiso para ingresar"))
      }
      return throwError("Salio algo mal en nuestro servidor") 
    }));
  }

 
}
