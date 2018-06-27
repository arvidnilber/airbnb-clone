import * as React from 'react'
import './HomeView.css';
export class HomeView extends React.PureComponent {
    render() {
        return(
            <div className="container">
                <h1>Home</h1>
                <a href="/register">Register</a>
            </div>
        );
}}