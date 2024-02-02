import { useState } from 'react';

export const useField = (name: string) => {
    const [value, setValue] = useState('');

    const onChange = (text: string) => {
        setValue(text);
    };

    return { name, value, onChange };
}