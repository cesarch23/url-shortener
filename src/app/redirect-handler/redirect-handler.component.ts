import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectUrlService } from '../core/service/redirect-url.service';

@Component({
  selector: 'app-redirect-handler',
  imports: [],
  templateUrl: './redirect-handler.component.html',
  styles: ''
})
export class RedirectHandlerComponent  implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private redirectUrlService = inject(RedirectUrlService);
  private router = inject(Router);

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(param =>{
      //null safe
      const shortCode = param.get('code');
      if(!shortCode) this.router.navigateByUrl('404');
      else this.redirectUrlService.redirectByShortUrl(shortCode);
    })
  }


}
