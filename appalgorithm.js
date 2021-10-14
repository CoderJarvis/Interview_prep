let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=15;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "What is algorithm";
            break;
        case 2:
            st = "Characterstics of algorithm";
            break;
        case 3:
            st = "What is pseudocode";
            break;
        case 4:
            st = "What is algorithm complexity";
            break;
        case 5:
            st = "Different operations in data structure";
            break;
        case 6:
            st = "What is searching";
            break;
        case 7:
            st = "What is sorting";
            break;
        case 8:
            st = "What is devide and conquer algorithm";
            break;
        case 9:
            st = "What is greedy algorithm";
            break;
        case 10:
            st = "What is dynamic programming";
            break;
        case 11:
            st = "What is backtracking algorithm";
            break;
        case 12:
            st = "What is branch and bounch algorithn";
            break;
        case 13:
            st = "What is minimum cost spanning tree";
            break;
        case 14:
            st = "What is dijstra algorithm";
            break;
        case 15:
            st = "What is floyd-warshall algorithm";
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




        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}