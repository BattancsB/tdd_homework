import {Greeter} from "./greeter";

describe('greeting', function () {

  it('greeting my friend with unknown name', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting();
    expect(greetingString).toBe("Greetings, my friend!");
  });


  it('greeting my friend John', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John");
    expect(greetingString).toBe("Greetings, John!");
  });



});