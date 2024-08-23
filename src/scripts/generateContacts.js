import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await getAllContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    contacts.push(...newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

generateContacts(5);
