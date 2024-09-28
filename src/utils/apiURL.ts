import { Platform } from 'react-native';

export const apiURL = `http://${Platform.OS === 'android' ? '192.168.20.20' : 'localhost'}:3300/api`;
