interface person {
    name: string; 
    age: number; 
    email: string;
}
    class car {
    make: string;
     model: string; 
     year: number;
    displayInfo() {
    console.log("\t\tcar details");
    console.log("made by : ", this.make);
     console.log("midel is : ", this.model); 
     console.log("year: ", this.year);
    }
    }
    let age: number = 21;
    let fullName: string = "Koraganji Akhila";
    let isEmployee: boolean = false;
    let numbers: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let tupl: [string, number, string, boolean] = [ "Akhila",20,"akhi123@gamil.com",false];
    console.log ("name:", fullName);
    console.log ("num: ", age);
    console.log("boolean: ", isEmployee);
    console.log("array of numbers:", numbers);
    console.log("tuple :", tupl);
    enum week {
sunday, monday, tuesday, wednesday, thursday, friday, saturday,
}
function add(n1: number, n2: number): number {
let sum = n1 + n2;
return sum;
}
function captilize(str1: string): string{
    return str1.charAt(0).toUpperCase()+str1.slice(1);
}
function reverse(arr){
    let rev=[...arr]
    return rev.reverse();
}
let p: person={
    name: "akhila",
    age: 20,
    email: "akhila@123gmail.com"
}
console.log("Details:",p.name,p.age,p.email);
let c = new car();
c.make= "Benz";
c.model="G-Class";
c.year= 2015;
c.displayInfo();
console.log("Addition",add(5,2));
console.log("Captilaize",captilize("akhila"));
console.log("rverse tup",reverse(tupl));
