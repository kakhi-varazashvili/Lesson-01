/*Lesson #1 - Homework #1 - დაწერეთ ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს 
"ტოლია" თუ a უდრის b-ს, ხოლო წინააღმდეგ შემთხვევაში დააბრუნებს "არ არის ტოლი".*/

function myFunction(a,b){
    if(a === b){
            console.log("Is equal")
    }
    else {
        console.log("Is not equal")
    }
}

myFunction(10,"10")


/*Lesson #1 - Homework #2 - დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას
ფარენჰეიტებში და დააბრუნებს ტემპერატურას ცელსიუსებში. 
თუ პარამეტრი არ არის რიცხვითი მონაცემი დააბრუნეთ false.*/

function converter(fahrenheit){
        celsius = parseInt((fahrenheit - 32) * 5/9);
        if(typeof fahrenheit != "number"){
            celsius = false
        }
    return celsius  
}

console.log("Ceslius: ",converter(100))


/*Lesson #1 - Homework #3 - დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), 
b (მეორე რიცხვი) და operation (+,-,*,/) და დააბრუნებს ახალ მნიშვნელობას, 
რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით.
თუ a და b არ არიან რიცხვები ან თუ operation ცვლადში არის უცნობი ოპერაცია, დააბრუნეთ false.*/


function operation(num1,num2,oper){
    let result = 0; 
    oper = "+";
    if(typeof num1 != "number" || typeof num2 != "number" || oper != "+" || oper != "-" || oper != "*"|| oper != "/"){
        result = false
    }
     if(oper == "+"){
        result = num1 + num2
    }
    else if(oper == "-"){
        result = num1-num2
    }
    else if(oper == "*"){
        result = num1 * num2
    }
    else if(oper == "/"){
        result = num1 / num2
    }
    return result
}
console.log("Result: ",operation(20,10))