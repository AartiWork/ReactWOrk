import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth} from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.email} </h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);