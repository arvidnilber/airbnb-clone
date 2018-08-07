import * as React from 'react'
import './HomeView.css';
import { Button } from '@material-ui/core/';

export class HomeView extends React.PureComponent {
    render() {
        return(
            <div className="container">
                <h1>Home</h1>
                <Button href="/login" variant="contained" type="primary" color="primary" className="buttonForm">
							Login now
				</Button>
                <Button href="/register" variant="contained" type="primary" color="primary" className="buttonForm">
							Register now
				</Button>
            </div>
        );
}}