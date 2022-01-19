/*  - Debugging Section -
- the console.log = testing the function below
*/

// console.log(hasStringAtEnd('hello', 'llo')); // true
// // looking at both strings: "hello" and 'llo'
// console.log(hasStringAtEnd('llo', 'hello')); // true
// console.log(hasStringAtEnd('llod', 'hello')); // false
// console.log(hasStringAtEnd('ll', 'hello')); // false
// console.log(hasStringAtEnd('llo', 'hellod')); // false

// function hasStringAtEnd(a, b){
//     let shortest = '';
//     let longest = '';
//     if (a.length < b.length) {
//         shortest = a;
//         longest = b;
//     } else {
//         shortest = b;
//         longest = a;
//     }

//     const indexStart = longest.length - shortest.length;
//     const endOfLongest = longest.substring(indexStart);
//     return shortest === endOfLongest;
// }

/* 
- during initial run of this code using live server:
    - 5 false were returned in the console

    - If you can't just look at the code and figure out what is happening then 
		□ what we need to do is debug it now 
		□ we can debug it by going to our sources tab in our dev tools
		□ then when we open up index Js 
		□ we can see the code now 
		□ that's really useful because we can add what's called a breakpoint in here 
			® a breakpoint will stop your code from executing at the spot you put the breakpoint
			® it's going to be at a line and it will allow you to step through the code line by line and see what the values of everything is 
			® at that point in time 
*/     

/* 
- break point:
    - it will be placed at line line 12 (where the function is)
    - to do this, just click on that line in the browser
        - mine is firefox so it is called 'Debugger' inorder to access the sources
            - in the video, it is called 'Sources'
        - refresh the browser page
    - instead of printing false 5x in the console
        - it will not print anything
    - we will use the "step over(f10)" tool to go through each line at a time in the browser



- after debugging on console:
    - we will change the code from line 58 - 60 (original code):

    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart + 1);
    return shortest === endOfLongest;

    - new code below:
    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart);
    return shortest === endOfLongest;
}
*/


/*
- brand new code:

    console.log(hasStringAtEnd('hello', 'llo')); // true
    console.log(hasStringAtEnd('llo', 'hello')); // true
    console.log(hasStringAtEnd('llod', 'hello')); // false
    console.log(hasStringAtEnd('ll', 'hello')); // false
    console.log(hasStringAtEnd('llo', 'hellod')); // false

    function hasStringAtEnd(a, b){
        let shortest = '';
        let longest = '';
        if (a.length < b.length) {
            shortest = a;
            longest = b;
        } else {
            shortest = b;
            longest = a;
        }

        const indexStart = longest.length - shortest.length;
        const endOfLongest = longest.substring(indexStart);
        return shortest === endOfLongest;

    }


- how it will print in the console:
    true wk6.js:5:9
    true wk6.js:7:9
    false wk6.js:8:9
    false wk6.js:9:9
    false wk6.js:10:9


 */

/*** installed node npm - unit testing section
 * 
 * 
 * 
 */
function doSomething(x, y){
    if (typeof x != 'string'){
        throw new error('x must be a string');
    }
    return x + y;
}

/* function doSomething:
 - checking to see if 'x' is not a string
 - the function will concatenate a string into another data type
 - but will throw an error if the first parameter is not a string
 */

 /**
  * to test as many scenarios as we can for this example we will test the happy path or the path that we simply expect to work 
	- as well as what happens when we pass in an argument into the first position that is not a string 
  * to write this: create a new js file
    - see file "index_test.js"
  * 
  * 
  */