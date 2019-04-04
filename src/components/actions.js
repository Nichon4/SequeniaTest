// Action Types

export const OPEN_CONTACT_DATA = 'OPEN_CONTACT_DATA';
export const CLOSE_CONTACT_DATA = 'CLOSE_CONTACT_DATA';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const SAVE_CONTACT= 'SAVE_CONTACT';

// Generators

export function openContactData(payload) {
  return { type: OPEN_CONTACT_DATA, payload: payload}
}

export function closeContactData() {
  return { type: CLOSE_CONTACT_DATA }
}

export function editContact() {
  return { type: EDIT_CONTACT }
}

export function loadContacts(payload) {
  return { type: LOAD_CONTACTS, payload: payload }
}

export function saveContact(payload) {
  return { type: SAVE_CONTACT, payload: payload }
}