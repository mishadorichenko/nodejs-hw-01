import updateContacts from './updateContacts.js';

export const removeAllContacts = async () => {
  try {
    await updateContacts([]);
  } catch (err) {
    console.log(err);
  }
};

removeAllContacts();
