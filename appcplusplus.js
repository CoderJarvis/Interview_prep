let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {

    let min = 1;
    let max = 36;
    let x = Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "What is c++";
            break;
        case 2:
            st = "What is object oriented programming";
            break;
        case 3:
            st = "What is inline function";
            break;
        case 4:
            st = "Dynamic memory management in C++";
            break;
        case 5:
            st = "What is operator overloading";
            break;
        case 6:
            st = "What is object";
            break;
        case 7:
            st = "What is class";
            break;
        case 8:
            st = "Why to use class in stead of structure";
            break;
        case 9:
            st = "What is this pointer";
            break;
        case 10:
            st = "What are Acess specifiers";
            break;
        case 11:
            st = "What is friend function";
            break;
        case 12:
            st = "What is friend class";
            break;
        case 13:
            st = "What is constructor";
            break;
        case 14:
            st = "Default constructor vs parameterized constructue";
            break;
        case 15:
            st = "What is copy constructure";
            break;
        case 16:
            st = "What is destructor";
            break;
        case 17:
            st = "What is function overloading";
            break;
        case 18:
            st = "What is function overriding";
            break;
        case 19:
            st = "What is inheritance";
            break;
        case 20:
            st = "What is polymorphism";
            break;
        case 21:
            st = "What is abstraction";
            break;
        case 22:
            st = "What is encapsulation";
            break;
        case 23:
            st = "What is multiple inheritance";
            break;
        case 24:
            st = "What is multilevel inheritance";
            break;
        case 25:
            st = "What is hierarchial inheritance";
            break;
        case 26:
            st = "What is virtual bass class";
            break;
        case 27:
            st = "What is compile time polymorphism";
            break;
        case 28:
            st = "What is run time polymorphism";
            break;
        case 29:
            st = "What is virtual function";
            break;
        case 30:
            st = "What is pure virtual function";
            break;
        case 31:
            st = "What is abstract class";
            break;
        case 32:
            st = "Visibility in derived class";
            break;
        case 33:
            st = "C vs C++";
            break;
        case 34:
            st = "POP vs OOP";
            break;
       case 35:
            st = "new vs delete";
            break;
        case 36:
            st = "what is reference in c++";
            break;



        default:
            st = "default case";
            break;
    }

    document.getElementById("qus").innerHTML = st;
}