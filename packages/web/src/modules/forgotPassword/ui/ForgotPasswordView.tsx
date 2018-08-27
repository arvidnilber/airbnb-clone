import * as React from 'react';
import { Button } from '@material-ui/core';
import "./ForgotPassword.css";
import '../../shared/fonts/fonts.css';
import { withFormik, FormikProps, Field } from 'formik';
import {InputField} from '../../shared/InputField';
import { NormalizedErrorMap } from '@abb/controller'
import { Link } from 'react-router-dom';

interface FormValues {
	email: string;
}

interface Props {
	onFinish: () => void;
	submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
		render() {
		const { handleSubmit} = this.props;
			return (
				<div className="body">
				<div className="body-text">
                <Link to="/"><img src={require('../../shared/images/favicon.png')} className="logo"/></Link>
					<h1>Reset your password</h1>	
					<h2>Type your email here to reset your password</h2>  
				</div>
				<form className="container" onSubmit={handleSubmit}>
						<Field 
							name="email" 
							label="Email" 
							className="textInput" 
							margin="normal" 
							component={InputField} 
						/>
						<Button value="submit" variant="contained" type="primary" color="primary" className="buttonForm">
							Reset Password
						</Button>
					</form>
				</div>
			);
	  }
	}
	export const ForgotPasswordView = withFormik<Props, FormValues>({
		mapPropsToValues: () => ({ email: ""}),
		handleSubmit: async (values, { props, setErrors }) => {
			const errors = await props.submit(values);
			if (errors) {
				setErrors(errors);
			} else {
				props.onFinish();
			}
		}
	})(C);
	