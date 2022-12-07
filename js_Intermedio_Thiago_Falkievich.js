//                                                                    --- Functional Programming ---
//---Test 1---Learn About Functional Programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line



//---Test 2---Understand Functional Programming Terminology
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



//---Test 3---Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1, index + 2); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);



  //---Test 4---Avoid Mutations and Side Effects Using Functional Programming
  // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let x = fixedValue + 1;
  return x ;

  // Only change code above this line
}

//---Test 5---Pass Arguments to Avoid External Dependence in a Function
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(valor) {
  return valor + 1;
  // Only change code above this line
}



//---Test 6---Refactor Global Variables Out of Functions
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let arregloNuevo = arr.slice();       //A través de este copio el arreglo, de lo contrario se sigue modificando los valores del arreglo original independientemente de cual arreglo modifique
  arregloNuevo.push(bookName);
  return arregloNuevo;
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    return  arregloNuevo = arr.filter( x => x != bookName); 
}

var libreria1 = add(bookList, "A Brief History of Time");
var libreria2 = remove(bookList, "On The Electrodynamics of Moving Bodies");
var libreria3 = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");

console.log(bookList);
console.log(libreria1);
console.log(libreria2);
console.log(libreria3);



---Test 7---Use the map Method to Extract Data from an Array
The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  var ratings = watchList.map( obj => (
    {
    title: obj["Title"],
    rating: obj["imdbRating"]
    }));
  // Only change code above this line
  
  console.log(JSON.stringify(ratings));



  //---Test 8---Implement map on a Prototype
  Array.prototype.myMap = function(callback) 
  {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) 
    {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };



  //---Test 9---Use the filter Method to Extract Data from an Array
  // The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));

// Only change code above this line

console.log(filteredList);



  //---Test 10---Implement the filter Method on a Prototype
  Array.prototype.myFilter = function (callback) 
  {
    const newArray = [];
    // Only change code below this line
  
    for (const [index, elem] of this.entries()) 
    {
      if (callback(elem, index, this)) newArray.push(elem);
    }
    // Only change code above this line
    return newArray;
  };



  //---Test 11---Return Part of an Array Using the slice Method
  function sliceArray(anim, beginSlice, endSlice) 
  {
    // Only change code below this line
  
    return anim.slice(beginSlice, endSlice)
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);



  //---Test 12---Remove Elements from an Array Using slice Instead of splice
  function nonMutatingSplice(cities) 
  {
    // Only change code below this line
    
    return cities.slice(0,3)
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);



  //---Test 13---Combine Two Arrays Using the concat Method
  function nonMutatingConcat(original, attach) 
  {
    // Only change code below this line

    return original.concat(attach)
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);



  //---Test 14---Add Elements to the End of an Array Using concat Instead of push
  function nonMutatingPush(original, newItem) 
  {
    // Only change code below this line

    return original.concat(newItem)
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);



  //---Test 15---Use the reduce Method to Analyze Data
  // The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  const averageRating =
    watchList

      .filter((film) => film.Director === "Christopher Nolan")

      .map((film) => Number(film.imdbRating))

      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter((film) => film.Director === "Christopher Nolan").length;

  return averageRating;
}

console.log(getRating(watchList));



  //---Test 16---Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

  const squareList = arr => 
  {
    // Only change code below this line

    return arr.filter((num) => num > 0 && num % parseInt(num) ===0)
    .map ((num) => num * num)

    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);



  //---Test 17---Sort an Array Alphabetically using the sort Method
  function alphabeticalOrder(arr) 
  {
    // Only change code below this line
  
    return arr.sort()

    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



  //---Test 18---Return a Sorted Array Without Changing the Original Array
  const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) 
{
  // Only change code below this line

  return [].concat(arr).sort((a,b) => a-b)

  // Only change code above this line
}

nonMutatingSort(globalArray);



  //---Test 19---Split a String into an Array Using the split Method
  function splitify(str) 
  {
    // Only change code below this line
  
    return str.split(/\W/)

    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");



  //---Test 20---Combine an Array into a String Using the join Method
  function sentensify(str) 
  {
    // Only change code below this line

    console.log(str.split(/\W/))
    console.log(str.split(/\W/).join(" "))
    return str.split(/\W/).join(" ")

    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");



  //---Test 21---Apply Functional Programming to Convert Strings to URL Slugs
  // Only change code below this line

  function urlSlug(title) 
  {

    return (title.toLowerCase()
      .trim()
      .split(/\s+/)
      .join("-"))
  
  }

  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");



  //---Test 22---Use the every Method to Check that Every Element in an Array Meets a Criteria
  function checkPositive(arr) 
  {
    // Only change code below this line

    return arr.every((value) => value > 0)
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);



  //---Test 23---Use the some Method to Check that Any Elements in an Array Meet a Criteria
  function checkPositive(arr) 
  {
    // Only change code below this line

    return arr.some((num) => num > 0)
  
    // Only change code above this line
  }
  
  checkPositive([1, 2, 3, -4, 5]);



  //---Test 24---Introduction to Currying and Partial Application
  function add(x) 
  {
    // Only change code below this line
  
    return (y)=>{
      return (z)=>{
        return x+y+z
      }
    }
  
    // Only change code above this line
  }
  
  add(10)(20)(30);

  

  //                                                                    --- Basic Data Structures ---
  //---Test 1---Use an Array to Store a Collection of Data
  let yourArray=[2, "Thiago", true, null, 2.5]; // Change this line



  //---Test 2---Access an Array's Contents Using Bracket Notation
  let myArray = ["a", "b", "c", "d"];
  // Only change code below this line
  myArray[1] = "b - Thiago";
  // Only change code above this line
  console.log(myArray);



  //---Test 3---Add Items to an Array with push() and unshift()
  function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));



  //---Test 4---Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted= arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));



  //---Test 5---Remove Items Using splice()
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
  // Only change code below this line
  arr.splice(0,2)
  arr.splice(1,2)
  arr.splice(2,2)
  // Only change code above this line
  console.log(arr);
  


  //---Test 6---Add Items Using splice()
  function htmlColorNames(arr) {
    // Only change code below this line
    
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



  //---Test 7---Copy Array Items Using slice()
  function forecast(arr) {
    // Only change code below this line
    let arre2 = [];
    return  arre2 = arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



  //---Test 8---Copy an Array with the Spread Operator
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      
      newArr.splice(num,0, [...arr])
      //newArr = arr.slice();
  
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));



  //---Test 9---Combine Arrays with the Spread Operator
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"] // Change this line
    return sentence;
  }
  
  console.log(spreadOut());



  //---Test 10---Check For The Presence of an Element With indexOf()
  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0)
    {
      return true;
    }
    else
    {
      return false;
    }
      
    // Only change code above this line
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



  //---Test 11---Iterate Through All an Array's Items Using For Loops
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  
    for(let i =0; i < arr.length; i++)
    {
      if ( arr[i].indexOf(elem) == -1)
      {
        newArr.push(arr[i]);
      }
      else
      {
        let x;
      }
    }
    // Only change code above this line
    return newArr;
  }

 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



  //---Test 12---Create complex multi-dimensional arrays
  let myNestedArray = [
    // Only change code below this line
    [ ["deep"] ], [ [ [ "deeper" ] ] ], [ [ [ [ "deepest" ]]]] 
    // Only change code above this line
  ];



  //---Test 13---Add Key-Value Pairs to JavaScript Objects
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries =27;
  
  // Only change code above this line
  
  console.log(foods);



  //---Test 14---Modify an Object Nested Within an Object
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
    userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);



  //---Test 15---Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));



  //---Test 16---Use the delete Keyword to Remove Object Properties
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
    delete foods.oranges;
    delete foods.plums;
    delete foods.strawberries;
  
  // Only change code above this line
  
  console.log(foods);



  //---Test 17---Check if an Object has a Property
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {      //Lo pude resolver de una manera más fácil pero la página no me dejava trabajar con el objeto directamente.
    // Only change code below this line
  
    if (
      userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan")
      ) 
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    // Only change code above this line
  console.log(isEveryoneHere(users));



  //---Test 18---Iterate Through the Keys of an Object with a for...in Statement
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result; 
    // Only change code above this line
  }
  console.log(countOnline(users));



  //---Test 19---Generate an Array of All Object Keys with Object.keys()
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) 
  {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }

  console.log(getArrayOfUsers(users));



  //---Test 20---Modify an Array Stored in an Object
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line

    let x = userObj.data.friends.length
    userObj.data.friends[x] = friend;
    return userObj.data.friends;

    // Only change code above this line
  }
  
  console.log(addFriend(user, "Pete"));



  //                                                                    --- ES6 ---
  //---Test 1---Compare Scopes of the var and let Keywords
  function checkScope() 
  {
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }



  //---Test 2---Mutate an Array Declared with const
  const s = [5, 7, 2];
  function editInPlace() 
  {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();



//---Test 3---Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

  Object.freeze (MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();



//---Test 4---Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();



//---Test 5---Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));



//---Test 6---Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line



//---Test 7---Use the Rest Parameter with Function Parameters
let sum = (...args) => {
 
  let x =0;

  for(let i=0; i < args.length; i++)
  {
    x = x + args[i];
  }
  return x;
}
console.log (sum(1,2,2)) ; // Da 5



//---Test 8---Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);



//---Test 9---Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line



//---Test 10---Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line



//---Test 11---Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: {low: lowToday , high: highToday} } = LOCAL_FORECAST;
// Only change code above this line



//---Test 12---Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
 [a,b] =[b,a]
// Only change code below this line



//---Test 13---Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
function removeFirstTwo(list) {
  // Only change code below this line
  
  const [a,b, ...shorterList] = list;
  //console.log(...shorterList);
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);



//---Test 14---Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line



//---Test 15---Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  
  const failureItems = [];
  for (let i=0; i < arr.length; i++)
  {
    failureItems[i] =   `<li class="text-warning">${arr[i]}</li>` ;
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);



//---Test 16---Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};



//---Test 17---Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);



//---Test 18---Use class Syntax to Define a Constructor Function
// Only change code below this line

class Vegetable
{
  constructor(name)
  {
    this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



//---Test 19--Use getters and setters to Control Access to an Object
// Only change code below this line

class Thermostat
{
  constructor(fahrenheit)
  {
    this.fahrenheit = fahrenheit;
  } 

  get temperature()
  {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature( x )
  {
    this.fahrenheit = (x * 9.0) / 5 + 32;
  }

}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius



//---Test 20--Create a Module Script
<html>
  <body>
    <!-- Only change code below this line -->

        <script type="module" src="index.js"></script>


    <!-- Only change code above this line -->
  </body>
</html>



//---Test 21--Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString};
export {lowercaseString};



//---Test 22--Reuse JavaScript Code Using import
// Only change code above this line

import {uppercaseString,lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");



//---Test 23--Use * to Import Everything from a File
// Only change code above this line

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



//---Test 24--Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;

}


//---Test 25--Import a Default Export
// Only change code above this line
import subtract from "./math_functions.js";

subtract(7,4);



//---Test 26--Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});



//---Test 27---Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => 
{
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) 
  {
    resolve("We got the data");
  } 
  else 
  {	
    reject("Data not received");
  }
});



//---Test 28---Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => 
{
  // responseFromServer is set to true to represent a successful response from a server
  
  let responseFromServer = true;
	
  if(responseFromServer) 
  {
    resolve("We got the data");
  } 
  else 
  {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => 
{
  console.log(result);
});



//---Test 29---Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => 
{
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
	
  if(responseFromServer) 
  {
    resolve("We got the data");
  } 
  else 
  {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => 
{
  console.log(result);
});

makeServerRequest.catch(error => 
{
  console.log(error);
});
