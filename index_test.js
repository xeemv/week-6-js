/**
 * create a variable that's going to import the chai expect method called chai expect 
 */

var expect = chai.expect;


// write the unit test

describe("Myfunctions", function() {
    describe('#doSomething', function(){
        it('should concatenate the two parameters', function(){
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
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
*/