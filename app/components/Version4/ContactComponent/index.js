/**
*
* ContactComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';

function ContactComponent({ title }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <NewDealForm />
    </div>
  );
}

ContactComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactComponent;
