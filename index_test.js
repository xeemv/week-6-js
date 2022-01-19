/**
 * create a variable that's going to import the chai expect method called chai expect 
 */

var expect = chai.expect;


// write the unit test

describe("Myfunctions", function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });


        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        });
    });
});

/*
- code line 10: 
    - describe("Myfunctions", function() ==>
        - 'Myfunctions' = name of the unit test or group of unit test that we are setting up
        - function = will facilitate the test

- code line 12:
    - it('should concatenate the two parameters', function(){ ==>
        - this is the "it" method/function
            - in plain English, we can say what it should do or happen here 
                - what is the test?
            - we are asking it to concatenate the 2 parameters

- code line 13:
    - var x = doSomething('Hello', 5); ==>
        - this is something we're going to do
        - we want to pass in 'hello' and 5

- code line 14:
    - expect(x).to.equal('Hello5'); ==>
        - we expect that (x) will equal "Hello5"

- code line 18: 
    -  it('should throw an error if first parameter is not a string', function(){ ===>
        - this is a different function test case
        - you always pass in a function and then whatever you want to happen 
			◊ this one had to be wrapped inside of expect because   it's going to throw an error
			◊ we have to catch that error
            ◊ expect to say it should throw an error all right  
            -

 ** stopped at the 10:17 minute mark **


*/