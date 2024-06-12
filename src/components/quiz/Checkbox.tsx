import React from 'react';
import styles from '../components.module.scss';
import clsx from "clsx";

export enum AnswerResult {
    TRUE,
    FALSE,
    NONE,
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    result: AnswerResult;
    disabled?: boolean;
}

function colorForAnswer(result: AnswerResult) {
    switch (result) {
        case AnswerResult.FALSE:
            return styles.answerfalse;
        case AnswerResult.TRUE:
            return styles.answertrue;
        default:
            return "";
    }
}

const Checkbox: React.FC<CheckboxProps> = ({label, checked, onChange, result, disabled}) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <label className={clsx(styles.checkboxContainer, colorForAnswer(result))}>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled}/>
            <span className={styles.checkmark}></span>
            <span className={styles.checkboxlabel}>{label}</span>
        </label>
    );
};

export default Checkbox;