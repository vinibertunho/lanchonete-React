import styles from './Comanda.module.css';

function Comanda({ pedidos = [] }) {
    const subtotal = pedidos.reduce((acc, item) => {
        return acc + item.precoUnitario * item.quantidade;
    }, 0);

    const taxaServico = subtotal * 0.1;
    const valorTotalFinal = subtotal + taxaServico;

    return (
        <div className={styles.recibo}>
            <div className={styles.cabecalho}>
                <h2>🧾 Resumo Do Pedido:</h2>
                <p>Mesa 04 - Atendente: João</p>
            </div>

            <ul className={styles.lista}>
                {pedidos.map((item) => (
                    <li key={item.id} className={styles.itemPedido}>
                        <span className={styles.quantidade}>{item.quantidade}x</span>
                        <span className={styles.nomeProduto}>{item.nome}</span>
                        <span className={styles.precoTotalItem}>
                            R$ {(item.precoUnitario * item.quantidade).toFixed(2)}
                        </span>
                    </li>
                ))}
                <hr className={styles.linhaDivisoria} />
                <li className={styles.itemPedido}>
                    <span className={styles.nomeProduto}>Taxa de Serviço (10%)</span>
                    <span className={styles.precoTotalItem}>R$ {taxaServico.toFixed(2)}</span>
                </li>

                <li className={styles.itemTotal}>
                    <span className={styles.totalDiv}>Total a Pagar:</span>
                    <span className={styles.valorTotal}>R$ {valorTotalFinal.toFixed(2)}</span>
                </li>
            </ul>
        </div>
    );
}

export default Comanda;
