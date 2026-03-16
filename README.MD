

Alunos: João Pedro Oechsler e Felippe Chagas

# Portas utilizadas
| Serviço | Porta |
|------|------|
Frontend | 3000 |
Backend | 3001 |

# Rotas do Frontend
| Rota | Página | Função |
|-----|-----|-----|
/ | Home | Exibe cotações de moedas |
/listar | Listar peças | Lista todos os hardwares |
/cadastrar | Cadastrar peça | Cadastro de novos produtos |
/atualizar/:id | Atualizar peça | Atualização de produtos |
/deletar/:id | Deletar peça | Remoção de produtos |

# Rotas da API (Backend)

Base da API: http://localhost:3000/hardware

| Método | Rota | Função |
|------|------|------|
GET | /listar_hardware | Lista todos os produtos |
GET | /listar_hardware/:id | Busca produto por ID |
POST | /cadastrar_hardware | Cadastra novo produto |
PUT | /atualizar_hardware/:id | Atualiza produto |
DELETE | /deletar_hardware/:id | Remove produto |

# Estrutura do Produto

Exemplo de objeto armazenado no JSON:

{
  "id": 1,
  "nome": "RTX 4060",
  "marca": "Nvidia",
  "categoria": "Placa de vídeo",
  "preco": 2899.90,
  "estoque": 50
}

# API Externa

https://economia.awesomeapi.com.br

Informações exibidas:

Cotação USD-BRL
Cotação EUR-BRL
Cotação BTC-BRL
Variação percentual do USD
