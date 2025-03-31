import { Component } from '@angular/core';
import { BookRepository } from '../../../core/book/repositories/book.repository';
import { BookService } from '../../../core/book/services/book.service';
import { Book } from '../../../core/book/models/book.model';
import { AddBookUseCase } from '../../../core/book/use-cases/addBook.use_case';

@Component({
  selector: 'app-create-book',
  standalone: false,
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'], providers:[{provide:BookRepository,useClass:BookService}]
})
export class CreateBookComponent {
  // Variables para almacenar los valores de los campos
  book :Book = {
    author: '',
    title: '',
    available:true,
    id:0
  } 

  constructor(private createBook: AddBookUseCase){}
  // Función para manejar el guardado del libro
  savBook(): void{
    if (this.book.title && this.book.author){
      this.createBook.execute(this.book).subscribe(
        () =>{
          this.book = {title: '',author:'',available:true,id:0}
        }
      )
    }
  }
}
