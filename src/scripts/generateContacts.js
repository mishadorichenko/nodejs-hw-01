import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await getAllContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    contacts.push(...newContacts);
    await updateContacts(contacts);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
