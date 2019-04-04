import {
  OPEN_CONTACT_DATA, CLOSE_CONTACT_DATA, EDIT_CONTACT, LOAD_CONTACTS, SAVE_CONTACT
} from "./actions"
import {jsonStringify} from "../data/dataTransfer";


const initialState = {
  contacts: {
    isLoaded: false,
    data: {},
  },
  contactData: {},
  contactDataShow: false,
  contactReadonly: true,
};

function contactData(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case OPEN_CONTACT_DATA:
      return {
        ...state,
        contactData: action.payload,
        contactDataShow: true,
        contactReadonly: true,
      };

    case CLOSE_CONTACT_DATA:
      return {
        ...state,
        contactDataShow: false
        };

    case EDIT_CONTACT:
      return {
        ...state,
        contactReadonly: false
      };

    case SAVE_CONTACT:
      let newState = {
        ...state,
        contacts: {
          ...state.contacts,
          data: {
            ...state.contacts.data,
            [action.payload.id]: action.payload
          }
        },
        contactReadonly: true,
      };
      localStorage.setItem("contacts", jsonStringify(newState.contacts.data));
      return newState;

    default:
      return state
  }
}

export default contactData
