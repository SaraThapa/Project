
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { Component, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RegistrationComponent } from './user/registration/registration.component';
import { RegistrationListComponent } from './user/registration/registration-list/registration-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SitesComponent } from './_layout/sites/sites.component';
import { AppHeaderComponent } from './_layout/header/header.component';
import { AppFooterComponent } from './_layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    RegistrationComponent,
    RegistrationListComponent,
    SitesComponent,
    AppHeaderComponent,
    AppFooterComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  //providers: [UserService],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
