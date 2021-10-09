export class Greeter{

    public readonly name: string;

    constructor (){
        this.name = null
    }


    private isItUpperCase(input: string): boolean{
        return input === input.toUpperCase();
    }

    //constracting a string for names written in lowercase
    private greetingMultiplePeopleNormally(lowerCaseNames: string[]): string{
        if (lowerCaseNames.length === 0){
            return ""
        }else{

            if(lowerCaseNames.length === 1){
                return "Greetings, " + lowerCaseNames[0];
            }else{
                let partOfGreeting:string;
                partOfGreeting = "";
                
                partOfGreeting = "Greetings, ";

                for(let i = 0; i < lowerCaseNames.length-1; i++){
                    partOfGreeting += lowerCaseNames[i] + ", ";
                }

                partOfGreeting += "and " + lowerCaseNames[lowerCaseNames.length-1];

                return partOfGreeting;
            }
        }
    }

    //constracting a string for names written in uppercase
    private greetingMultiplePeopleLoudly(upperCaseNames: string[]): string{
        if (upperCaseNames.length === 0){
            return ""
        }else{
            if(upperCaseNames.length === 1){

                return "GREETINGS, " + upperCaseNames[0];
            }else{

                let partOfGreeting:string;

                partOfGreeting = "GREETINGS, ";

                for(let i = 0; i < upperCaseNames.length-1; i++){
                    partOfGreeting += upperCaseNames[i] + ", ";
                }
        
                partOfGreeting += "AND " + upperCaseNames[upperCaseNames.length-1];
        
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

            firstPartOfFinalGreeting = "";
            lastPartOfFinalGreeting = "";

            let numberOfLowNames: number;
            let numberOfUpNames: number;

            let lowerCaseNamesArray= new Array();
            let upperCaseNamesArray= new Array();

            for(let i = 0; i < names.length; i++){
                if(this.isItUpperCase(names[i])){
                    upperCaseNamesArray.push(names[i]);
                }else{
                    lowerCaseNamesArray.push(names[i]);
                }
            }

            firstPartOfFinalGreeting = this.greetingMultiplePeopleNormally(lowerCaseNamesArray);       
            lastPartOfFinalGreeting = this.greetingMultiplePeopleLoudly(upperCaseNamesArray);

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