import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../../core/book/services/book.service';
import { Subscription, interval } from 'rxjs';
import { Book, BookResponse } from '../../../core/book/models/book.model';
import { GetBooksAvailablesUseCase } from '../../../core/book/use-cases/getBooksAvailables.use_case';

@Component({
  selector: 'app-view-books-availables',
  standalone: false,
  templateUrl: './view-books-availables.component.html',
  styleUrls: ['./view-books-availables.component.scss'],
  providers: [{ provide: BookService, useClass: GetBooksAvailablesUseCase }]
})
export class ViewBooksAvailablesComponent implements OnInit, OnDestroy {
  books: Book[] = []; // Asegúrate de que books sea un array de Book, no BookResponse
  private pollingSubscription: Subscription | null = null;

  constructor(private bookService: GetBooksAvailablesUseCase) {}

  ngOnInit(): void {
    // Cargar los libros desde localStorage al iniciar el componente
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks); // Restaurar los libros desde localStorage
    }

    // Inicia el short polling
    this.startPolling();
  }
 
  ngOnDestroy(): void {
    // Detener el polling cuando el componente se destruye
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  startPolling() {
    this.pollingSubscription = interval(5000).subscribe(() => {
      this.fetchBooks();
    });
  }

  fetchBooks() {
    this.bookService.execute().subscribe(
      (response: BookResponse) => {
        // Verifica si los libros han cambiado
        if (Array.isArray(response.books) && JSON.stringify(this.books) !== JSON.stringify(response.books)) {
          this.books = response.books; // Ahora asigna la lista de libros
          console.log(this.books);

          // Guardar los libros actualizados en localStorage
          localStorage.setItem('books', JSON.stringify(this.books));
        }
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
