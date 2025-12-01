//Задание 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;

    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задание 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}
const library = new Library("Библиотека имени Ленина");
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    256
  )
);
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  ));

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  ));
library.addBook(new NovelBook(
  "Герберт Уэллс",
  "Машина времени",
  1895,
  138
));

library.addBook(new Magazine(
  "Мурзилка",
  1924,
  60
));

library.addBook(new Magazine(
  "Военный журнал",
  1919,
  100
));

console.log(`Книг в библиотеке: ${library.books.length}`);

const book1919 = library.findBookBy("releaseDate", 1919);
console.log(`Найдена книга 1919 года: ${book1919 ? book1919.name : 'Не найдена'}`);

const giveBook = library.giveBookByName("Пикник на обочине");
console.log(`Выдана книга: ${giveBook ? giveBook.name : 'Не найдена'}`);

console.log(`Книг в библиотеке после выдачи: ${library.books.length}`);

giveBook.state = 15;
console.log(`Состояние выданной книги: ${giveBook.state}`);
giveBook.fix();
console.log(`Состояние выданной книги после ремонта: ${giveBook.state}`);

library.addBook(giveBook);
console.log(`Книг в библиотеке после возврата: ${library.books.length}`);

//Задание 3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return "Ошибка, оценка должна быть числом от 2 до 5";
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);

  }
  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }
    const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
    return sum / this.marks[subject].length;
  }
  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const totalAverage = subjects.reduce((total, subject) => total + this.getAverageBySubject(subject), 0);
    return totalAverage / subjects.length;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
console.log(student);
console.log(`Средний балл по физике: ${student.getAverageBySubject("физика")}`); 
// Ожидаемый результат: 4.5

console.log(`Средний балл по биологии: ${student.getAverageBySubject("биология")}`); 
// Ожидаемый результат: 0

console.log(`Общий средний балл: ${student.getAverage()}`); 
// Ожидаемый результат: 4.75



