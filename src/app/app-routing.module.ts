import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './ui/books/create-book/create-book.component';
import { ViewBooksAvailablesComponent } from './ui/books/view-books-availables/view-books-availables.component';

const routes: Routes = [
  {path:"", component:CreateBookComponent},
  {path:"newAdded",component:ViewBooksAvailablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
