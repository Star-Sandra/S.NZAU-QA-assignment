// Function 1

//returns True if password length is >= 6
function isValidPassword (password){
    return password.length >= 6;
}
//Arrange
const password = "newpassword";
//Act
const result = isValidPassword(password);
//Assert
expect(result).toBe(True);



//returns True if password length is >= 6
function isValidPassword (password){
    return password.length >= 6;
}

//Arrange
const password = "news";
//Act
const result = isValidPassword(password);
//Assert
expect(result).toBe(False);





function isValidPassword (password){
    return password.length >= 6;
}
//Arrange
const password = "";
//Act
const result = isValidPassword(password);
//Assert
expect(result).toBe(False);

//tests for a password with the length that's almost the one required
function isValidPassword (password){
    return password.length >= 6;
}
//Arrange
const password = "12345";
//Act
const result = isValidPassword(password);
//Assert
expect(result).toBe(False);
  

//tests for a password that is only 6 spaces

function isValidPassword (password){
    return password.length >= 6;
}
//Arrange
const password = "      ";
//Act
const result = isValidPassword(password);
//Assert
expect(result).toBe(True);


//FUNCTION 2

//returns true when the word is present in the sentence

function containsWord(sentence, word){
    return sentence.includes (word);
}
//Arange
const sentence = "I love singing";


//Act
const result = containsWord(sentence, "singing");

//Assert
expect(result).toBe(True);

//testing to look if it returns true if word is an empty string

function containsWord(sentence, word){
    return sentence.includes (word);
}

//Arrange
const sentence = "I love singing";

//Act
cont result = containsWord(sentence,"");

//Assert
expect(result).toBe(True);

//test to see if it returns False when the word is mispelled

function containsWord(sentence, word){
    return sentence.includes (word);
}

//Arrange
const sentence = "I love singing";

//Act
const result = containsWord(sentence,"singig");

//Assert
expect(result).toBe(False);


//test for word with same pronunciation but different spelling

function containsWord(sentence, word){
    return sentence.includes(word);
}

//Arrange
const sentence = "She gives advice";

//Act
const result = containsWord(sentence,"advise");

//Assert
expect(result).toBe(False);

//test for past tense of a word used
function containsWord(sentence, word){
    return sentence.includes(word);
}

//Arrange
const sentence = "She gives advice";

//Act
const result = containsWord(sentence,"gave");

//Assert
expect(result).toBe(False);

//test for plural of a word used in singular

function containsWord(sentence, word){
    return sentence.includes(word);
}

//Arrange
const sentence = "She has a ball";

//Act
const result = containsWord(sentence,"balls");

//Assert
expect(result).toBe(False);



//FUNCTION 3
function addItem(arr, item){
    arr.push(item);  //the command pushes the added item to the end of the list
    return arr;
}

//test if we can add an item to an array
function addItem(arr, item){
    arr.push(item);
    return arr;
}

//Arrange
const arr = [2,3,4,6];

//Act
addItem (arr, 1);
    
//Assert
expect(result).toBe([2,3,4,6,1]);

//test if you can add a string to an array of numbers

function addItem(arr, item){
    arr.push(item);
    return arr;
}

//Arrange
const arr = [2,3,4,6];

//Act
addItem (arr, "mango");
    
//Assert
expect(result).toBe([2,3,4,6,1,"mango"]);

//test add of an item to an empty array
function addItem(arr, item){
    arr.push(item);
    return arr;
}

//Arrange
const arr = [];

//Act
addItem (arr, "mango");
    
//Assert
expect(result).toBe(["mango"]);


// test add array as item

function addItem(arr, item){
    arr.push(item);
    return arr;
}

//Arrange
const arr = [];

//Act
addItem (arr, array);
    
//Assert
expect(result).toBe([error]);


//test if item added will be pushed to last if array had a hole
//space where there was no item in the array

function addItem(arr, item){
    arr.push(item);
    return arr;
}

//Arrange
const arr = [1,2,,3,4];

//Act
addItem (arr, 9);
    
//Assert
expect(result).toBe([1,2,,3,4,9]);