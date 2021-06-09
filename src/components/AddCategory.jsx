import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = (props) => {

  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!textValue){
      return;
    }
    props.handleSubmit(textValue);
    setTextValue('');
    console.log('Submit done!!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={textValue}
        onChange={(e)=>setTextValue(e.target.value)}
      />
    </form>
  )
}

AddCategory.propTypes = {
  'textValue': PropTypes.string,
  'handleSubmit': PropTypes.func.isRequired
}

export default AddCategory
