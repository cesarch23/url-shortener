import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../model/model.interface';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';

export const roleGuard: CanActivateFn = (route, state,) => {
  const authService = inject(AuthService);
  const toastService = inject(ToastService);
  const router = inject(Router);
  const allowedRoles = route.data['roles'] as Role[];
   
  if(authService.hasRole(...allowedRoles)) return true;
  toastService.showToast({message:"No tiene autorizacion para ingresar esa página",type:'alert'})
  router.navigateByUrl('/')
  return false;
};
