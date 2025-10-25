// ***** SWITCH-CASE *****

const month = 3;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; // prevents fall-through
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid Choice");
}