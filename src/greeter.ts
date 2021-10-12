export class Greeter{

    public readonly name: string;

    constructor (){
        this.name = null
    }


    private isItUpperCase(input: string): boolean{
        return input === input.toUpperCase();
    }

    //constracting a string for names 
    private greetingMultiplePeople(namesArray: string[]): string{
        if (namesArray.length === 0){
            return ""
        }else{

            if(namesArray.length === 1){
                return "Greetings, " + namesArray[0];
            }else{
                let partOfGreeting:string;
                
                partOfGreeting = "Greetings, ";

                for(let i = 0; i < namesArray.length-1; i++){
                    partOfGreeting += namesArray[i] + ", ";
                }

                partOfGreeting += "and " + namesArray[namesArray.length-1];

                return partOfGreeting;
            }
        }
    }

    //constracting the final greeting in a string
    public greeting(...names :string[]): String{
        if(names.length === 0){
            return "Greetings, my friend!"
        }else{
            let firstPartOfFinalGreeting: string;
            let lastPartOfFinalGreeting: string;

            let lowerCaseNamesArray= new Array();
            let upperCaseNamesArray= new Array();

            for(let i = 0; i < names.length; i++){
                let splittedNames =names[i].split(", ", 1000);
                for(let name of splittedNames){
                    if(this.isItUpperCase(name)){
                        upperCaseNamesArray.push(name);
                    }else{
                        lowerCaseNamesArray.push(name);
                    }
                }
            }

            firstPartOfFinalGreeting = this.greetingMultiplePeople(lowerCaseNamesArray);       
            lastPartOfFinalGreeting = this.greetingMultiplePeople(upperCaseNamesArray).toUpperCase();

            if(firstPartOfFinalGreeting !== "" ){
                if(lastPartOfFinalGreeting !== "")
                    return firstPartOfFinalGreeting + ". AND " + lastPartOfFinalGreeting + "!";
                else
                    return firstPartOfFinalGreeting + "!";
            }else{
                return lastPartOfFinalGreeting + "!";
            }
        }
    }
}