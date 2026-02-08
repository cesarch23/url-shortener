import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../service/token.service';

export const redirectGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isValidToken()){
    tokenService.redirectBasedRole();
    return false;
  }
  return true;
};
