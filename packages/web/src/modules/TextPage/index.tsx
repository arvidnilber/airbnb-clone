import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import './TextPage.css';


export class TextPage extends React.PureComponent<RouteComponentProps<{}>> {
    render() {
        console.log(this.props);
        const { location: { state }} = this.props;
        return(
            <div className="container">
            <div className="body-text">
                <Link to="/"><img src={require('../shared/images/favicon.png')} className="logo"/></Link>
				</div>
              <h2>{state && state.message ? state.message : 'Error'}</h2>
            </div>
        );
    }
}


