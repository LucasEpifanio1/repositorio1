# Perguntas
## 1 - Pesquisa Inicial
Crie um arquivo chamado node_npm_respostas.md. Dentro dele, responda às seguintes perguntas de forma clara e concisa:

- _O que é Node.js?
- O que é o NPM (Node Package Manager)?
- Para que serve o arquivo package.json?
- Qual a diferença entre o package.json e o package-lock.json?
  
- Para que serve o diretório node_modules?
- Qual a diferença entre uma dependência normal  (dependencies) e uma dependência de desenvolvimento (devDependencies)?

# Respostas

 - 1 - O que é Node.js?
 o node é basicamente uma execução do codigo em js, que permite que rode o codigo js fora do navegador. Um exemplo bom seria o back end, que se o projeto for pessoal e local ele irar roda em sua maquina agora se for em nuvem o node irar roda na nuvem.
 é isso. e eu entendi também que ele fica mais rapido utilizando o v8 da google que fica no navegador.

 - 2 - O que é o NPM (Node Package Manager)?
 ele é um gerenciador de pacotes do node.js.

 - 3 - Para que serve o arquivo package.json?
 No package.json tem identidade do projeto, lista de dependências, configuração de scripts , Configuração de engines (Node/NPM),

 - 4 - o package.json é o arquivo principal do projeto,lista quais dependência o projeto usa, aceita intervelos de versão, e é usado para cinfigurar scripts, nome, versão do projeot etc.

 package-lock.json
 garente que todos instalem exatamente as mesmas versões.
 registrar as versões exatas de cada dependência e subdependência, evita bugs por causa de versão diferentes em cada máquina e geredo automaticamente pelo npm. 

  - 5 - O node_modules é simplesmente a pasta onde o npm instala todas as dependências do seu projeto.
  uma pergunta tarcisio o .gitignore e .env eles fica sempre alocadas na raiz do projeto?

  - 6 dependencie  O projeto precisa para funcionar  e devDependencies O desenvolvedor precisa para trabalhar.

   
