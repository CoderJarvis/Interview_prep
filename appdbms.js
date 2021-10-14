let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=45;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st="what is data";
            break;
        case 2:
            st="what is database";
            break;
        case 3:
            st="what is dbms";
            break;
        case 4:
            st="what is rdbms";
            break;
        case 5:
            st="what is file system";
            break;
        case 6:
            st="advantages of dbms over file system";
            break;
        case 7:
            st="what is ddl";
            break;
        case 8:
            st="what is dml";
            break;
        case 9:
            st="what is dcl";
            break;
        case 10:
            st="what is tcl";
            break;
        case 11:
            st="what is relational model";
            break;
        case 12:
            st="what is er-diagram";
            break;
        case 13:
            st="what is schema";
            break;
        case 14:
            st="what is data independence";
            break;
        case 15:
            st="what is entity";
            break;
        case 16:
            st="what is relationship";
            break;
        case 17:
            st="what is attribute";
            break;
        case 18:
            st="what is a key";
            break;
        case 19:
            st="what is normalization";
            break;
        case 20:
            st="what is 1nf";
            break;
        case 21:
            st="what is  2nf";
            break;
        case 22:
            st="what is 3nf";
            break;
        case 23:
            st="what is bcnf";
            break;
        case 24:
            st="what is foreign key";
            break;
        case 25:
            st="what is indexing";
            break;
        case 26:
            st="what is primary indexing";
            break;
        case 27:
            st="what is cluster indexing";
            break;
        case 28:
            st="what is secondary indexing";
            break;
        case 29:
            st="what is transaction";
            break;
        case 30:
            st="what is acid properties of transaction";
            break;
        case 31:
            st="what is atomicity";
            break;
        case 32:
            st="what is isolation";
            break;
        case 33:
            st="what is durability";
            break;
        case 34:
            st="what is consistency";
            break;
        case 35:
            st="describe transaction stares";
            break;
        case 36:
            st="what is cartesian product";
            break;
        case 37:
            st="what is natural join";
            break;
        case 38:
            st="what is inner join";
            break;
        case 39:
            st="what is outer join";
            break;
        case 40:
            st="what is sql";
            break;
        case 41:
            st="what is join";
            break;
        case 42:
            st="what is denormalization";
            break;
        case 43:
            st="what is relationship and what are they";
            break;
        case 44:
            st="what is triggers";
            break;
        case 45:
            st="what is sdlc";
            break;


        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}