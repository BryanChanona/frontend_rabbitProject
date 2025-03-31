import { Injectable } from "@angular/core";
import { BookService } from "../services/book.service";
import { Observable } from "rxjs";
import { BookResponse } from "../models/book.model";

@Injectable({
    providedIn:'root'
})

export class GetBooksAvailablesUseCase{
    constructor(private bookService: BookService){}

    execute(): Observable<BookResponse> {
        return this.bookService.getBooks(); 
      }

}