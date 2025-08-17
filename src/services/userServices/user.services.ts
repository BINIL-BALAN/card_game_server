export class UserServices {
  getUser(id:number) {
    try {
        const data:any = {
            1:{name:"test name 1"},
            2:{name:"test name 2"},
            3:{name:"test name 3"},
        }
      return data[id];
    } catch (e: any) {
      throw e
    }
  }

  save(data: { name: string }) {
    return { message: "successfully saved", data };
  }
}
