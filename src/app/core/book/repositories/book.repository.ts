import { Observable } from "rxjs";
import { Book, BookResponse } from "../models/book.model";

export abstract class BookRepository {
    abstract getBooks(): Observable<BookResponse>;
    abstract addBook(book: Book): Observable<void>
}