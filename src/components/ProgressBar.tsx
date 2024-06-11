import React from 'react';
import styles from './components.module.scss'

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
    return (
        <progress className={styles.progressBar} value={progress} max="100"></progress>
    );
};

export default ProgressBar;