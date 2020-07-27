var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("Area of rectangle is: " + rectangle.area());
            console.log("Perimeter of rectangle is: " + rectangle.perimeter());
        }

    })
    console.log("This statement executed after callback");
}


//function adder(a,b){
    //console.log(add.added(a,b));}

solveRect(2,4);
solveRect(8,9);
