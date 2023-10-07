export interface ILocalStorage {
  getStringItem: (key: string) => Promise<string | null>;
  setStringItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}
