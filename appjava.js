let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=29;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "What is java";
            break;
        case 2:
            st = "C++ vs JAVA";
            break;
        case 3:
            st = "java is compiler baes or interpreter based?";
            break;
        case 4:
            st = "What is JDK";
            break;
        case 5:
            st = "What is JRE";
            break;
        case 6:
            st = "What is JVM";
            break;
        case 7:
            st = "Explain the main function of java i.e public static void main";
            break;
        case 8:
            st = "String are immutable in java. justify it";
            break;
        case 9:
            st = "What is vargar in java";
            break;
        case 10:
            st = "What are the aceess specifiers in java";
            break;
        case 11:
            st = "What is this keyword";
            break;
        case 12:
            st = "What is super keyword";
            break;
        case 13:
            st = "What is abstract method in java";
            break;
        case 14:
            st = "What is interface in java";
            break;
        case 15:
            st = "Why muiltiple inheritance is not supperted in java";
            break;
        case 16:
            st = "Abstract class vs inheritance";
            break;
        case 17:
            st = "What is packages in java";
            break;
        case 18:
            st = "what is multithreading in java";
            break;
        case 19:
            st = "In how many ways we can creat a thread";
            break;
        case 20:
            st = "What is thread priority";
            break;
        case 21:
            st = "Explain the life cycle of a thread";
            break;
        case 22:
            st = "Exceptions in java and it is handled";
            break;
        case 23:
            st = "What is try-catch block";
            break;
        case 24:
            st = "What is throw keyword";
            break;
        case 25:
            st = "What is throws keyword";
            break;
        case 26:
            st = "What is throw keyword";
            break;
        case 27:
            st = "What is throws keyword";
            break;
        case 28:
            st = "What is final keyword";
            break;
        case 29:
            st = "What is finally block";
            break;



        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}