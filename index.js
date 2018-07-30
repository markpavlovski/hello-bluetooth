import './ReactotronConfig'

/** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);


// in your index.ios.js or index.android.js
import React, { Component } from 'react';
import {  AppRegistry } from 'react-native'
import App from './example/App' //<-- simply point to the example js!

AppRegistry.registerComponent('hellobluetooth2', () => App);
