import PropTypes from 'prop-types';
import { Input, Label } from './FilterStyled';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
