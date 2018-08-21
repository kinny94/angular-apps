let arrow  = ( message ) => {
    console.log( message );
}

//defining an interface - Interface are only for declaration, the cannot be used for an implementation.
// Cohesion - Things that are related should be part on one unit.
// first letter should be capital in interface
class Point{                                
    x: number;
    y: number;

    draw(){
        //...
    }

    getDistance( another: Point ){
        //...
    }

}

