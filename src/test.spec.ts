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

  it('greeting 3 people at once', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Bob", "Kate");
    expect(greetingString).toBe("Greetings, John, Bob, and Kate!");
  });

  it('greeting 5 people at once', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Bob", "Kate", "Alex", "Hunter");
    expect(greetingString).toBe("Greetings, John, Bob, Kate, Alex, and Hunter!");
  });
  
});