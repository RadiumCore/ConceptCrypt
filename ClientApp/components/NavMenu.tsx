import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { InfoPopup } from './Global/InfoPopup'
import * as settings from './Global/settings'
const image = require('../../Assets/ZCLogo_R3.png');
const icon48 = require('../../Assets/radium-48.png');
interface NavMenuState {
    user: string;
    webonly: boolean
    mobile: boolean
}

interface Props {
}

export class NavMenu extends React.Component<Props, NavMenuState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            user: "",
            webonly: true,
            mobile: false,
        };

        this.setState({ user: settings.current_identity.username })
    }

    componentWillUnmount() {
        settings.clear_current_identity();
    }
    componentDidMount() {
        this.resize();
        window.addEventListener("resize", this.resize.bind(this))
    }
    resize() {
        this.setState({ mobile: window.innerWidth <= 760 })
    }

    log_out() {
        settings.clear_current_identity();
        this.setState({ user: this.state.user });
    }

    get_button_text() {
        if (settings.current_identity.address == "") {
            return "Login Required"
        }
        if (settings.current_identity.address != "") {
            if (settings.current_identity.username == "") {
                return "Unregisterd User"
            }
        }
        return settings.current_identity.username
    }

    public render() {
        return <nav className='navbar navbar-inverse'>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                    <NavLink to={'/'} className=' navbar-brand' activeClassName='active'>
                        <span className='glyphicon glyphicon-send'></span> Home
                        </NavLink>
                    
                    {settings.current_identity.address == "" ?
                        <NavLink to={'/login'} className=' navbar-brand' activeClassName='active'>
                        <span className='glyphicon glyphicon-send'></span> Login
                            </NavLink>
                        : 
                        <NavLink to={'/protect'} className=' navbar-brand' activeClassName='active'>
                            <span className='glyphicon glyphicon-send'></span> Protect
                            </NavLink>
                        
                        }
                    
                       
                    
                    
                        <NavLink to={'/verify'} className='link navbar-brand' activeClassName='active'>
                            <span className='glyphicon glyphicon-send'></span> Verify
                            </NavLink>
                    
                    <NavLink to={'/purchase'} className='link navbar-brand' activeClassName='active'>
                            <span className='glyphicon glyphicon-send'></span> Purchase
                            </NavLink>
                    
                        <NavLink to={'/legal'} className='link navbar-brand' activeClassName='active'>
                            <span className='glyphicon glyphicon-send'></span> Legal
                            </NavLink>
                    
                        <NavLink to={'/about'} className='link navbar-brand' activeClassName='active'>
                            <span className='glyphicon glyphicon-send'></span> About
                            </NavLink>
                    
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">

                    </ul>
                </div>
            </div>

        </nav>;



    
    }
}