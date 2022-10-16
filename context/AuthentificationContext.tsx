import * as React from 'react';
import {createContext} from "react";
export interface AuthUser {
    message?: string;
    token?:   Token;
    user?:    User;
}

export interface Token {
    access_token?: string;
    token_type?:   string;
}

export interface User {
    uuid?:          string;
    email?:         string;
    firstname?:     string;
    phonenumber?:   string;
    lastname?:      string;
    photo?:      string;
    date_added?:    Date;
    date_modified?: Date;
}

export default createContext(({
        authData: {
            message: "",
            token: {
              access_token: "",
              token_type: ""
            },
            user: {
              uuid: "",
              email: "",
              firstname: "",
              phonenumber: "",
              lastname: "",
              photo: "",
              date_added: new Date(),
              date_modified: new Date()
            }
          },
        setAuthData: (value:any) => {}
    })
);
