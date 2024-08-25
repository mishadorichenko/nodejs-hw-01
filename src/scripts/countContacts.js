import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    return contacts.length;
  } catch (err) {
    console.log(err);
  }
};

console.log(await countContacts());
