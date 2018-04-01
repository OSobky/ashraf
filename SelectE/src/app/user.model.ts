export class User {
    _id?:String;
   
    username?:String;
    email?:String;
    password?:String;
    firstName?:String;
    lastName?:String;
    schedule?:{
        date?:Date;
        time?:Date;
        sessionType?:String;


    };
    about?:String;
    phoneNumber?:number;
    experience?:{
        job?:String;
        yearsOfExp?:number;
    };
    favExperts?:{
        name?:String;
    };

    notes?:{
        note?:String;

    };
    rating?:number;
    type?:String;
}