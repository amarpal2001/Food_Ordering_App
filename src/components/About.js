import React from 'react'
import UserClass from './UserClass'


class About extends React.Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <div>
      <h1>This is Food ordering App!!</h1>
      <UserClass name={'Amarpal'} location={'Delhi'}/>
    </div>
    )
  }
}


export default About
