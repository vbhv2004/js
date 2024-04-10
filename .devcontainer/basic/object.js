// const tinderuser = new object()  This is a singleton object

const tinderuser = {} 
  
// This is not a singleton object

tinderuser.id ="123abc"
tinderuser.name ="sam"
 
const obj1 ={1:"a",2:"3"}

const obj2 ={3:"d",5:"r"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
 
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const course = {
   
    coursename : "python",
    name: "hello",
    is:"yo"

}
const {name : yes}=course

console.log(yes);
