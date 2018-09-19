import React, {Component} from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'
import Login from './security/Login'
import Register from './security/Register'
import Main from './Main'
import DisplayVideo from './DisplayVideo'
import Videos from './Videos'
import About from './About'
import Success from './Success'
import Profile from './Profile'



class Content extends Component {

    render() {
        return (
           <div>
            <RouterSwitch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/video' component={DisplayVideo} />
                <Route exact path='/about' component={About} />
                <Route exact path='/success' component={Success} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/videos' component={Videos} />
            </RouterSwitch>
           </div>
        )
    } 
}

export default Content 