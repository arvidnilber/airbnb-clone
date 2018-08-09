import * as React from 'react';
import './NotFound.css';
import '../../shared/fonts/fonts.css';

import { Button } from '@material-ui/core';

export class NotFoundView extends React.PureComponent {
    render() {
        return(
        <div className="container">
            <h1>Ooops, could not find this site 😔</h1>
            <Button href="/" variant="contained" type="primary" color="primary" className="buttonForm">
							Go back 😔😔
			</Button>
        </div>
        );
}}