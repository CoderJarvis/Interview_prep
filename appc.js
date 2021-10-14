let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=54;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
        st="what is C";
        break;
    case 2:
        st="what is procedural programming language";
        break;
    case 3:
        st="what is compiler";
        break;
    case 4:
        st="what is assembler";
        break;
    case 5:
        st="what is interpreter";
        break;
    case 6:
        st="what is variable";
        break;
    case 7:
        st="what is datatype";
        break;
    case 8:
        st="what is keyword";
        break;
    case 9:
        st="what is identifiers";
        break;
    case 10:
        st="what is constants";
        break;
    case 11:
        st="what is precedence and associativity";
        break;
    case 12:
        st="what is format specifiers";
        break;
    case 13:
        st="what is escape sequence";
        break;
    case 14:
        st="what is literals";
        break;
    case 15:
        st="static";
        break;
    case 16:
        st="what is static variable";
        break;
    case 17:
        st="what is static methods";
        break;
    case 18:
        st="what is errors";
        break;
    case 19:
        st="what is syntax error";
        break;
    case 20:
        st="what is runtime error";
        break;
    case 21:
        st="what is logical errors";
        break;
    case 22:
        st="What is increment or decrement operator";
        break;
    case 23:
        st="what is type casting";
        break;
    case 24:
        st="implicit type casting";
        break;
    case 25:
        st="explicit type casting";
        break;
    case 26:
        st="what is array";
        break;
    case 27:
        st="multidimensional array";
        break;
    case 28:
        st="what is pointers";
        break;
    case 29:
        st="what is double pointers";
        break;
    case 30:
        st="what is void pointers";
        break;
    case 31:
        st="what is null pointers";
        break;
    case 32:
        st="what is dangling pointers";
        break;
    case 33:
        st="what is static memory allocation";
        break;
    case 34:
        st="what is dynamic memory allocation";
        break;
    case 35:
        st="what is function";
        break;
    case 36:
        st="what is what is call by value";
        break;
    case 37:
        st="what is call by reference";
        break;
    case 38:
        st="what is recursion";
        break;
    case 39:
        st="what is library function";
        break;
    case 40:
        st="what is user defined function";
        break;
    case 41:
        st="what is string";
        break;
    case 42:
        st="what is structure";
        break;
    case 43:
        st="what is union";
        break;
    case 44:
        st="what is typedef";
        break;
    case 45:
        st="what is preprocessor";
        break;
    case 46:
        st="what is local variables";
        break;
    case 47:
        st="what is global variables";
        break;
    case 48:
        st="what is stroage classes in c";
        break;
    case 49:
        st="compiler vs interpreter";
        break;
    case 50:
        st="compile time vs run time";
        break;
    case 51:
        st="static memory allocation vs dynamic memory allocation";
        break;
    case 52:
        st="structure vs union";
        break;
    case 53:
        st="local variables vs global variables";
        break;
    case 54:
        st="malloc() vs calloc()";
        break;
    
    default:
        break;
    }

    document.getElementById("qus").innerHTML=st;
}