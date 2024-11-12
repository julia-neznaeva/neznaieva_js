class Library{
    #collection=new Array();
    constructor(name)
    {
        this._name = name;
    }

    addBook(book){
        this.#collection.push(book);
        console.log(`Book ${book} added to ${this._name} `);
    }

    removeBook(book){
        let index = this.#collection.indexOf(book)
        if(index>-1){
            this.#collection.splice(index, 1)
            console.log(`Book ${book} removed from ${this._name}`);
        } else{
            console.log(`Book ${book} does not exist in ${this._name}`);
        }
    }

    displayBooks(){
        if(this.#collection.length===0){
            return console.log("No books available.");
        }
        this.#collection.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
        });
    }
}

const library = new Library("JS library");

library.displayBooks();

library.addBook("Javascript: The Definitive Guide - David Flanagan");

library.addBook("You don`t know JS - Kyle Simpson");

library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");

library.displayBooks();

library.removeBook("Javascript: The Definitive Guide - David Flanagan");

library.displayBooks();