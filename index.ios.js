'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight, NativeModules } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/styles.js';

import SettingsScreen from './screens/SettingsScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import CameraScreen from './screens/CameraScreen.js';
import ALPRCameraScreen from './screens/ALPRCameraScreen.js';

var CameraClass = require('NativeModules').CameraClass;
console.log("logging this");
console.log(CameraClass);

const CameraApp = StackNavigator({
	Home: { screen: HomeScreen },
	Settings: { screen: SettingsScreen },
	Camera: { screen: CameraScreen },
	ALPRCamera: { screen: ALPRCameraScreen },
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
