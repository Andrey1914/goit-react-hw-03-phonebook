import PropTypes from 'prop-types';
import { List, Element, Text } from './ContactsStyled';
import { Button } from 'components/Button/Button';
import { MdDelete } from 'react-icons/md';

export default function Contacts({ contacts, onDeleteContacts }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Element key={id}>
            <Text>
              {name}&#32;:&#32;{number}
            </Text>
            <Button type="button" onClick={() => onDeleteContacts(id)}>
              Delete
              <MdDelete size={20} />
            </Button>
          </Element>
        );
      })}
    </List>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
