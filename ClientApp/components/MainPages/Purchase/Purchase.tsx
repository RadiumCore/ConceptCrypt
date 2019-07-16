import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import t from '../../Language/Language'
import { User, blank_user } from '../_Interfaces/iUser'
import * as settings from '../../Global/settings'
import { TrueFalseIcon } from '../../Global/TrueFalseIcon'
import { UnixToDate } from '../../Global/UnixToDate'
import { CreateUserPopup } from '../Users/CreateUserPopup'
import { EditUserPopup } from '../Users/EditUserPopup'
import { Jumbotron } from 'react-bootstrap';
import * as statics from '../../Global/statics'
import * as api from '../../Global/API'
import * as iSigning from '../_Interfaces/iSigning'
interface State {
    user: User;
    load_complete: boolean;
    language: number;
    ShowCreateIdentity: boolean;
    show_edit: boolean;
    mobile: boolean;
    rads_balance: number;

}

export class Purchase extends React.Component<RouteComponentProps<{}> | undefined, State> {
    constructor(props: RouteComponentProps<{}> | undefined) {
        super(props);
        this.state = {
            user: blank_user,
            load_complete: false,
            language: 0,
            ShowCreateIdentity: false,
            show_edit: false,
            mobile: false,
            rads_balance: 0,
            
        };

       
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        this.setState({ mobile: window.innerWidth <= 760 })
    }
    

    

    show_edit() {
        this.setState({ show_edit: true })
    }

    close_edit() {
        this.setState({ show_edit: false })
    }

    Should_show(st: string): boolean {
        if (typeof (st) == 'string' && st.length > 0)
            return true;

        return false
    }
    ShowCreateIdentity() {
        this.setState({ ShowCreateIdentity: true })
    }
    CloseCreateUser() {
        this.setState({ ShowCreateIdentity: false })
    }

    

    

   

    public render() {
        
        return <span>
            <div className="row"  >
                <img src="~/images/ConceptCryptLogoFullShadow.png" height="550"/> 
            </div>
            <h2>Link to credit processor coming soon!</h2>

            

        </span>
    }

  
}
