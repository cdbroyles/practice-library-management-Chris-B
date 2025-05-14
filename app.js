class LibraryItem {
    constructor (title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        if(this.isAvailable) {
            console.log(`You have checked out ${this.title}.`);
            this.isAvailable = false;
        } else {
            console.log(`${this.title} is not available to checkout at this time.`)
        }
    }
    returnItem() {
        if(!this.isAvailable) {
            console.log(`You have returned ${this.title}.`);
            this.isAvailable = true;
        } else {
            console.log(`${this.title} has already been returned.`)
        }
    }
}

class Book extends LibraryItem {
    constructor (title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor (title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor (title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let gladiator = new DVD("Gladiator", 001, true, "Ridley Scott", "2:35");
let hungerGames = new Book("Hunger Games", 002, false, "Suzanne Collins", "Science Fiction");
let gameInformer = new Magazine("Game Informer", 003, true, 503, "Sunrise Publications");

console.log(gladiator);
gladiator.checkOut();
console.log(gladiator);
console.log(hungerGames);
console.log(gameInformer);
console.log(gladiator.director);
console.log(hungerGames.author);
console.log(gameInformer.issueNumber);