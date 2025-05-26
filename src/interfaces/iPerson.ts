
export interface Iperson{
    firstName:string;
    secondName:string;
    surname:string;
    dob:Date;
    age:number;
}

//inherintence 
export interface Istudent extends Iperson{
    grade:any

}