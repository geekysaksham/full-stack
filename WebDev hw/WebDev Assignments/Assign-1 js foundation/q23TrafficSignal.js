let signalColor = "yellow";

switch (signalColor) {
    case "red" :
        console.log("red -> Stop");
        break;
    case "yellow" :
        console.log("yellow -> Wait");
        break;
    case "green" :
        console.log("green -> Go");
        break;
    default :
        console.log("Invalid signal");
}