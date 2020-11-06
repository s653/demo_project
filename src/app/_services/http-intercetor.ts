import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpIntercetor implements HttpIntercetor {

    intercept(request:HttpRequest<any>, next:HttpHandler){
        let token = localStorage.getItem('access_token');
        this.addtoken(request,token);
        return next.handle(request);
    }
    private addtoken(request:HttpRequest<any>, token:string){
        debugger;
        request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,

            }
        });
    }
}
