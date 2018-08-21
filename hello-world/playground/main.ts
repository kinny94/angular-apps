let arrow  = ( message ) => {
    console.log( message );
}

//defining an interface - Interface are only for declaration, the cannot be used for an implementation.
// Cohesion - Things that are related should be part on one unit.
// first letter should be capital in interface
class Point{                                
    x: number;
    y: number;

    // multiple constructor are not supported in typescript.
    constructor( x ?: number, y ?: number ){
        this.x = x;
        this.y = y;
    }

    draw(){
        //...
        console.log( 'X: ' + this.x + ', Y: ' +  this.y );
    }

    getDistance( another: Point ){
        //...
    }

}


let point = new Point();
point.draw();
