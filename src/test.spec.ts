import {Greeter} from "./greeter";

describe('greeting', function () {

  it('greeting my friend with an unknown name', function () {
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

  it('should greet people differently when there are some names written in lowercase and one written in uppercase', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Hanna", "Bob", "Anna", "Alex", "KATE");
    expect(greetingString).toBe("Greetings, John, Hanna, Bob, Anna, and Alex. AND GREETINGS, KATE!");
  });

  it('should group and handle names when some of them are written in lowercase and some written in uppercase', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("JOHN", "Hanna", "Bob", "Anna", "ALEX", "KATE");
    expect(greetingString).toBe("Greetings, Hanna, Bob, and Anna. AND GREETINGS, JOHN, ALEX, AND KATE!");
  });


  it('should split input names with commas when all the names written in lowercase', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Hanna, Bob", "Anna, Alex, Kate");
    expect(greetingString).toBe("Greetings, John, Hanna, Bob, Anna, Alex, and Kate!");
  });

  it('should split input names with commas when there are names written in upercase and written in lowercase together', function () {
    let testGreeter = new Greeter;
    let greetingString: String;
    greetingString =  testGreeter.greeting("John", "Hanna, BOB, Anna, Alex", "KATE");
    expect(greetingString).toBe("Greetings, John, Hanna, Anna, and Alex. AND GREETINGS, BOB, AND KATE!");
  });



});