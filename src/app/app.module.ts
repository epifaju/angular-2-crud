import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BrowserXhr } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookService } from './book/book.service';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/bookList.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { HomeComponent } from './book/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'addBook', component: BookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, BookComponent, BookListComponent, HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes), BrowserModule,
  ],
  providers: [BookService,
              {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
