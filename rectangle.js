//Simple node module (functions in this case) which will export two values perimeter and area
module.exports = (x,y,callb) => {
    if (x <=0 || y <= 0)
    {
        setTimeout(() => {
            callb(new Error("Rectangle dimensions should be greater than 0"), null),
            5000
        });
        
    }
    else{
        setTimeout(() => {
            callb(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }),5000
        });
    }
}




