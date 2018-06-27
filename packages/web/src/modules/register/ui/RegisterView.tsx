import * as React from 'react';
import { TextField, Button } from '@material-ui/core/';
import "./Register.css";
import { Form } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validUserSchema } from '@abb/common';
const FormItem = Form.Item;

interface FormValues {
	email: string;
	password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
		render() {
		const {values, handleChange, handleBlur, handleSubmit, touched, errors} = this.props;
		console.log(errors)	
			return (
				<div className="body">
				<div className="body-text">
					<h1>Welcome to Airbnb</h1>	
					<h2>First, lets create an account!</h2>  
				</div>
				<form className="container" onSubmit={handleSubmit}>
						<FormItem help={touched.email && errors.email ? errors.email : ""}
							validateStatus={touched.email &&  errors.email ? "error" : undefined}
						>
							<TextField
							name="email"
							id="email"
							label="Email"
							className="textInput"
							margin="normal"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							/>
						</FormItem>
						<FormItem help={touched.password && errors.password ? errors.password : ""}
							validateStatus={touched.password &&  errors.password ? "error" : undefined}
						>
							<TextField
							name="password"
							id="password"
							label="Password"
							type="password"
							className="textInput"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							/>
						</FormItem>
						<Button className="forgot" href="">Forgot password</Button>
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
	validationSchema: validUserSchema,
	validateOnChange:false,
	validateOnBlur: false,
	mapPropsToValues: () => ({ email: "", password:""}),
	handleSubmit: async (values, {props, setErrors}) => {
		const errors = await props.submit(values);
		if (errors) {
			setErrors(errors);
		}	
	}
})(C);