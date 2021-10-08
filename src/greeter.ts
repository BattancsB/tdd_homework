export class Greeter{

    constructor (){}

    public greeting(name :string = null): String{
        if(name == null){
            return "Greetings, my friend!"
        }else{
            return "Greetings, " + name + "!" 
        }
    }


}