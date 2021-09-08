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

let given_word = "w3resource";

document.write(given_word);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor


// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  Go to the editor


// 9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor


// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
// Sample form :
// sample form