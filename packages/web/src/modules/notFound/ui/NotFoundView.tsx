import * as React from 'react';
import './NotFound.css';

export class NotFoundView extends React.PureComponent {
    render() {
        return(
        <div className="container">
            <h1>Ooops, could not find this site</h1>
            <a href="/">Go back</a>
        </div>
        );
}}