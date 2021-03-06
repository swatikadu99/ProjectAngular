﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './Employee/home';
import { LoginComponent } from './login';
import { ApplyforleaveComponent } from './Employee/applyforleave/applyforleave.component';
import { MyleavesComponent } from './Employee/myleaves/myleaves.component';
import { CheckleavesComponent } from './Employee/checkleaves/checkleaves.component';
import { LeaverequestComponent } from './Manager/leaverequest/leaverequest.component';;
import { ViewrequestComponent } from './Manager/viewrequest/viewrequest.component';
import { ManagerhomeComponent } from './Manager/managerhome/managerhome.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,

        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ApplyforleaveComponent ,
        MyleavesComponent ,
        CheckleavesComponent,
        LeaverequestComponent ,
        ViewrequestComponent ,
        ManagerhomeComponent    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }