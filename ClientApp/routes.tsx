import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/MainPages/Home/Home';
import { Login } from './components/MainPages/Login/Login'
import { MyProfile } from './components/MainPages/MyProfile/MyProfile'
import { Verify } from './components/MainPages/Verify/Verify'
import { Protect } from './components/MainPages/Protect/Protect'
import { Purchase } from './components/MainPages/Purchase/Purchase'
import { Legal } from './components/MainPages/Legal/Legal'
import { About } from './components/MainPages/About/About'

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/myprofile' component={MyProfile} />
    <Route path='/verify' component={Verify} />
    <Route path='/protect' component={Protect} />
    <Route path='/purchase' component={Purchase} />   
    <Route path='/legal' component={Legal} />
    <Route path='/about' component={About} />

</Layout>;