/**
*
* AddProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import AddProductStep1Container from '../../../containers/Version4/AddProductStep1Container';
import AddProductStep2Container from '../../../containers/Version4/AddProductStep2Container';

import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function AddProductComponent({ showList, addToList, goStep2, showStep2, goBackStep1, newProduct }) {
  return (
    <div className="content-block steps">

      <SidebarHeaderComponent title="Add TF allowed products to the deal" />

      <div className="scroll">
        <AddProductStep1Container
          showList={showList}
          addToList={addToList}
          showStep2={showStep2}
          goBackStep1={goBackStep1}
        />

        <AddProductStep2Container showStep2={showStep2} />
      </div>
      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!showList} onClick={goStep2}>
            Continue
          </Button>
        }

        {showStep2 &&
          <Button bsStyle="primary" onClick={newProduct}>
            Finish
          </Button>
        }

        <Link to="/">
          <Button bsStyle="default">
            Cancel
          </Button>
        </Link>
      </p>
    </div>
  );
}

AddProductComponent.propTypes = {
  addToList: PropTypes.func.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  goStep2: PropTypes.func.isRequired,
  newProduct: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddProductComponent;
