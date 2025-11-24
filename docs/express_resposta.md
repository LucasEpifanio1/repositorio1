### perguntas
- 1 O que é o Express.js e por que ele é utilizado com Node.js?
- 2 O que são "Verbos HTTP" (GET, POST, PUT, DELETE) e qual a função de cada um?
- 3 O que é um Middleware no contexto do Express?
- 4 Qual a diferença entre app.use() , app.get() e app.post())?
- 5 O que é um json?
- 6 Como manipular, adicionar, ler e altera uma propriedade em um json no js?
Para que serve o middleware express.json()?

### respostas

- 1 - o Express é um framework que é tem um conjunto de ferramentas, prontas para o Node.js que facilita a criação de APIs, servidores e http e aplicações web.
- 2 -   get usa para listar ou consultar dados do servidor
  -    post - envia informações para cirar algo
  -   put - envia dados para editar um registro que já      existe. 
  -   delete - usa para deletar dados do servidor.
  
- 3 eles são importante porque permitem execultar regras e verificações antes da rota, evitando repetição de código e deixando o servidor organizado.

- 4 app.use ele é usado para registar a rotas middlewares.
    o app.get é usado quando você precisa listar, consultar ou buscar informações.
    e o app.post(),envia e criar os dados.

- 5 -Json é um formato de post que o servidor recebe, dentro deles geralmente tem informações que serão armazendas no servidor.

- 6 
Ler uma propriedade
```bash
pessoa.cidade = "Belo Horizonte";
```
Adicionar uma propriedade
```bash
obj.novaPropriedade = valor;
```
Alterar (editar) uma propriedade
```bash
obj.propriedade = novoValor
```
Deletar uma propriedade
```bash
delete obj.propriedade;
```

express.json() é um middleware que transforma o JSON recebido no corpo da requisição em um objeto JavaScript dentro de req.body