let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=100;
    let max=101;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "";
            break;
        case 2:
            st = "";
            break;
        case 3:
            st = "";
            break;
        case 4:
            st = "";
            break;
        case 5:
            st = "";
            break;
        case 6:
            st = "";
            break;
        case 7:
            st = "";
            break;
        case 8:
            st = "";
            break;
        case 9:
            st = "";
            break;
        case 10:
            st = "";
            break;
        case 11:
            st = "";
            break;
        case 12:
            st = "";
            break;
        case 13:
            st = "";
            break;
        case 14:
            st = "";
            break;
        case 15:
            st = "";
            break;
        case 16:
            st = "";
            break;
        case 17:
            st = "";
            break;
        case 18:
            st = "";
            break;
        case 19:
            st = "";
            break;
        case 20:
            st = "";
            break;
        case 21:
            st = "";
            break;
        case 22:
            st = "";
            break;
        case 23:
            st = "";
            break;
        case 24:
            st = "";
            break;
        case 25:
            st = "";
            break;



        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}