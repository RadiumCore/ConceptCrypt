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

export class About extends React.Component<RouteComponentProps<{}> | undefined, State> {
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
            <h4>Why protect a idea or file with ConceptCrypt?</h4>
            <p>
                Imagine this: you're a professional photographer, and you'd like to post a photo on social media, but you're also concerned that someone could steal your work and take credit for it. What if there where a simple way to verify that you had that picture first? With ConceptCrypt, you use the functionality of the blockchain to create a secure, timestamped record of file authorship.
                <br />
                The functionality of file verification isn't limited to photographs; videos, audio and text files, software and any other creation or concept contained in a digital file can be recorded and verified with ConceptCrypt (see below for more information on what filetypes we recommend).
                </p>
                <hr />


            <h4>How does it work?</h4>
            <p>At ConceptCrypt, our goal is to make the file verification functionality of the blockchain widely accessible. To verify a file, we first extract its unique identifying code, called a hash. The hash we use is called a SHA-256 checksum, and it is extracted from your file in your browser, so your file never even leaves your computer.
                <br />
                <br />
                Once we have your file, you've entered a valid payment code, and clicked 'Upload and submit', your file's hash is on its way to being stored in the blockchain. This may take a few minutes, but once it is there, anyone with your original, unaltered file can verify it at any time using the ConceptCrypt's 'Verify' page.
                <br />
                <br />
                The process for verification is very similar to the process for protection; once you select a file, your browser extracts its hash, and quickly checks the blockchain for a matching record. And verifications are always free!
                </p>
            <hr />
            <h4>File types</h4>
            <p>
                Not all files are created equal; some are more susceptible to metadata alteration than others. Any change to a file's data will change its hash, so we recommend you only protect the following file types: <br /> .PDF <br /> .TXT<br /> .JPG<br /> .PNG<br /> .MOV<br /> .AVI<br /> .MP3<br /> Any archive format, such as .zip, .tar, .gz, and .7z
                </p>
            <p>Microsoft Office documents, such as .doc, .docx, .ppt, .excel are NOT recommended, as many word processors add metadata when opening a file. If you must use one of these filetypes, compress it to one of the archive formats above (and remember not to open the original; if you want to view the contents of your verified file, simply copy the compressed version and open the copy-this way, you can still verify the original).
                <br />
                Not sure if your file type will work? <a href="mailto:support@smartchainsoftwaresolutions.com">Contact us</a>and we'll test it for you.
                </p>
                <hr />
                <h4>FAQ</h4>
                <p>Q: Can anyone read my file from the blockchain?
                    <br />A: No. Your file itself is not stored in the blockchain, only its unique identifying key, or hash is recorded.
                    </p>
                <p>Q: Why do I need to provide a ‘unique identifier’?
                    <br />A: This identifies you as the author of the file; consider it a digital signature of sorts.
                    </p>
                <p>Q: Why is there a fee to record a file?
                    <br />A: There is an inherent fee associated with storing information in the blockchain. Ultimately this is paid in the cryptocurrency Radium, but with ConceptCrypt, we take care of those technicalities for you.
                    </p>
                <p>Q: Are verifications free?
                    <br />A: Yes!</p>
                <p>Q: What file types are accepted?
                    <br />
                A: Technically, any type of file (up to 250MB) can be hashed and recorded. However, some files alter metadata when they are copied, compressed, or opened. Once this happens, the file's hash changes, so it will no longer verify. See the section on file types above for more info.
                        </p>
                    <hr />
                    <h4 id="TandC">Terms and conditions</h4>
                    <p>
                        Last updated: January 27, 2018
                        <br/>
                        <br />
                        Please read these Terms and Conditions ("Terms", "Terms and
                        Conditions") carefully before using the conceptcrypt.com website (the
                        "Service") operated by SmartChain Software Solutions, LLC ("us", "we", or "our").
                        <br/>
                        <br />
                        Your access to and use of the Service is conditioned upon your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who wish to access or use the Service.
                        <br />
                <br />
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you do not have
                permission to access the Service.
                </p>
            <h5>Purchases</h5>
            <p>
                If you wish to purchase any product or service made available through
                the Service ("Purchase"), you may be asked to supply certain
                information relevant to your Purchase including, without limitation, 
                your credit card number, the expiration date of your credit card, your
                billing address, and your shipping information.
                <br />
                <br />
                You represent and warrant that: (i) you have the legal right to use any
                credit card(s) or other payment method(s) in connection with any
                Purchase; and that (ii) the information you supply to us is true, correct
                and complete.
                <br/>
                    <br />
                    The service may employ the use of third party services for the
                    purpose of facilitating payment and the completion of Purchases. By
                    submitting your information, you grant us the right to provide the
                    information to these third parties subject to our Privacy Policy.
                    <br/>
                <br />
                We reserve the right to refuse or cancel your order at any time for
                reasons including but not limited to: product or service availability,
                errors in the description or price of the product or service, error in your
                order or other reasons.
                <br />
                <br />
                We reserve the right to refuse or cancel your order if fraud or an
                unauthorized or illegal transaction is suspected.
                </p>
            <h5>Availability, Errors and Inaccuracies</h5>
            <p>
                We are constantly updating product and service offerings on the
                Service. We may experience delays in updating information on the
                Service and in our advertising on other web sites. The information
                found on the Service may contain errors or inaccuracies and may not
                be complete or current. Products or services may be mispriced, 
                described inaccurately, or unavailable on the Service and we cannot
                guarantee the accuracy or completeness of any information found on
                the Service.
                <br />
                <br />
                We therefore reserve the right to change or update information and to
                correct errors, inaccuracies, or omissions at any time without prior
                notice.
                </p>
            <h5>Intellectual Property</h5>
            <p>
                The Service and its original content, features and functionality are and
                will remain the exclusive property of SmartChain Software Solutions, LLC 
                and its licensors. The Service is protected by copyright,
                trademark, and other laws of both the United States and foreign
                countries. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written
                consent of SmartChain Software Solutions, LLC.
                </p>
            <h5>Links To Other Web Sites</h5>
            <p>
                Our Service may contain links to third party web sites or services that
                are not owned or controlled by SmartChain Software Solutions, LLC
                SmartChain Software Solutions, LLC has no control over, and
                assumes no responsibility for the content, privacy policies, or
                practices of any third party web sites or services. We do not warrant
                the offerings of any of these entities/individuals or their websites.
                <br />
                <br />
                You acknowledge and agree that SmartChain Software Solutions, LLC 
                shall not be responsible or liable, directly or indirectly, for any
                damage or loss caused or alleged to be caused by or in connection
                with use of or reliance on any such content, goods or services
                available on or through any such third party web sites or services.
                <br />
                <br />
                We strongly advise you to read the terms and conditions and privacy
                policies of any third party web sites or services that you visit.
                </p>
            <h5>Termination</h5>
            <p>
                We may terminate or suspend your access to the Service
                immediately, without prior notice or liability, under our 
                sole discretion, for any reason whatsoever and without limitation, 
                including but not limited to a breach of the Terms.
                <br />
                <br />
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without limitation,
                ownership provisions, warranty disclaimers, indemnity and limitations
                of liability.
                </p>
            <h5>Indemnification</h5>
            <p>
                You agree to defend, indemnify and hold harmless SmartChain
                Software Solutions, LLC and its licensee and licensors, and their
                employees, contractors, agents, officers and directors, from and
                against any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to attorney's
                fees), resulting from or arising out of a) your use and access of the
                Service, or b) a breach of these Terms.
                </p>
            <h5>Limitation Of Liability</h5>
            <p>
                In no event shall SmartChain Software Solutions, LLC, nor its
                directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill,
                or other intangible losses, resulting from (i) your access to or use of or
                inability to access or use the Service; (ii) any conduct or
                content of any third party on the Service; (iii) any content obtained
                from the Service; and (iv) unauthorized access, use or alteration of
                your transmissions or content, whether based on warranty, contract,
                tort (including negligence) or any other legal theory, whether or not we
                have been informed of the possibility of such damage, and even if a
                remedy set forth herein is found to have failed of its essential purpose.
                </p>
            <h5>Disclaimer</h5>
            <p>
                Your use of the Service is at your sole risk. The Service is provided
                on an "AS IS" and "AS AVAILABLE" basis. The Service is provided
                without warranties of any kind, whether express or implied, including, 
                but not limited to, implied warranties of merchantability, fitness for a
                particular purpose, non-infringement or course of performance.
                <br />
                <br />
                SmartChain Software Solutions, LLC its subsidiaries, affiliates, and its
                licensors do not warrant that a) the Service will function uninterrupted,
                secure or available at any particular time or location; b) any errors or
                defects will be corrected; c) the Service is free of viruses or other
                harmful components; or d) the results of using the Service will meet
                your requirements.
                </p>
            <h5>Exclusions</h5>
            <p>
                Some jurisdictions do not allow the exclusion of certain warranties or
                the exclusion or limitation of liability for consequential or incidental
                damages, so the limitations above may not apply to you.
                </p>
            <h5>Governing Law</h5>
            <p>
                These Terms shall be governed and construed in accordance with the
                laws of Pennsylvania, United States, without regard to its conflict of
                law provisions.
                <br />
                <br />
                Our failure to enforce any right or provision of these Terms will not be
                considered a waiver of those rights. If any provision of these Terms is
                held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect. These Terms
                constitute the entire agreement between us regarding our Service, and 
                supersede and replace any prior agreements we might have had
                between us regarding the Service.
                </p>
            <h5>Changes</h5>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these
                Terms at any time. If a revision is material we will provide at least 15
                days notice prior to any new terms taking effect. What constitutes a
                material change will be determined at our sole discretion.
                <br />
                <br />
                By continuing to access or use our Service after any revisions
                become effective, you agree to be bound by the revised terms. If you
                do not agree to the new terms, you are no longer authorized to use
                the Service.
                </p>
            <h5>Contact Us</h5>
            <p>
                If you have any questions about these Terms, please contact us.                </p>
        </span>
    }

  
}
