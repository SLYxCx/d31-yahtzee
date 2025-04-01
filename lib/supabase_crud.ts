import {supabase}  from "./supabase"

const TABLE_NAME = "user_details";

export async function getUser() {
    const {data, error} = await supabase.from(TABLE_NAME).select("*");
    if (error) {
        throw error;
    }
    return data;
}