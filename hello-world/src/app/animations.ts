import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

export let slide = trigger( 'slide', [

    transition( ':enter', [
        style({
            transform: 'translateX(-10px)'
        }),
        animate( 500 )
    ]),

    transition( ':leave', [
        animate( '0.5s 1s ease-in', keyframes([
            style({
                offset: .2,
                opacity: 1, 
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0, 
                transform: 'translateX(-100%)'
            })
        ]))
    ])

]);

export let fade = trigger( 'fade', [

    state( 'void', style({ opacity: 0 })),

    transition( ':enter, :leave', [
        animate( 2000 )
    ]),
]);