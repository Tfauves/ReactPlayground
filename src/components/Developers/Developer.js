import React from 'react';
import BorderCard from '../common/BorderCard';


const Developer = (props) => {

  const {name, cohort, id} = props.developer


  // const onSelect = () => {
  //   props.onSelect(id)
  // }
  // return (
  //   <BorderCard onClick={onSelect}>
  //     <h2>{name}</h2>
  //     <p>{cohort}</p>
  //   </BorderCard>
  // )

  return (
    //inline execution- the arrow function allows the onclick to run the onSelect function
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{name}</h2>
      <p>{cohort}</p>
    </BorderCard>
  )
}

export default Developer;