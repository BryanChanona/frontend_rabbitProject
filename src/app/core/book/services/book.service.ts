import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookRepository } from "../repositories/book.repository";
import { Observable } from "rxjs";
import { Book, BookResponse } from "../models/book.model";

@Injectable({
    providedIn: 'root'
})      




export class BookService extends BookRepository{
    private apiUrl = 'http://98.82.143.49:8081/books/';

    constructor(private hhtp: HttpClient){
        super();
    }

    getBooks():Observable<BookResponse>{
        return this.hhtp.get<BookResponse>(`${this.apiUrl}newBookIsAdded`);

    }
    addBook(book: Book): Observable<void> {
        return this.hhtp.post<void>("http://34.206.214.160:8083/books/",book)
    }
}