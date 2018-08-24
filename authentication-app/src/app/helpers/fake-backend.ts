import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory( backend: MockBackend, option: BaseRequestOptions  ){
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    backend.connections.subscribe(( connection: MockConnection ) => {
        setTimeout(() => {
            if( connection.request.url.endsWith( '/api/authenticate' ) && connection.request.method === RequestMethod.Post ){
                let body = JSON.parse( connection.request.getBody());

                if( body.email === 'ad.sam007@gmail.com' && body.password === '1234' ){
                    connection.mockRespond( new Response(
                        new ResponseOptions({
                            status: 200,
                            body: {
                                token : token
                            }
                        })
                    )); 
                }else{
                    connection.mockRespond( new Response(
                        new ResponseOptions({
                            status: 200
                        })
                    ));
                }
            }
            
            if(  connection.request.url.endsWith( '/api/orders' ) && connection.request.method === RequestMethod.Get ){
                if( connection.request.headers.get( 'Authorization' ) === 'Bearer ' + token ){
                    connection.mockRespond( new Response(
                        new ResponseOptions({
                            status: 200,
                            body: [ 1, 2, 3 ]
                        })
                    ))
                }else{
                    connection.mockRespond( new Response(
                        new ResponseOptions({
                            status: 401
                        })
                    ));
                }
            }
        }, 1000 );
    });

    return new Http( backend, option );
}

export let fakeBackendProvider = {
    provide: Http,
    useFacotry: fakeBackendFactory,
    deps: [ MockBackend, BaseRequestOptions ]
}