import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Formik } from 'formik';
import { yup } from 'yup';

// const schema = yup.object({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   terms: yup.bool().required(),
// });

const CurrentWorkout = (props) => {
  return (
    <Formik
      // validationSchema={schema}
      onSubmit={ console.log }
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div className="current-set-box">
          <Card>
            <Card.Header>{ props.workoutProperties.name }</Card.Header>
            <Card.Body>
              <Form onSubmit={ handleSubmit }>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>Sets</Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="sets"
                      value={ values.sets }
                      onChange={ handleChange } >
                      <option>6</option>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Reps</Form.Label>
                    <Form.Control as="select">
                      <option>25</option>
                      <option>20</option>
                      <option>15</option>
                      <option>10</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="text" placeholder="in lbs" defaultValue={100}/>
                  </Form.Group>
                </Form.Row>
                <Button
                  block
                  //onClick={ props.workoutCompleted }
                  type="submit"
                  >
                  Completed
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
    )}
    </Formik>
  );
}
//   return (
//     <div className="current-set-box">
//       <Card>
//         <Card.Header>{ props.workoutProperties.name }</Card.Header>
//         <Card.Body>
//           <Form>
//             <Form.Row>
//               <Form.Group>
//                 <Form.Label>Sets</Form.Label>
//                 <Form.Control as="select">
//                   <option>6</option>
//                   <option>5</option>
//                   <option>4</option>
//                   <option>3</option>
//                   <option>2</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Reps</Form.Label>
//                 <Form.Control as="select">
//                   <option>25</option>
//                   <option>20</option>
//                   <option>15</option>
//                   <option>10</option>
//                   <option>5</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group>
//                 <Form.Label>Weight</Form.Label>
//                 <Form.Control type="text" placeholder="in lbs" defaultValue={100}/>
//               </Form.Group>
//             </Form.Row>
//             <Button
//               block
//               onClick={ props.workoutCompleted } 
//               // type="submit"
//               >
//               Completed
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

CurrentWorkout.propTypes = {
};

export default CurrentWorkout;