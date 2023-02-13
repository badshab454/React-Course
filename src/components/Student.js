
import Classes from './Classes';

import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <Classes name={props.name} />
    </>
  )
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number
}

export default Student