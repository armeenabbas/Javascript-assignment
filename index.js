//28/4/2024
// Question from Miss Faiza
// Write a function which checks if string is palindrom
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome

// function palindrom(s){
// const cleanedS=s.tolowercase().replace("A man, a plan, a canal: Panama")
// return cleanedS === cleanedS.split("").reverse().join("")
// }

// const s="A man, a plan, a canal: Panama";
// console.log(palindrom(s));

//====================================================================================
// Question # 01: Given an integer array nums, find a subarray that has the largest
// product, and return the product.
function maxProductSubarray(numbers) {
    if (numbers.length === 0) return 0;

    let maxProduct = numbers[0];
    let minProduct = numbers[0];
    let Output = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        maxProduct = Math.max(numbers[i], maxProduct * numbers[i]);
        minProduct = Math.min(numbers[i], minProduct * numbers[i]);
        Output = Math.max(Output, maxProduct);
    }

    return Output;
}

//=====================================================================================
//Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

var str = "welcome to javascript guide";
var reversedStr = reverseWords(str);
console.log(reversedStr);


function twoSum(nums, target) {
   
    const numMap = new Map();
   
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
       
        if (numMap.has(complement)) {
           
            return [numMap.get(complement), i];
        }
       
        numMap.set(nums[i], i);
    }
        return [];
}

//====================================================================================
// Question # 03: Reverse each word in a given input string.
const num = [4, 3, -1, 9];
console.log(maxProductSubarray(num)); 
   function reverseWords(input) {
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    var str = words.join(" ");
    return str;
}

//======================================================================================
//Question # 04: Write a JavaScript program to display the reading status
function object(library) {
    library.forEach(element => {
        const card = document.getElementById("Books")
        // card.innerHTML += `<h1>${element.author}</h1>
        // <h2>${element.title}</h2>
        // <h2>${element.readingStatus ? "already read" : "not read yet"}</h2>`

    });
}
var library = [
    { author: "Bill Gates", title: 'The Road Ahead', readingStatus: true },
    { author: "Steve Jobs", title: 'walter isaacsoon', readingStatus: true },
    { author: "Suzanne Collins", title: 'Mockingjay', readingStatus: false },
]
object(library)
    
    

//======================================================================================
//Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order.

function amountToCoins(amount, coins) {
   
    coins.sort((a, b) => b - a);
   
        const result = [];
   
    
    for (let i = 0; i < coins.length; i++) {
       
        const numCoins = Math.floor(amount / coins[i]);
       
       
        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]);
        }
             
        amount %= coins[i];
    }
      
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1])); 

 

















