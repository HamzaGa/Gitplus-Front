import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RouterModule, Routes,RouterLinkActive, Router } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { FileUploadService } from './file-upload/file-upload.service';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Step2Component } from './step2/step2.component';
import { Step2Service } from './step2/step2.service';
import { Step3Component } from './step3/step3.component';
import { Step3Service } from './step3/step3.service';

const appRoutes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component }  
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    AcceuilComponent,
    Step1Component,
    FileUploadComponent,
    Step2Component,
    Step3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes )
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},FileUploadService,HttpClient,Step2Service,Step3Service],
  bootstrap: [FooterComponent,HeaderComponent,IndexComponent]
})
export class AppModule { }
