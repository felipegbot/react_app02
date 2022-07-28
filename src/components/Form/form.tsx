import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './Form.module.css';
import { ITarefa } from '../../interfaces/tarefa';

interface Props {
    btnText: string;
}

const Form = ({ btnText }: Props) => {
    return (
        <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título: </label>
                <input
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade: </label>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                />
            </div>
            <input type="submit" value={btnText} />
        </form>
    );
};

export default Form;
