import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers } from "@angular/http";
import { Subscriber } from "rxjs/Subscriber";
import { Observable } from "rxjs/Observable";
import { Expert } from './expert.model'
@Injectable()
export class EService{

    expert : Expert;
    token : string;
    constructor(private http:Http){
        
    }
   

    postExpert(exp){
        console.log(2);
        console.log(exp);
         return this.http.post('http://localhost:3000/api/request/AddingExpert/5ac016dca85444b4dfe09747',{name:exp.username})
         .subscribe((res:Response)=>{
             
         },(err)=>{
             console.log(err);
         });
    } 
    
   

}
