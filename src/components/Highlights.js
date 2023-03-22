import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export class Highlights extends React.Component{
    render()
    {
        return(
            <Container>
            <div>
                <h1>Hello World</h1>
                <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/FP9MCTFVutw" title="YouTube video" allowfullscreen></iframe>
</div>
            </div>
            </Container>
        );
    }
}





