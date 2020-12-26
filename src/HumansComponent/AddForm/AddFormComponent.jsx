import React from 'react';
import { Formik, Form, Field } from 'formik';

import { displayedProps, buttonsText, inputPlaceholders } from 'constants.js';
import { Input, Button } from 'shared';
import { validation } from './validators';
import { WhithError } from 'hoc';

// Презентационный компонент формы добавления чевека
// initObj - начальный значение полей формы
function AddFormComponent({ initObj, handleSubmit }) {
  const FromInput = WhithError(Input);

  return (
    <Formik
      initialValues={initObj}
      validateOnChange={false}
      validateOnBlur={true}
      validationSchema={validation}
      onSubmit={(values) => {
        handleSubmit({ ...values });
      }}>
      {({ submitForm, errors, touched }) => (
        <Form className="add-form">
          {displayedProps.map((item, index) => (
            <Field
              key={`${item}_${index}`}
              name={item}
              as={FromInput}
              placeholder={inputPlaceholders[item]}
              errorMessage={errors[item]}
              isToched={touched[item]}
            />
          ))}
          <Button onClick={submitForm} text={buttonsText.addForm} />
        </Form>
      )}
    </Formik>
  );
}

export default AddFormComponent;
