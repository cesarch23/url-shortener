import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { LinkDTO, ShorUrlRequest } from '../../core/model/model.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private baseUrl =  `${environment.API_BASE_URL}/api/v1/links`;
  private http = inject(HttpClient);
  
  generateShortUrl(shorUrlRequest:ShorUrlRequest){
    return this.http.post<LinkDTO>(this.baseUrl,shorUrlRequest);
  }

  constructor() { }
}
