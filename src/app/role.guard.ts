import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const RoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const expectedRole = route.data?.['role'];
  const actualRole = localStorage.getItem('role');

  if (expectedRole === actualRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
