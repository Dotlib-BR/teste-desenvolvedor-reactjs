import React from 'react';

//Componentes
import Header from '../../components/Header';
import Filter from '../../components/Filter';

//Styles
import './styles.css';

const Home: React.FC = () => {

    return (
        <div id="page-home">
            <Header />

            <main>
                <div className="filter">
                    <h3>ASSUNTO</h3>

                    <Filter/>
                </div>


                <div className="content">
                    <p>Mostrando 1 até 25 de 2399 resultados.</p>
                </div>
            </main>

        </div>
    );
}

export default Home;