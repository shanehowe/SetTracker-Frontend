import { useState } from 'react';

export const useField = () => {
    const [value, setValue] = useState('');

    const onChange = (text: string) => {
        setValue(text);
    };

    return { value, onChange };
}