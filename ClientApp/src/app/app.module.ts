import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { FetchMoviesComponent } from './Components/fetch-movies/fetch-movies.component';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { EditMovieComponent } from './Components/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchMoviesComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-movies', component: FetchMoviesComponent },
      { path: 'add-movie', component: AddMovieComponent },
      { path: 'edit-movie/:id', component: EditMovieComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
