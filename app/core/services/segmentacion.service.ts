import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response,
    Headers
} from '@angular/http';
import {
    Observable
} from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SegmentacionService {
    constructor(private http: Http) {}
    //private usersUrl: string = 'http://192.168.200.123:8000/api/v1/usuarios/';
    private usersUrl: string = 'http://127.0.0.1:8000/inicial/';
    //data de la tabla...
    actualizarTabla(url:string=''): Observable < Object > {
        if(url!=''){
            return this.http.get(url).map(this.extractData)
        }else{
            return this.http.get(this.usersUrl).map(this.extractData)
        }
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}