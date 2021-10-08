export class Greeter{

    public readonly name: string;

    constructor (){
        this.name = null
    }

    public greeting(...name :string[]): String{
        if(name.length === 0){
            return "Greetings, my friend!"
        }else{
            if(name.length === 1){
                if(name[0] === name[0].toUpperCase())
                    return "GREETINGS, "+ name[0].toUpperCase() + "!";
                else
                    return "Greetings, " + name + "!";
            }else{
                let nameString: string = "Greetings, ";
                for(let i = 0; i < name.length-1; i++){
                    nameString += name[i] + ", ";
                }
                nameString += "and " + name[name.length-1] + "!";
    
                return nameString;
            }
            
        }
    }


}