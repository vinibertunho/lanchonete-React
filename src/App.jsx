import styles from './App.module.css';
import Comanda from './components/Comanda.jsx';

function App() {
    const itensPedidos = [
        { id: 1, nome: 'Hambúrguer Artesanal', precoUnitario: 35.0, quantidade: 2 },
        { id: 2, nome: 'Batata Frita M', precoUnitario: 18.5, quantidade: 1 },
        { id: 3, nome: 'Refrigerante Lata', precoUnitario: 7.0, quantidade: 3 },
        { id: 4, nome: 'Pudim de Leite', precoUnitario: 12.0, quantidade: 1 },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.tituloPrincipal}> Lanchonete React 🍔</h1>
            {/* Passando a lista via prop chamada "pedidos" */}
            <Comanda pedidos={itensPedidos} />
        </div>
    );
}

export default App;
