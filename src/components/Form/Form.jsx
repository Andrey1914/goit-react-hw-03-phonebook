import React, { Component } from 'react';
import { Input, Label } from './FormStyled';
import { Button } from 'components/Button/Button';
import { IoMdPersonAdd } from 'react-icons/io';
import { Box } from 'components/Box';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRiseContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      <Box
        as="form"
        onSubmit={this.handleSubmit}
        display="flex"
        flexDirection="column"
      >
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">
          Add contact
          <IoMdPersonAdd size={20} />
        </Button>
      </Box>
      // </form>
    );
  }
}
