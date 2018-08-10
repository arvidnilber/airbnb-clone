import * as React from 'react';
import { Button } from '@material-ui/core';
import "./ChangePassword.css";
import '../../shared/fonts/fonts.css';
import { withFormik, FormikProps, Field } from 'formik';
import {InputField} from '../../shared/InputField';
import { NormalizedErrorMap } from '@abb/controller'
import { Link } from 'react-router-dom';
import { changePasswordSchema } from '@abb/common';

interface FormValues {
	newPassword: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
		render() {
		const { handleSubmit} = this.props;
			return (
				<div className="body">
				<div className="body-text">
                <Link to="/"><img src={require('../../shared/images/favicon.png')} className="logo"/></Link>
					<h1>Create a new password</h1>  
				</div>
				<form className="container" onSubmit={handleSubmit}>
						<Field 
							name="newPassword" 
							label="New Password" 
							className="textInput" 
							margin="normal" 
							type="password"
							component={InputField} 
						/>
						<Button value="submit" variant="contained" type="primary" color="primary" className="buttonForm">
							Change Password
						</Button>
					</form>
				</div>
			);
	  }
	}
	export const ChangePasswordView = withFormik<Props, FormValues>({
		validationSchema: changePasswordSchema,
		mapPropsToValues: () => ({ newPassword: ""}),
		handleSubmit: async (values, { props, setErrors }) => {
			const errors = await props.submit(values);
			if (errors) {
				setErrors(errors);
			}
		}
	})(C);
	