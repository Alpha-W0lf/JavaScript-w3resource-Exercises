document.write("<br/>");

// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// var myDate = new Date();
// var myDay = myDate.getDay();
// var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// // document.write(myDate + "<br/>");

// // document.write(myTime + "<br/>");

// var AmPm = myDate.getHours() >= 12 ? "PM" : "AM";
// var hours = myDate.getHours() % 12;
// var NowTime = hours + " " + AmPm + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();

// // document.write(NowTime + "<br/>");

// document.write("Today is : " + weekdays[myDay] + "<br/>");
// document.write("Current time is : " + NowTime);

// // 2. Write a JavaScript program to print the contents of the current window.
// function printButton() {
// window.print();
// };

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


// let today = new Date();

// document.write(today + "<br/>");

// let month = 1 + today.getMonth();
// let date = today.getDate();
// let year = today.getFullYear();

// if (month < 10) {
//     month = '0' + month;
// };

// if (date < 10) {
//     date = '0' + date;
// };

// document.write(month + "<br/>");
// document.write(month + "-" + date + "-" + year + "<br/>");

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor
// let a = 5;
// let b = 6;
// let c = 7;
// let s = (a + b + c)/2;

// let triArea = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// document.write(s+"<br/>");
// document.write(triArea);

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  Go to the editor

// let given_word = "w3resource";

// document.write(given_word);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor

// function leapYear(year) {
//   let isLeap = ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
//   let answer = "";
//   if (isLeap == true) {
//     answer = "is";
//   } else {
//       answer = "is not";
//   }
//   return(year + " " + answer + " a leap year.")
// };

// document.write(leapYear(2102));

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor

// function findSunday(year1, year2) {
//     let begYear = year1;
//     let lastYear = year2;
//     let daysList = [];
//     let answerList = [];


//     for (let i = begYear; i <= lastYear; i++) {

//         let currYear = i + "-01-01";
//         let jan1DayOfWeek = new Date(currYear).getDay();
        
//         if (jan1DayOfWeek == 6) {
//             daysList.push(i);
//         } else {
//             continue;
//         };

//     };

    
    
//     document.write("The years starting with a Sunday are: " + daysList.join(' ') + "<br/>");
// };

// findSunday(2014, 2050);

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor

function guessRand() {
    let randInt = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("Please guess an integer between 1 and 10: ", "");
    let result = "Not matched";
    if (randInt == userGuess) {
        result = "Good Work";
    }
    document.getElementById("rand_num_answer").innerHTML = ("The random number is " + randInt + "<br/>" + 
    "Your guess is " + userGuess + "<br/>" +
    result + "<br/>");
};

// 9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor

// function whenChristmas() {
//     let today = new Date();
//     let todayISO = today.toISOString().slice(0, 10);
//     let thisYear = today.getFullYear();
//     let thisMonth = today.getMonth();
//     let thisDate = today.getDate();
//     let christmasYear = thisYear;
//     let nextChristmasDay = "";
//     let daysLeftTilChristmas = "";

//     // document.write("Today: " + today + "<br/>");
//     // document.write("This year: " + thisYear + "<br/>");
//     // document.write("This month: " + thisMonth + "<br/>");
//     // document.write("This date: " + thisDate + "<br/>");

//     if (thisMonth == 11 && thisDate >= 25) {
//         christmasYear = thisYear + 1;
//     }

//     // document.write("The year of next Christmas is: " + christmasYear + "<br/>");
//     // document.write("Today is: " + todayISO + "<br/>");
//     nextChristmasDay = christmasYear + "-12-25";
//     // document.write("Next Christmas day: " + nextChristmasDay + "<br/>");

//     let timeLeftTilChristmas = (new Date(nextChristmasDay).getTime()) - (new Date(todayISO).getTime());
//     daysLeftTilChristmas = timeLeftTilChristmas / (1000 * 3600 * 24);
//     document.write("Days left til Christmas: " + daysLeftTilChristmas + "<br/>");

// };

// whenChristmas();

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
// Make a form with text boxes for user to input 2 numbers
// Add two buttons. One for multiply. One for divide.
// Display result after button click.

function weMultiply() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    multiplied_answer = num1 * num2

    document.getElementById("display_result").innerHTML = "The two numbers MULTIPLIED is:<br/><br/>" + multiplied_answer
}



function weDivide() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    console.log("We are dividing. Num1 : " + num1)
    console.log("We are dividing. Num2 : " + num2)


    divided_answer = num1 / num2
    console.log(divided_answer)
    document.getElementById("display_result").innerHTML = "The two numbers DIVIDED is:<br/><br/>" + divided_answer
}

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// Click me to see the solution

// function convertTemp(givenValue, givenUnit) {

//     document.write(givenValue + "<br/>")
//     document.write(givenUnit + "<br/>")

//     let convertedUnit = ""
//     let convertedValue = ""
//     if (givenUnit == "f" || givenUnit == "F") {
//         convertedUnit = "c"
//         convertedValue = (givenValue - 32) * 5 / 9
//         document.write(givenValue + " degrees " + givenUnit + " is converted to " + convertedValue + " degrees " + convertedUnit)
//     } else if (givenUnit == "c" || givenUnit == "C") {
//         convertedUnit = "f"
//         convertedValue = ((9 * givenValue) / 5) + 32
//         document.write(givenValue + " degrees " + givenUnit + " is " + convertedValue + " degrees " + convertedUnit)
//     } else {
//         document.write("Please enter a valid unit. f or c")
//     }

// }


// convertTemp(90, "c")

// 12. Write a JavaScript program to get the website URL (loading page).  Go to the editor

// let currentSite = window.location.href

// document.write(currentSite + "<br/>")
// document.write(document.URL)

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  Go to the editor

function nameVar() {
    let theVar = document.getElementById("varName").value
    let theValue = 123
    this[theVar] = theValue
    document.getElementById("our_answer").innerHTML = theVar + " <-- What you entered is now the name of a variable. --> " + [theVar] + "<br/>"
}

// 14. Write a JavaScript exercise to get the extension of a filename.  Go to the editor

// function getExtension(fileName) {
//     fileName_str = String(fileName)
//     answer = fileName_str.substring(fileName_str.indexOf("."))
//     console.log("The file's extension is : " + answer)
// }

// getExtension("heavy.png")


// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.  Go to the editor

function getDifference(ourNum) {
    let comparisonNum = 13
    let answer = ""
    if (comparisonNum - ourNum < 0) {
        answer = Math.abs((ourNum - comparisonNum) * 2)
        console.log(answer)
    } else {
        answer = comparisonNum - ourNum
        console.log(answer)
    }
}

getDifference(133)

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function computeSum(num1, num2) {
    let answer = null
    if (num1 == num2) {
        answer = (num1 + num2) * 3
        console.log(answer)
    } else {
        answer = num1 + num2
        console.log(answer)
    }
}

computeSum(4, 7)


// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.  Go to the editor
// Click me to see the solution


// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.  Go to the editor
// Click me to see the solution


// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  Go to the editor
// Click me to see the solution


// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.  Go to the editor
// Click me to see the solution


// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.  Go to the editor
// Click me to see the solution


// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  Go to the editor
// Click me to see the solution


// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.  Go to the editor
// Click me to see the solution


// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.  Go to the editor
// Click me to see the solution


// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.  Go to the editor
// Click me to see the solution


// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.  Go to the editor
// Click me to see the solution


// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.  Go to the editor
// Click me to see the solution


// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.  Go to the editor
// Click me to see the solution


// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.  Go to the editor
// Click me to see the solution


// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

