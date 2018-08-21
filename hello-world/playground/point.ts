//defining an interface - Interface are only for declaration, the cannot be used for an implementation.
// Cohesion - Things that are related should be part on one unit.
// first letter should be capital in interface

export class Point{                                

    // multiple constructor are not supported in typescript.
    constructor( private x ?: number, private y ?: number ){}        //prefix will generate and initialize this field

    draw(){
        //...
        console.log( 'X: ' + this.x + ', Y: ' +  this.y );
    }

    getDistance( another: Point ){
        //...
    }

    getX(){
        return this.x;
    } 

    setX( value: number ){
        if( value < 0 ){
            throw new Error( "Value cannot be less than 0" );
        }
        this.x = value;
    }

    // how setters and getters work in typescript
    get X(){
        return this.x;
    }

    set X( value: number ){
        if( value < 0 ){
            throw new Error( "Value cannot be less than 0" );
        }
        this.x = value;

    }
}

