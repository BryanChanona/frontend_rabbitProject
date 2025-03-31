import { Injectable } from "@angular/core";
import { BookRepository } from "../repositories/book.repository";
import { Book } from "../models/book.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AddBookUseCase {

    constructor(private bookService: BookRepository){}

    execute(book : Book): Observable<void>{
        return this.bookService.addBook(book)
    }
}