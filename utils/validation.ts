import { ValidationResult } from '../types';

const hasInvalidCharacters = (input: string): boolean => {
    const invalidCharacters = ['/', '\\', '?', '%', '*', ':', '|', '"', '<', '>', '.', ';', '`'];
    return invalidCharacters.some(invalidCharacter => input.includes(invalidCharacter));
};

export const isValidFolderName = (folderName: string): ValidationResult => {
    const MAX_FOLDER_LENGTH = 20;

    if (folderName.length === 0) {
        return {
            isValid: false,
            message: 'Folder name cannot be empty'
        }
    } else if (folderName.length > MAX_FOLDER_LENGTH) {
        return {
            isValid: false,
            message: 'Folder name cannot be longer than 20 characters'
        }
    } else if (hasInvalidCharacters(folderName)) {
        return {
            isValid: false,
            message: 'Folder name cannot contain any of the following characters: / \\ ? % * : | " < > .'
        }
    }
    return {
        isValid: true,
        message: 'Folder name is valid'
    }
};