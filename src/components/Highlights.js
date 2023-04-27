import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export class Highlights extends React.Component{
    render()
    {
        return(
            <Container>
            <div>
                
                <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/UE4-sGLPc7s" title="YouTube video" allowfullscreen></iframe>
</div>

<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/DrUnu-pr2l0" title="YouTube video" allowfullscreen></iframe>
</div>

<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/Uye1jfej1kQ" title="YouTube video" allowfullscreen></iframe>
</div>
            </div>
            </Container>
        );
    }
}