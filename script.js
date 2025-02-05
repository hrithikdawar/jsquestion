// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.

// let numbers = [5, 10, 15, 20]
// let [a,b,c]=numbers
// console.log(a,c)


// 2. Swap the values of a and b using array destructuring.
// let a=[1,2,3,4,5]
// let b=[6,7,5,8,9,9]

// let c=a
// a=[...b]
// b=[...c]
// console.log(a)
// console.log(b)
// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.

// let obj= {name: "John", age: 25, city: "New York"}
//  let {name,city}=obj
//  console.log(name,city)

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.
// let obj={
// ids:101
// }
// let {ids,user="guest"}=obj
// console.log(user)

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.

// let obj= {person:{first: "Alice", last: "Johnson"}}
// let {person:{first,last}}=obj
// console.log(first,last)


// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.



// let array= [100,200,300]

//  array.splice(1,1)

// const [...left]=array;
// console.log(array);


// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.


// function arr (ele){
//     let add=0
//    for(let i=0; i<=ele.length; i++){
//     add+=i
//    }
//    return add
// }

// console.log(arr([1,2,3,4]));



// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.


// let obj= {name: "David", age: 30, job: "Developer"}
// let {name,age,job}= obj;

// obj.profession= obj.job
// delete obj.job
// console.log(obj);

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.

// let array= [[1,2], [3,4]]

// let[[a,b], [c,d]]= array
// console.log(a,d);

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.

// let arr= [10,20]
// let [a,b]= arr
   

//     if (a<b) {
//       let  c=a
//        console.log( a=b,b=c);
//     }


// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.

// let object= {user: {id: 5, info: {name: "Sam", city: "Paris"}}}

// let {user:{id,info:{name,city}}}= object
// console.log(name, city);

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.

// let  array= [10,[20,30],40]
// let  [a,[b,c],d]= array

// let n1= a
// let n2= c
// let n3= d
// console.log(n1,n2,n3)

// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.


// let arr= [[1, "one"], [2, "two"], [3, "three"]]
// let [[a,a1],[b,b1],[c,c1]]=arr
// arr.forEach(element => {
//     console.log(element)
    
// });


// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.


// function f(e){
//    let sum=0
//    sum= e.a+e.c
//    return sum
// }

// console.log(f({a:5,b:10,c:15}));

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.


//  let object= {data:{user:{id:3, details:{age:25,country:"India"}}}}

// let {data:{user:{id,details:{age,country}}}}= object
// console.log(id, country);


// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.

// let obj= {a:[1,2,{b:3}], c:{d:4,e:[5,6]}}

// const{a:[a1,a2,{b}], c:{d,e:[a3,a4]}}= obj
// console.log(b,a4);

// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.

// let obj= {items: [{price: 100}, {price: 200}], discount: 0.1}
// let {items,discount}=obj
// let totalPrice = items.reduce((acc, cur) => acc += cur.price, 0)
// let afterDiscountPrice = totalPrice - (totalPrice * discount)
// console.log(afterDiscountPrice)

// const object={items:[{price:100}, {price:200}], discount:0.1}


// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
// let object= {name: "Alice", scores: [80, 90, 100]}

// let {name, scores}= object
// let average= (scores[0]+ scores[1]+scores[2])/3
// console.log(average);


// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
// let users=[{id: 1, name: "John"}, {id: 2, name: "Jane"}]

// let des= users.map(({id,name})=>{
//     return `${id},  ${name}`
// })

// console.log(des);

// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.

// const array= [["x", 1], ["y",2], ["z",3]]

// let[[x,a], [y,b], [z,c]]=array

// array.forEach(e=>{
//     console.log("key:",e.at(0), "value:",e.at(1));     
// })











































