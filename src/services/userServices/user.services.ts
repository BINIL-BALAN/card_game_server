export class UserServices {
    getUser(){
        return {
            name:"test name"
        }
    }

    save(data:{name:string}){
       return {message:"successfully saved",data}
    }

}
