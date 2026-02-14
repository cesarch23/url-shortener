import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class RedirectUrlService {
    private apiBaseUrl = `${environment.API_BASE_URL}/api/v1/links`;
    public redirectByShortUrl(shortCode: string){
        return  window.location.href = `${this.apiBaseUrl}/${shortCode}`;
    }
}