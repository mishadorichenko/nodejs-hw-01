import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(contacts);
};

console.log(await getAllContacts());
