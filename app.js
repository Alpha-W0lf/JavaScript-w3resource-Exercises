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

// function guessRand() {
//     let randInt = Math.floor(Math.random() * 10) + 1;
//     let userGuess = prompt("Please guess an integer between 1 and 10: ", "");
//     let result = "Not matched";
//     if (randInt == userGuess) {
//         result = "Good Work";
//     }
//     document.write("The random number is " + randInt + "<br/>");
//     document.write("Your guess is " + userGuess + "<br/>");
//     document.write(result + "<br/>");
// };

// 9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor

function whenChristmas() {
    let today = new Date();
    let todayISO = today.toISOString().slice(0, 10);
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    let thisDate = today.getDate();
    let christmasYear = thisYear;
    let nextChristmasDay = "";
    let daysLeftTilChristmas = "";

    document.write("Today: " + today + "<br/>");
    document.write("This year: " + thisYear + "<br/>");
    document.write("This month: " + thisMonth + "<br/>");
    document.write("This date: " + thisDate + "<br/>");

    if (thisMonth == 11 && thisDate >= 25) {
        christmasYear = thisYear + 1;
    }

    document.write("The year of next Christmas is: " + christmasYear + "<br/>");
    document.write("Today is: " + todayISO + "<br/>");
    nextChristmasDay = christmasYear + "-12-25";
    document.write("Next Christmas day: " + nextChristmasDay + "<br/>");

    timeLeftTilChristmas = (new Date(nextChristmasDay).getTime()) - (new Date(todayISO).getTime());
    daysLeftTilChristmas = timeLeftTilChristmas / (1000 * 3600 * 24);
    document.write("Days left til Christmas: " + daysLeftTilChristmas + "<br/>");

};

whenChristmas();

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
// Sample form :
// sample form :