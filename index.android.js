'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './styles/styles.js';

import SettingsScreen from './screens/SettingsScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import CameraScreen from './screens/CameraScreen.js';

const CameraApp = StackNavigator({
	Home: { screen: HomeScreen },
	Settings: { screen: SettingsScreen },
	Camera: { screen: CameraScreen }
});

AppRegistry.registerComponent('CameraApp', () => CameraApp);
