import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGenreComponent } from './genre-List/create-genre/create-genre.component';
import { EditGenreComponent } from './genre-List/edit-genre/edit-genre.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { LoginComponent } from './security/login/login.component';
import { IsAdminGuard } from './security/is-admin.guard';
import { RegisterComponent } from './security/register/register.component';
import { UsersIndexComponent } from './security/users-index/users-index.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'creategenres', component: CreateGenreComponent, canActivate:[IsAdminGuard] },
  { path: 'genres/edit/:id', component: EditGenreComponent,canActivate:[IsAdminGuard] },
  { path: 'userlist', component: UsersIndexComponent, canActivate:[IsAdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
