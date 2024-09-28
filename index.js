/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { TasksApp } from './src/TasksApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TasksApp);
