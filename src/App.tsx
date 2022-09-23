import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import styles from './App.module.css';
import Form from './components/Form/form';
import List from './components/List/List';

import { ITarefa } from './interfaces/tarefa';

function App() {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div>
                    <h2> O que você vai fazer?</h2>
                    <Form btnText="Criar Tarefa" />
                </div>
                <div>
                    <h2>Suas tarefas:</h2>
                    <List />
                </div>
            </main>
            <Footer />
        </div>
    );    
}

export default App;
