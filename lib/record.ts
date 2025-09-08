import { db } from "./db";
import { Record } from "@/types/Record";

export async function fecthUserRecord(userId: string){
    return db.record.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
        take: 10,
    })
}