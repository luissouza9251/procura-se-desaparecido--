
# Procura-se Desaparecido

## Dados de Inscrição
- **Nome:** Jorge Luis Goncalves De Souza
- **CPF:** 081862411-67

## Descrição
Aplicação web para cadastro e busca de pessoas desaparecidas.

## Passo a Passo para Instalação

1. **Clone o repositório:**
	```bash
	git clone <URL_DO_REPOSITORIO>
	cd procura-se-desaparecido--
	```
2. **Instale as dependências:**
	```bash
	npm install
	```

## Como rodar com Docker

1. **Crie a imagem Docker:**
	```bash
	docker build -t procura-se-desaparecido .
	```
2. **Execute o container:**
	```bash
	docker run -p 5173:5173 procura-se-desaparecido
	```
3. Acesse no navegador: [http://localhost:5173](http://localhost:5173)

- Certifique-se de ter o [Docker](https://www.docker.com/) instalado.
- Para ambiente de produção, ajuste variáveis de ambiente conforme necessário.

