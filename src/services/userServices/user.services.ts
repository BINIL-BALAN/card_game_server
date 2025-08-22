import { pool } from "@config/database.config";
import HttpError from "@utils/HttpError/HttpError";
import { QueryResult } from "pg";
export class UserServices {
async getUser(id:number) {
    try {
        const data:any = {
            1:{name:"test name 1"},
            2:{name:"test name 2"},
            3:{name:"test name 3"},
        }
      const alldata:QueryResult = await pool.query(`select * from card_game.users where id=$1`,[id])
      if(alldata.rowCount){
        return alldata.rows[0];
      }else{
         const e = new HttpError("User not found !",404)
         e.statusCode = 404
         throw e
      }
    } catch (e: any) {
      throw e
    }
  }

  save(data: { name: string }) {
    return { message: "successfully saved", data };
  }
}
