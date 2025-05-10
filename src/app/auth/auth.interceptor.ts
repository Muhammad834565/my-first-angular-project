import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    const request = req.clone({
      headers: req.headers.set('Authorization', token) // 👈 no "Bearer "
    });
    return next(request);
  }

  return next(req);
};
