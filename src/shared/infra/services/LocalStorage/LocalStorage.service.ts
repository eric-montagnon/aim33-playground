import AsyncStorage from '@react-native-async-storage/async-storage';

import { ILocalStorage } from './LocalStorage.service.interface';

const getStringItem = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};

const setStringItem = async (key: string, value: string): Promise<void> => {
  await AsyncStorage.setItem(key, value);
};

const removeItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};

export const LocalStorage: ILocalStorage = {
  getStringItem,
  setStringItem,
  removeItem,
};
