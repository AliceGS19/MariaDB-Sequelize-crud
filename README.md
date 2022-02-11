# MariaDB-Sequelize-CRUD
Aplicação cria servidor para CRUD de usuário conectando ao banco de dados MariaDB através da orm sequelize

---

# Bibliotecas utilizadas:

- joi;
- dotenv;
- express;
- mariadb;
- nodemon;
- sequelize;
- sequelize-cli;
- http-status-codes;

---

# Mais sobre o projeto:
  
Linguagen:
- JavaScript(node.js)

Finalidade:
- Projeto construído para testar aprendizados práticos com relação ao banco de dados MariaDB

---

# Curiosidades sobre MariaDB:

- Este banco de dados foi criado através de um fork no repositório do MySQL, pelos mesmo criador do mesmo, após a Oracle adquirir o MySQL;

- Suas querys são identicas as querys do MySQL;

- Para trabalhar com MariaDB utilizando a orm sequelize é muito semelhante a trabalhar com MySQL na mesma, mudando apenas o parametro dialect,
das configurações do banco, e a biblioteca instalada para conectar no BD.

- A biblioteca sequelize-cli não consegue criar o banco com o nome determinado nas configurações do mesmo, portanto para conseguir fazer a conexão
e rodar as migrations e seeds, é necessário criar o banco diretamente no MariaDB, para utilizar o nome de um banco ja existente

---

# Requerimentos para rodar o projeto localmente:

- Gerenciadores de pacotes(como npm/npx ou yarn);

- Instalação do BD MariaDB;

---

# Baixando e rodando o projeto localmente (necessária a instalação do git na maquina local e configuração com sua conta no github):

- Navegue até a pasta onde deseja coloca alocar este repositório;

- Execute o comando git clone git@github.com:AliceGS19/MariaDB-Sequelize-crud.git;

- Navegue até o repositório com o comando cd MariaDB-Sequelize-crud;

- Execute o comando npm install (para gerenciador de pacotes npm) ou yarn add 
(para gerenciador de pacotes yarn) para instalar as dependências do projeto;

- Crie um novo banco no seu banco de dados MariaDB;

- Crie um arquivo .env na raiz do projeto, seguindo o modelo do arquivo .env.example, 
passando as configurações para o seu banco de dados.
OBS: a variável DB_NAME deve receber o nome do banco criado anteriormente;

- Execute o comando npx sequelize db:migrate (yarn sequelize db:migrate) para estruturar o banco;

- Execute o comando npx sequelize db:seed:all (yarn sequelize db:seed:all) para popular o banco.
OBS: da forma como está o código até este commit, esse comando irá popular apenas a tabela roles,
pois é necessário que ela possua elementos para que se possa criar usuários devido a relação entre
essas tabelas;

- Execute o comando npm start para iniciar a aplicação normalmente ou o comando npm run dev para
iniciar a aplicação com o nodemon (reiniciar a aplicação sempre que uma nova mudança for salva no código)

---

# Funcionalidades da aplicação por rota por método http:

---

# Rota /users :
- métodos http:
- get;
- post.


# Método get: 
Não necessita de body ou headers

- Caso ocorra tudo certo retorna status 200 e uma lista com todos os usuários cadastrados
no corpo da resposta.

- Caso não possua nenhum usuário cadastrado no banco, retorna status 404 e a mensagem "No 
registered users".


# Método post:
Não necessita de headers, necessita de um body no formato JSON, com os campos:
- name: string (não pode ser vazia);
- email: string (deve ser um email válido segundo testes da biblioteca joi);
- password: string (pelo menos 6 caracteres);
- roleId (opcional): number (INTEGER);

- Caso algum dos campos não respeite esse formato, retorna status 400 e uma mensagem
gerada pelo joi de acordo com o erro no body.

- Caso o roleId seja passado, mas não esteja relacionado a nenhum elemento da tabela role,
retorna status 404 e a mensagem "Role not found".

- Caso o email já exista no banco de dados, retorna status 409 e a mensagem "Email 
already registered".

- Caso passe em todas as autenticações citadas anteriormente, cria um novo usuário no banco
utilizando os campos passados no body, retorna status 201 e a mensagem "User created successfully".

---

# Rota /users/:id :
- métodos http: 
- get;
- put; 
- delete.

# Método get: 
Não necessita de body ou headers

- Caso ocorra tudo certo retorna status 200 e um objeto com as informações do usuário buscado

- Caso não possua um usuário com o id inserido cadastrado no banco, retorna status 404 e a 
mensagem "User not found".


# Método put:
Não necessita de headers, necessita de um body no formato JSON, com os campos:
- name: string (não pode ser vazia);
- email: string (deve ser um email válido segundo testes da biblioteca joi);
- password: string (pelo menos 6 caracteres);
- roleId (opcional): number (INTEGER);

- Caso algum dos campos não respeite esse formato, retorna status 400 e uma mensagem
gerada pelo joi de acordo com o erro no body.

- Caso o roleId seja passado, mas não esteja relacionado a nenhum elemento da tabela role,
retorna status 404 e a mensagem "Role not found".

- Caso o email já exista no banco de dados, retorna status 409 e a mensagem "Email 
already registered".

- Caso não possua um usuário com o id inserido cadastrado no banco, retorna status 404 e a 
mensagem "User not found".

- Caso passe em todas as autenticações citadas anteriormente, atualiza as informações do usuário
com o id correspondento no banco utilizando os campos passados no body, retorna apenas status 204.


# Método delete:

- Caso exista um usuário correspondente ao id passado no banco, remove o usuário, retorna apenas
status 204.

- Caso não exista um usuário correspondente ao id passado no banco, retorna apenas status 204.
