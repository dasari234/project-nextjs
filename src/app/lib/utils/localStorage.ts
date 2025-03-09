export enum LocalStorageKeys {
  AccessToken = "accessToken",
  RefreshToken = "refreshToken",
  User = "User",
}

export const setLocalStorage = <T>(key: LocalStorageKeys, value: T): void => {
  try {
    const encodedValue = btoa(JSON.stringify(value));
    localStorage.setItem(key, encodedValue);
  } catch (error) {
    console.error(`Error setting local storage for key "${key}":`, error);
  }
};

export const getLocalStorage = <T>(key: LocalStorageKeys): T | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(atob(value)) as T) : null;
  } catch (error) {
    console.error(`Error getting local storage for key "${key}":`, error);
    return null;
  }
};

export const removeLocalStorage = (key: LocalStorageKeys): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing local storage for key "${key}":`, error);
  }
}

export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing local storage:", error);
  }
};
