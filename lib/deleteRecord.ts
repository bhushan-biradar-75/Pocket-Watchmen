import { db } from "./db"

export async function deleteRecords(ID : string){
     return db.record.delete({
            where: {
                id: ID,
            }
        })
}