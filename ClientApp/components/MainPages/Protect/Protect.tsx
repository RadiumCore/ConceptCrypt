import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { sha256 } from 'js-sha256';

import { UnixToDate } from '../../Global/UnixToDate'
import * as api from '../../Global/API'
import { iFileHash, blank_hash } from '../_Interfaces/iFileHash'
import { Modal } from 'react-bootstrap'
interface State {
    file_hash: string;
    file_title: string;
    status: string;
    mobile: boolean
    result: iFileHash;
    show_result: boolean;

}

export class Protect extends React.Component<RouteComponentProps<{}> | undefined, State> {
    constructor(props: RouteComponentProps<{}> | undefined) {
        super(props);
        this.state = {
            file_hash: "",
            file_title: "",
            status: "",
            mobile: false,
            result: blank_hash,
            show_result: false,
        };

       
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }
    resize() {
        this.setState({ mobile: window.innerWidth <= 760 })
    }
    
    handlefilechosen(fi: FileList | null) {
        this.setState({ status: "Hashing..." })
        let fileReader = new FileReader();
        fileReader.onload = () => { this.handleFileRead(fileReader) };
        fileReader.readAsArrayBuffer(fi![0])
    }
    
    handleFileRead(r: FileReader) {
        let content = r.result as string
        //let test =  sha256('The quick brown fox jumps over the lazy dog'); // d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592
        //let test2 = sha256(content) //"de31b927101c78389fa29361e6abee312a65b7a2baa28c09092774bc6ad71f6e"

        this.complete(sha256(content))
    }

    complete(hash: string) {
        api.GetFileHash(hash, (data: any) => { this.setState({ result: data, show_result: true }); })    
    }


    get_content() {
        if (!this.state.show_result) {
            return this.render_main()
        }
        if (this.state.result.hash == "") {
            return this.render_fail()
        }
        else { return this.render_sucess() }
    }

    render_fail() {
        return <Modal show={true} onHide={() => { }}>
            <Modal.Header closeButton>
                <Modal.Title> <h4>Unknown File! Procede with caution </h4></Modal.Title>

            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-default btn-danger" onClick={() => { this.setState({ show_result: false }) }}>Back</button>

            </Modal.Footer>
        </Modal>
    }
    render_sucess() {
        return <Modal show={true} onHide={() => { }}>
            <Modal.Header closeButton>
                <Modal.Title> <h4> Known File! </h4></Modal.Title>
                <h3>Ensure file is signed by an identity you trust </h3>

            </Modal.Header>
            <Modal.Body>
                <dl className="dl-horizontal">
                    <dt>Title :</dt> <dd>{this.state.result.title}</dd>
                    <dt>File Hash :</dt> <dd>{this.state.result.hash}</dd>
                    <dt>Signing Identity:</dt> <dd>{this.state.result.username}</dd>
                    <dt>Signing Address:</dt> <dd>{this.state.result.creator}</dd>
                    <dt>Signing Date:</dt> <dd><UnixToDate unix={this.state.result.unixtime} /></dd>
                    <dt>Signing Txid:</dt> <dd> {this.state.result.txid} </dd>
                </dl></Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-default btn-danger" onClick={() => { this.setState({ show_result: false }) }}>Back</button>

            </Modal.Footer>
        </Modal>
    }
   

    public render_main() {
        
        return <span>
            <div className="col-md-2 " />
            <div className="col-md-8 ">
                <div className="verify_card">
                    <div className="row">
                        <div className="col-md-3 " >                            <img className="card-img" src="/images/question.png" />
                        </div>
                        <div className="col-md-9 " >                            <h2>Choose your file:</h2>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" onChange={evt => this.handlefilechosen(evt.target.files)} />
                                <span>{this.state.status}</span>
                                <span>Click <a href="About" target="_blank"> here </a> for more information about recommended file types</span>
                                <h2>Enter a idea/project name (optional)</h2>
                                <input type="text" className="custom-file-input" id="customFile"  />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"  ></div>
                <div className="row"  ></div>

            </div>
            <div className="col-md-2 " />


            <div className="row"  >
                <img src="~/images/ConceptCryptLogoFullShadow.png" height="550"/> 
            </div>
            <div className="center_text">
                <h2>Verify a previously protected file</h2>
            </div>

           
            

          

        </span>
    }

    render() {
        let content = this.get_content()
        return content
    }
  
}
