import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule } from '@angular/forms';
import { BookRepository } from '../../core/book/repositories/book.repository';
import { BookService } from '../../core/book/services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewBooksAvailablesComponent } from './view-books-availables/view-books-availables.component';


@NgModule({
  providers:[{provide: BookRepository, useClass:BookService}],
  declarations: [CreateBookComponent, ViewBooksAvailablesComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ], exports:[CreateBookComponent]
})
export class BooksModule { }
 