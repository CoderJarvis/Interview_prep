let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=38;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "What is data structuure";
            break;
        case 2:
            st = "What is linear data structure";
            break;
        case 3:
            st = "What is non-linear data structure";
            break;
        case 4:
            st = "What is array";
            break;
        case 5:
            st = "What is link list";
            break;
        case 6:
            st = "What is stack";
            break;
        case 7:
            st = "What is queue";
            break;
        case 8:
            st = "What is graph data structure";
            break;
        case 9:
            st = "What is tree data structure";
            break;
        case 10:
            st = "Advantages of array over link list";
            break;
        case 11:
            st = "Advantages of link list over array";
            break;
        case 12:
            st = "What is multidimensional array";
            break;
        case 13:
            st = "Explain singly link list";
            break;
        case 14:
            st = "Explain doubly link list";
            break;
        case 15:
            st = "Explain singly circular link list";
            break;
        case 16:
            st = "Explain doubly circular link list";
            break;
        case 17:
            st = "Application of stack and queue";
            break;
        case 18:
            st = "What is linear queue";
            break;
        case 19:
            st = "What is circular queue";
            break;
        case 20:
            st = "What is deque or doubly ended queue";
            break;
        case 21:
            st = "What is priority queue";
            break;
        case 22:
            st = "What is binary tree";
            break;
        case 23:
            st = "What is binary search tree";
            break;
        case 24:
            st = "What is advantages of BST";
            break;
        case 25:
            st = "What is disadvantages of BST";
            break;
        case 26:
            st = "What is AVL tree";
            break;
        case 27:
            st = "Advantages of AVL tree over BST";
            break;
        case 28:
            st = "Disadvantages of AVL tree";
            break;
        case 29:
            st = "What is red black tree";
            break;
        case 30:
            st = "red blak tree advantages over AVL tree";
            break;
        case 31:
            st = "AVL tree vs red black tree";
            break;
        case 32:
            st = "What is B-tree";
            break;
        case 33:
            st = "What is B+ tree";
            break;
        case 34:
            st = "Which is best data structue";
            break;
        case 35:
            st = "What is bfs";
            break;
        case 36:
            st = "What is spanning tree";
            break;
        case 37:
            st = "What is heap data structure";
            break;
        case 38:
            st = "what is hashmap in data structure";
            break;




        default:
            st="default case";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}