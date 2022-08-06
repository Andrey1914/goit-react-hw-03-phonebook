import PropTypes from 'prop-types';
import { SectionPhonebook, Title } from './SectionStyled';

export default function Section({ children, title }) {
  return (
    <SectionPhonebook>
      <Title>{title}</Title>
      {children}
    </SectionPhonebook>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
