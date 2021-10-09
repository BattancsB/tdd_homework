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


  it('should convert to uppercase when shouting', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("JOHN");
    expect(greetingString).toBe("GREETINGS, JOHN!");
  });

  it('should greet multiple people shouting', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("JOHN", "HANNA", "BOB", "ANNA", "ALEX", "KATE");
    expect(greetingString).toBe("GREETINGS, JOHN, HANNA, BOB, ANNA, ALEX, AND KATE!");
  });

  it('should sort and convert to uppercase when greeting multiple people 3 3', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("JOHN", "Hanna", "Bob", "Anna", "ALEX", "KATE");
    expect(greetingString).toBe("Greetings, Hanna, Bob, and Anna. AND GREETINGS, JOHN, ALEX, AND KATE!");
  });

  it('should sort and convert to uppercase when greeting multiple people 5 1 ', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Hanna", "Bob", "Anna", "Alex", "KATE");
    expect(greetingString).toBe("Greetings, John, Hanna, Bob, Anna, and Alex. AND GREETINGS, KATE!");
  });




});