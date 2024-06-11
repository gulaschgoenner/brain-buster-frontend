// Checkbox.tsx
import React from 'react';
import styles from '../components.module.scss';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({label, checked, onChange}) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <label className={styles.checkboxContainer}>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange}/>
            <span className={styles.checkmark}></span>
            <span className={styles.checkboxlabel}>{label}</span>
        </label>
    );
};

export default Checkbox;