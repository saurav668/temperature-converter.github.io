let person ={
    firstName: 'saurav',
    lastName: 'kumar',
    sayhello(){
        console.log("Heloo ! i am "+ this.firstName +"and i have a" +car.brand);

    }
};
let car={
    brand:'maruti',
    price:'200000'
}
person.age=18;
// person.firstName='jeet';
// delete person.lastName;
// console.log('height' in person);
for(let key in person){
    console.log(key + " :" +person[key]);
}
// math object
var x=Math.pow(2,4);
var x=Math.sqrt(100);
var x=Math.ceil(10.3);
var x=Math.min(3,8,-2,8,-4);
console.log(x);
var person=new Object();
person.name="saurav";
console.log(person.name)
// hoisting
user();
function user(){
    console.log("saurav");
}