import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addHuman } from './actions';
import AddFormComponent from './AddFormComponent';
import { createInitObjForm } from 'utils';
import { displayedProps } from 'constants.js';
import './AddForm.scss';

// Контейнерный компонент формы добавления человека
function AddFrom() {
  const isFormOpen = useSelector((state) => state.isFormOpen);
  const dispatch = useDispatch();

  const handleSubmit = (newHuman) => {
    dispatch(addHuman(newHuman));
  };

  return (
    isFormOpen && (
      <AddFormComponent initObj={createInitObjForm(displayedProps)} handleSubmit={handleSubmit} />
    )
  );
}

export default AddFrom;
