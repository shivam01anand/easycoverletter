"use server"
import dbConn from "@/components/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export const submitContact = async (data) => {
    try {
        await dbConn();
        await Contact.create(data);
        return {
            message: "Message sent successfully!",
            status: "OK"
        }

    } catch (e) {
        console.log(e);
        return {
            message: "ERRORRRRR!",
            status: "NOT OK"
        }
    }
}
