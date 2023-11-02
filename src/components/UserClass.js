import React, { Component } from 'react'

class UserClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
        userInfo: {
            name: 'Dummy',
            location: 'Default'
        }
       }
    }
   async componentDidMount(){
        const data = await fetch('https://api.github.com/users/amarpal2001')
        const json = await data.json()
        console.log('github user api', json)
        this.setState({
            userInfo: json,
        })
    }
    
    
  render() {
    // const {name, location} = this.props
    const {name, location, avatar_url} = this.state.userInfo
    return (
      <div className='user-card'>
        <img alt='github_avatar' style={{height: '150px'}} src='https://avatars.githubusercontent.com/u/64088871?v=4'/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: @amarpal0111</h4>
      </div>
    )
  }
}

export default UserClass
