import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar1 from './Navbar';

export class Highlights extends React.Component {
    render() {
        return (
            <>
                <Navbar1 />
                <Container>
                    <div>
                        <div className="allowFullScreen">
                            <iframe src="https://www.youtube.com/embed/UE4-sGLPc7s" title="YouTube video" allowFullScreen></iframe>
                        </div>
                        <br />
                        <div className="allowFullScreen">
                            <iframe src="https://www.youtube.com/embed/DrUnu-pr2l0" title="YouTube video" allowFullScreen></iframe>
                        </div>
                        <br />
                        <div className="allowFullScreen">
                            <iframe src="https://www.youtube.com/embed/Uye1jfej1kQ" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}
