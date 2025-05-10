import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/auth/auth.interceptor';

// ✅ Correct merged config
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch((err) => console.error(err));


// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient(withInterceptors([authInterceptor]))]
// });
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
