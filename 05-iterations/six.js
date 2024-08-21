const myArr = ["HTML", "CSS", "JS", "Angular", "React"];

// const varArr = myArr.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(varArr);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = myNum.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(newNum);

const newNum = [];

myNum.forEach((num) => {
  if (num % 2 == 0) {
    newNum.push(num);
  }
});

// console.log(newNum);

// Array of Objects

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    yearPublished: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    yearPublished: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    yearPublished: 1925,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    yearPublished: 1951,
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    yearPublished: 1851,
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    yearPublished: 1813,
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    yearPublished: 1954,
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    yearPublished: 1937,
  },
  {
    id: 9,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Fiction",
    yearPublished: 1847,
  },
  {
    id: 10,
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Political Satire",
    yearPublished: 1945,
  },
];

let userBooks = books.filter((bk) => bk.genre === "Fiction");
userBooks = books.filter((bk) => {
  return bk.yearPublished > 1950 && bk.genre === "Fiction";

});

console.log(userBooks);
