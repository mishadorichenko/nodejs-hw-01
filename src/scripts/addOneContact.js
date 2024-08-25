import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    await updateContacts(contacts);
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
