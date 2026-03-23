
# 🍔 Lanchonete React | Digital Receipt System

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS--Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

---

## 📝 Sobre o Projeto
Este é um sistema de **comanda digital** desenvolvido para navegadores. O projeto foca em transformar dados complexos de pedidos em um recibo visualmente limpo, processando cálculos de impostos e taxas de serviço em tempo real no lado do cliente.

> **Diferencial:** O layout utiliza fontes monoespaçadas e bordas tracejadas para replicar com fidelidade um cupom fiscal de impressora térmica, mas com o poder da responsividade web.

---

## 🚀 Funcionalidades Principais

| Recurso | Descrição |
| :--- | :--- |
| **Cálculo Dinâmico** | Processa Subtotal e Total automaticamente ao receber os dados. |
| **Service Tax (10%)** | Implementação de lógica de taxa de serviço sobre o consumo. |
| **Responsive Design** | 100% amigável para celulares e tablets usando unidades `rem`. |
| **CSS Scoped** | Estilização isolada que evita vazamento de design entre componentes. |

---

## 🛠️ Arquitetura de Dados

O componente `Comanda` é alimentado por uma estrutura de dados simples e eficiente:

```javascript
// Exemplo de Objeto de Pedido
{
  id: number,
  nome: string,
  precoUnitario: number,
  quantidade: number
}
🧠 Regras de Negócio Aplicadas
O sistema executa as seguintes operações matemáticas:

Consumo: Σ (preco * qtd)

Serviço: Consumo * 0.10

Total Líquido: Consumo + Serviço

🎨 Visual & UI
O design foi projetado para ser limpo e focado:

Tipografia: Courier New (Estilo clássico de recibo).

Esquema de Cores:

Preto (#333): Leitura principal.

Verde (#27ae60): Destaque positivo no valor total.

Cinza (#ccc): Divisórias sutis para organização visual.

⚙️ Como Executar
Pré-requisitos
Node.js instalado

Gerenciador de pacotes (NPM ou Yarn)

Passo a Passo
Bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)

# 2. Acesse a pasta
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Inicie o servidor local
npm run dev
📱 Mobile Preview
O projeto foi otimizado para telas pequenas, garantindo que o texto não quebre e os preços fiquem sempre alinhados à direita, facilitando a conferência do cliente no smartphone.

<p align="center">
Feito com 🥤 e 💻 por <strong>[Vinicius Bertunho]</strong>
</p>


-----

### Por que esse README é melhor para o GitHub?

1.  **Badges do Vite:** Como é React "normal", usei a badge do Vite, que é o padrão atual (muito mais rápido que o antigo Create React App).
2.  **Seção de Arquitetura:** Explicar como os dados entram e como os cálculos são feitos mostra que você domina a lógica, não só o visual.
3.  **Tabela de Recursos:** Recrutadores adoram tabelas porque batem o olho e já sabem o que o projeto faz.
4.  **Markdown Limpo:** Sem poluição visual, facilitando a leitura tanto no modo claro quanto no modo escuro do GitHub.

Para salvar, basta criar um arquivo chamado `README.md` na raiz do seu projeto e colar esse conteúd
