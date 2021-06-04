import { DemoMaterialModule } from './inputmaterial/material1.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './material/toolbar/toolbar.component';
import { InputmaterialComponent } from './inputmaterial/inputmaterial.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateGenreComponent } from './genre-List/create-genre/create-genre.component';
import { EditGenreComponent } from './genre-List/edit-genre/edit-genre.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthoriseViewComponent } from './security/authorise-view/authorise-view.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { JwtInterceptorService } from './security/jwt-interceptor.service';
import { UsersIndexComponent } from './security/users-index/users-index.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    InputmaterialComponent,
    RegisterFormComponent,
    GenreListComponent,
    CreateGenreComponent,
    EditGenreComponent,
    AuthoriseViewComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationFormComponent,
    DisplayErrorsComponent,
    UsersIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
