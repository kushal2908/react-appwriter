import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("670de579002a3f81fd76"); // Replace with your project ID

export const account = new Account(client);
export const database = new Databases(client);
