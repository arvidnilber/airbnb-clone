import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { View } from "react-native";
import { InputField } from "../../shared/InputField";
import {Button, Card, Text} from 'react-native-elements';
import { loginSchema } from '@abb/common';
import { Link } from "react-router-native";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ 
        flex:1,
        display:"flex",
        justifyContent:"center"
      }}>
        <Text style={{fontSize:30, marginBottom:20, textAlign:'center', fontWeight:'bold'}}>Welcome to Airbnb</Text>
        <Card>
          <Text style={{fontSize:25, marginBottom:10}}>Login</Text>
          <Field 
            name="email" 
            placeholder="Email" 
            component={InputField} 
            containerStyle={{width:"100%", marginBottom:10}} 
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
            containerStyle={{width:"100%",marginBottom:10}}
            autoCapitalize="none"
          />
          <Button title="Submit" onPress={handleSubmit as any} />
          <Link
            to={`/register`}
            underlayColor='#fff'>
              <Text style={{fontSize:16,marginTop:10,color:'blue'}}>Or register now</Text>
          </Link>
        </Card>
      </View>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);