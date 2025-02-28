import { Injectable } from "@nestjs/common";



@Injectable()
export class UserService{

     users: {id:number, name:string, age: number, gender:string, isMarried:boolean}[]=[
        {id:1, name:'john', age:28, gender:'male', isMarried:false},
        {id:2,name:'Antonela', age:28, gender:'female', isMarried:true},
        {id:3, name:'john', age:28, gender:'male', isMarried:true},

    ]


getAllUsers()  {
    return this.users;
}


getUserById(id:number) {
    return this.users.find(x=>x.id===id);
}

createUser(user:{id:number, name:string, age: number, gender:string, isMarried:boolean}) {
        this.users.push(user);
    }
}