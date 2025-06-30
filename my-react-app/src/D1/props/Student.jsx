//propTypes = a mechanism that ensures that the passed value is of the correct datatype.

//defaultProps = default props value if the parent object doesn't pass any object via props

import PropTypes from 'prop-types';


function Student(props){
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;