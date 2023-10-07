import * as SecureStore from 'expo-secure-store';

import { ISecureLocalStorage } from './SecureLocalStorage.service.interface';

const getStringItem = async (key: string): Promise<string | null> => {
  return await SecureStore.getItemAsync(key);
};

const setStringItem = async (key: string, value: string): Promise<void> => {
  await SecureStore.setItemAsync(key, value);
};

const removeItem = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};

export const SecureLocalStorage: ISecureLocalStorage = {
  getStringItem,
  setStringItem,
  removeItem,
};
