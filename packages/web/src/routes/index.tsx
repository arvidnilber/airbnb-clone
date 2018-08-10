import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { NotFoundConnector } from "../modules/notFound/NotFoundConnector";
import { HomeConnector } from "../modules/home/HomeConnector";
import { LoginConnector } from '../modules/login/LoginConnector';
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector';
import { ChangePasswordConnector } from '../modules/changePassword/ChangePasswordConnector';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={HomeConnector} />
            <Route exact={true} path="/register" component={RegisterConnector} />
            <Route exact={true} path="/login" component={LoginConnector} />
            <Route exact={true} path="/forgot" component={ForgotPasswordConnector} />
            <Route exact={true} path="/change-password/:key" component={ChangePasswordConnector} />
            <Route exact={true} path="*" component={NotFoundConnector} />
        </Switch>
    </BrowserRouter>
);