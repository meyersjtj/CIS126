let prize = prompt("Select a number between 1 and 10: ");
prize = Number(prize);
output = "My selection: ";
switch(prize){
    case 0:
        console.log("A stuffed bunny.");
        break;
    case 1:
        console.log("A stuffed dog.");
        break;
    case 2:
        console.log("A stuffed cat.");
        break;
    case 3:
        console.log("A stuffed dolphin");
        break;
    case 4:
        console.log("A stuffed wolf");
        break;
    case 5:
        console.log("Prize 5.");
        break;
    case 6:
        console.log("Prize 6.");
        break;
    case 7:
        console.log("Prize 7.");
        break;
    default:
        console.log("What ever you can think of.");
}
console.log(output);