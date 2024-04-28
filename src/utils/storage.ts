import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export enum StoredConsts {
    LOGGED_IN_USER = "loggedInUser",
    PREFERRED_THEME = "preferredTheme"
}

interface Storage {
    set: (key: string, value: string) => Promise<void>;
    get: (key: string) => Promise<string | null>;
    remove: (key: string) => Promise<void>;
}

class AppStorage implements Storage {
    async set(key: string, value: string) {
        await SecureStore.setItemAsync(key, value);
    }

    async get(key: string) {
        return await SecureStore.getItemAsync(key);
    }

    async remove(key: string) {
        await SecureStore.deleteItemAsync(key);
    }
}

class BrowserStorage implements Storage {
    async set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    async get(key: string) {
        return await Promise.resolve(localStorage.getItem(key));
    }

    async remove(key: string) {
        localStorage.removeItem(key);
    }
}

export const storageFactory = (): Storage => {
    if (Platform.OS === 'web') {
        return new BrowserStorage();
    } else {
        return new AppStorage();
    }
}

const storage = storageFactory();

export default storage;