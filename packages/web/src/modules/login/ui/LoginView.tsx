import * as React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import '../../shared/fonts/fonts.css';
import { withFormik, FormikProps, Field } from 'formik';
import {InputField} from '../../shared/InputField';
import { loginSchema } from '@abb/common';
import { Link } from 'react-router-dom';
import { NormalizedErrorMap } from '@abb/controller'

interface FormValues {
	email: string;
	password: string;
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
                <img src={require('../../shared/images/favicon.png')} className="logo"/>
					<h1>Welcome to Airbnb</h1>	
					<h2>Lets login!</h2>  
				</div>
				<form className="container" onSubmit={handleSubmit}>
						<Field 
							name="email" 
							label="Email" 
							className="textInput" 
							margin="normal" 
							component={InputField} 
						/>
						<Field 
							name="password" 
							label="Password" 
							className="textInput" 
							margin="normal" 
							type="password"
							component={InputField} 
						/>
						<Link to="/forgot"><Button className="forgot" href="">Forgot password</Button></Link>
						<Button value="submit" variant="contained" type="primary" color="primary" className="buttonForm">
							Login
						</Button>
						<div className="login">
							Or <Link to="/register"> register now!</Link>
						</div>
					</form>
				</div>
			);
	  }
	}
	export const LoginView = withFormik<Props, FormValues>({
		validationSchema: loginSchema,
		validateOnChange: false,
		validateOnBlur: false,
		mapPropsToValues: () => ({ email: "", password: "" }),
		handleSubmit: async (values, { props, setErrors }) => {
			const errors = await props.submit(values);
			if (errors) {
				setErrors(errors);
			} else {
				props.onFinish();
			}
		}
	})(C);
	