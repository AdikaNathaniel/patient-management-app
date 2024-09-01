'use server';

import { parseStringify } from "../utils";
import { users } from "@/lib/appwrite.config";
import { ID, Query } from "node-appwrite";

export const createUser = async( user: CreateUserParams) => {
      try{
            const newUser = await users.create(
                ID.unique(), 
                user.email,
                user.phone,
                undefined,
                user.name);
    console.log({newUser});

    return parseStringify(newUser);      
} catch(error:any){
        //Checking existing user
          if(error && error?.code === 409){
              const existingUser = await users.list(
                [
                     Query.equal("email",[user.email]),
                ]);
                  return existingUser?.users[0];
          }else{
            console.error("An error occurred while creating a new user:", error); 
          }
     
      }
};


export const getUser = async (userId : string) => {
    try{
           const user = await users.get(userId);

           return parseStringify(user);
    }catch(error){
      console.log(error)
    }
}