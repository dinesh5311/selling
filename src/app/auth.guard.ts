import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from './Service/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService) as LoginService;
  const router = inject(Router) as Router;

  if (loginService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
