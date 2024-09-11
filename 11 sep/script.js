function TrackOrder(id) {
    if (typeof id == "string") {
        id = id.toUpperCase();
        console.log(id);
    }
    else
        console.log(id);
}
var id = "12S09ad87";
TrackOrder(id);
function printColor(color) {
    if (Array.isArray(color)) {
        // color.forEach((item)=>{
        //     console.log(item);
        // })
        console.log(color.join(','));
    }
    else {
        console.log(color);
    }
}
printColor(["red", "pink", "black", "blue"]);
