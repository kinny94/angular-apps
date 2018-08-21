import { Point } from './point';
import { LikeComponent } from './like.component';

let arrow  = ( message ) => {
    console.log( message );
}

let point = new Point( 1, 2 );
let x = point.getX();
console.log( x );
point.setX( 10 );
x = point.getX();
console.log( x );

x = point.X;
console.log( x );
point.X = 10;
x = point.X;
console.log( x );

let component = new LikeComponent( 10, true );
component.onClick();
console.log( `likeCount: ${ component.likesCount }, isSelected: ${ component.isSelected }` );