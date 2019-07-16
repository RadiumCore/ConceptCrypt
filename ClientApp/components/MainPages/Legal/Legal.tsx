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

}

export class Legal extends React.Component<RouteComponentProps<{}> | undefined, State> {
    constructor(props: RouteComponentProps<{}> | undefined) {
        super(props);
        this.state = {    };
    }   

    resize() {
        this.setState({ mobile: window.innerWidth <= 760 })
    }
    public render() {
        
        return <span>
            <h4 >Blockchain Software Legal Precedent - will my stored hash hold up in court?</h4>

            The short answer: yes.
            <p>
                Because blockchain technology is comparatively new, the body of legal precedent is small. However, it is unequivocally positive.
                </p>
            <p>
                The State of Delaware, the incorporation home to more than 83% of United States IPOs, recently introduced the Delaware Blockchain Initiative, a program initiating the use of blockchain technology as a state-supported corporate verification tool. In a high profile dispute involving a household name corporation, the Delaware Court of Chancery highly suggested using distributed ledger technology - another name for blockchain software - as a solution to erroneous share reporting to provide a clear record of the exact quantity and ownership of issued stocks. The same state has suggested and plans to introduce blockchain-based recording for financing statements for the same reason: public immutability.
                </p>
            <p>
                Other US states have also begun to suggest and utilize the benefits of blockchain records, including Florida, where digital evidence of driver’s licenses may soon begin to be entered on the blockchain, allowing drivers to prove irrefutably that they do in fact own a driver’s license even when they aren’t physically carrying it.
                </p>
            <p>
                Why is this important? The support of state governments reinforces the legality of blockchain resources, showing the legal systems’ understanding and trust in the unchangeable nature of hashing and storing files in the blockchain. In short, United States courts have begun to recognize the viability of blockchain technology and have thus far supported its use as legal verification.
                </p>
            <p></p>
            <h4>links:</h4>
            <a href="https://www.forbes.com/sites/groupthink/2017/09/20/why-the-delaware-blockchain-initiative-matters-to-all-dealmakers/#4f8e79b37550" target="_blank">Forbes: Delaware Blockchain Initiative</a>
            <p> </p>
            <a href="https://corpgov.law.harvard.edu/2017/03/16/delaware-blockchain-initiative-transforming-the-foundational-infrastructure-of-corporate-finance/" target="_blank">Harvard Law: Delaware Blockchain Initiative</a>
            <p></p>
            <a href="https://www.flsenate.gov/Session/Bill/2018/1357/BillText/Filed/PDF" target="_blank">Florida House Bill</a>
             <br/>
        </span>
    }

  
}
