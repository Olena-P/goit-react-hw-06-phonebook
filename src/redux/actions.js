import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

//Toolkit - 2
export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/delete");
export const changeFilter = createAction("contacts/changeFilter");

// Redux - 1
// import * as actionTypes from './types';

// export const addContact = (name, number) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id: v4.generate(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });
