import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import { List, Item, Button } from "./ContactList.styled";

//toolkit - 2
export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

//Redux - 1
// import { connect } from 'react-redux';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });



// import PropTypes from "prop-types";
// import { List, Item, Button } from "./ContactList.styled";

// export default function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <List>
//       {contacts.map(({ name, number, id }) => (
//         <Item key={id}>
//           {name}: {number}
//           <Button type="button" onClick={() => onDeleteContact(id)}>
//             Delete
//           </Button>
//         </Item>
//       ))}
//     </List>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
