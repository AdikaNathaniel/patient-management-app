import { Client, Account } from 'appwrite';


export const client = new Client();


client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66d266c50017404b3f6e')


export const account = new Account(client);

export { ID } from 'appwrite';
