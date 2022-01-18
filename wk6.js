/* 
- the console.log = testing the function below
*/

console.log(hasStringAtEnd('hello', 'llo')); // true
// looking at both strings: "hello" and 'llo'
console.log(hasStringAtEnd('llo', 'hello')); // true
console.log(hasStringAtEnd('llod', 'hello')); // false
console.log(hasStringAtEnd('ll', 'hello')); // false
console.log(hasStringAtEnd('llo', 'hellod')); // false

function hasStringAtEnd(a,b){
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
    const endOfLongest = longest.substring(indexStart + 1);
    return shortest === endOfLongest;
}

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
*/