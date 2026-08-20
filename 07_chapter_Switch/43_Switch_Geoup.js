let browser = "Brave";
switch (browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chrome Project!")
        break;
    case "Firefox":
        console.log("Mozilla Project")
        break;
    case "Safari":
        console.log("Apple browser - uses JavascriptCore Engine")
        break;
    default: console.log("Unknown browser - manual testing needed")
}