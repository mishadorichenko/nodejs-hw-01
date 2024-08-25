import { getAllContacts } from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    contacts.pop();
    await updateContacts(contacts);
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
