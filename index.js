//Question 1 
let num=5;
function evenOrOdd(num) {
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
}
//calling the function
evenOrOdd(num);

//It uses the modulus operator % to check the remainder of dividing the number by 2. 
//If the remainder is 0, the number is even, otherwise it is odd


//Question 2
function longestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    console.log(longestWord);
}

//call the function by passing in the string example in our case
longestWord("Web Development Tutorial");

//This function uses the `split()` method to convert the string into an array of words, 
//then uses a for loop to iterate through the array of words and check the length of each word. 
//If the current word is longer than the current longest word, 
//it replaces the current value of longestWord with the current word. Finally, it logs the longest word.


//Question3
function lastElementAndCount(arr) {
    let lastElement = arr[arr.length-1];
    let count = arr.length;
    console.log("Last element: " + lastElement);
    console.log("Number of items in the array: " + count);
}
  
//call the function by passing in an array
//last element
let myArray = ["German", "Australian", "Kenyan", "American", "Indian"];

//Number of items in the array
lastElementAndCount(myArray);


//Question4
function addPublishedOn(obj) {
    obj.published_on = new Date();
}

let book={
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book Of The Hunger Games',
    readingStatus: false
};
addPublishedOn(book);
console.log(book);
  


  