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

export class Home extends React.Component<RouteComponentProps<{}> | undefined, State> {
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
            <h2>Simple and Secure blockchain-based intellectual property protection</h2>

            <p>The blockchain is probably the most secure record of information on in the world. It's designed to be immutable, and it's stored simultaneously on a network of computers around the world, making it virtually impossible to hack. Now with ConceptCrypt, you can take advantage of this incredible technology to verity the authenticity of files (any type? what are the limitations here?). From intentions to contracts, ConceptCrypt helps you protect your intellectual property by storing a record in the blockchain, where it can be verified by anyone with the original file, anytime, for free.</p>

            <a href="Home/Protect"> <h3> Get Started Here </h3> </a>

            <h2>How it works:</h2>

            <div className="row">
                <div className="col-md-3 " >
                    <div className="home_pannel home_pannel_1">
                        <br />
                        <img src="~/images/1.png" height="150" />
                        <h2>Log In or Create a Profile</h2>
                        <p>Your profile represents your identity on the blockchain, and is used to manage your intelectual property.</p>
                    </div>
                </div>
                <div className="col-md-3 " >
                    <div className="home_pannel home_pannel_1">
                    <br />
                    <img src="~/images/1.png" height="150" />
                    <h2>Choose a File</h2>
                    <p>It can be any file! A song you're written, a contract, or a document detailing the next world-changing idea. Anything you may want to authenticate in the future.</p>
                    </div>
                    </div>
                <div className="col-md-3 ">
                    <div className="home_pannel home_pannel_2">
                    <br />
                    <img src="~/images/2.png" height="150" />
                    <h2>Pay a Small Fee:</h2>
                    <p>It costs money to store something in the blockchain, so you'll need a one-time payment code. Thankfully, codes are cheap: only $.50 each! Don't have a code? You can easily purchase them here via PayPal.</p>
                    </div>
                </div>
                    <div className="col-md-3  ">
                    <div className="home_pannel home_pannel_3">
                    <br />
                    <img src="~/images/3.png" height="150"/>
                        <h2>Your File is Validated in the Blockchain!</h2>
                        <p>Punch in that code, click 'upload and validate', and we'll create a unique identifying key for your file and lock it away in the blockchain. You'll need to maintain that file for verification later, but verifications are free, and you can perform them as often as you like!</p>
                        </div>
                    </div>
                </div>   

        </span>
    }

  
}
