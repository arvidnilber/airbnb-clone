import * as React from 'react'
import { TextField, Button } from '@material-ui/core/';
import "./Register.css";
import { withFormik, FormikErrors, FormikProps } from 'formik';

interface FormValues {
	email: string;
	password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
		  render() {
			const {values, handleChange, handleBlur, handleSubmit} = this.props;
		return (
		  <div className="intro">
			<h1>Welcome to Airbnb</h1>
			<h2>First, lets create an account!</h2>  
			<form className="container" onSubmit={handleSubmit}>
						<TextField
						name="email"
						id="email"
						label="Email"
						margin="normal"
						className="textInput"
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						/>
						<TextField
						name="password"
						id="password"
						label="Password"
						margin="normal"
						type="password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						className="textInput"
						/>
					<Button type="primary" className="forgot" href="">Forgot password</Button>
					<Button value="submit" variant="contained" type="primary" color="secondary" className="buttonForm">
						Register
					</Button>
					<div className="login">
						Or <a href="">login now!</a>
					</div>
				</form>
			</div>
		);
	  }
	}

export const RegisterView = withFormik<Props, FormValues>({
	mapPropsToValues: () => ({ email: "", password:""}),
	handleSubmit: async (values, {props, setErrors}) => {
		const errors = await props.submit(values);
		if (errors) {
			setErrors(errors);
		}	
	}
})(C);