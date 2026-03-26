class RandomClass {
    //Accessible only from this class
    private a: number = 0
    //Accessible from everyone
    public greet() {
        return "hi"
    }
    //Only accessible from this class and subclasses (extends)
    protected getName() {
        return "micheal"
    }
}
//These do not exist at runtime

class Pizza {
    //you can use these or parameters
    constructor(public name: string, public toppings: string[]) {
    }
}