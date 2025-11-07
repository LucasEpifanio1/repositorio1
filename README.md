- 1.O que é um repositório local?1.1 E o remoto?
- 2. Fazer a lista de comandos básicos de git.
- 3. Criar um repositório.
- 4. Clonar o repositório.
- 5. O que é convencional commits.
- 6. Fazer um primeiro commits alterando o readme.md, com
 base no conventional commits








## 1️⃣ Repositórios: Local e Remoto




### 📁 Repositório Local
É o projeto que fica salvo **no seu computador**.  
Nele você **cria, edita e versiona** os arquivos usando o Git.




### ☁️ Repositório Remoto
É uma **cópia do seu projeto hospedada na internet**, em plataformas como:




- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)




Serve para **armazenar e compartilhar código** com outras pessoas.




#### 📤 Enviar alterações do local para o remoto:
```bash
git push
git pull
```
## 2️⃣ Comandos Básicos do Git




| Comando | Descrição |
|----------|------------|
| `git init` | Cria um novo repositório Git dentro da pasta atual |
| `git status` | Mostra o estado atual dos arquivos |
| `git add .` | Adiciona todos os arquivos modificados à área de preparação (staging area) |
| `git commit -m "mensagem"` | Salva (confirma) as alterações com uma mensagem explicando o que foi feito |
| `git log` | Mostra o histórico de commits |
| `git branch` | Lista, cria ou deleta branches do projeto |
| `git checkout` | Troca de branch ou restaura versões antigas de arquivos |
| `git merge` | Junta as alterações de uma branch com outra |
| `git push` | Envia os commits do repositório local para o remoto |
| `git pull` | Baixa as atualizações do remoto e mescla com o local |




---




## 3️⃣ Criar um Repositório Remoto no GitHub




### 🪜 Etapas:




1. Acesse [https://github.com](https://github.com) e faça login.  
2. Clique no botão **“+” → “New repository”**.  
3. Escolha um **nome** para o repositório e adicione uma **descrição opcional**.  
4. Defina se será **público** ou **privado**.  
5. **Deixe desmarcadas** as opções como “Add a README” (caso já tenha um repositório local).  
6. Clique em **“Create repository”**.  
7. Copie a **URL do repositório remoto** exibida após a criação.




---

Padrão base

A estrutura geral é:
```bash
<tipo>: <mensagem curta explicando a mudança>
````

Exemplo:

feat: adicionar botão de login na tela inicial

## 🚀 Tipos mais usados de commits

| Tipo         | Significado                                                            | Exemplo                                               |
| ------------ | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| **feat**     | Nova funcionalidade                                                    | `feat: adicionar validação de email no cadastro`      |
| **fix**      | Correção de bug                                                        | `fix: corrigir erro ao salvar usuário`                |
| **docs**     | Mudanças na documentação                                               | `docs: atualizar README com instruções de instalação` |
| **style**    | Mudança de estilo (espaços, indentação, vírgulas) — sem alterar lógica | `style: remover espaços extras no arquivo app.js`     |
| **refactor** | Refatoração de código — melhora a estrutura sem mudar o comportamento  | `refactor: simplificar função de cálculo de juros`    |
| **test**     | Adição ou modificação de testes                                        | `test: criar testes para função de login`             |
| **chore**    | Tarefas de manutenção (build, dependências, configs)                   | `chore: atualizar dependências do npm`                |
| **perf**     | Melhora de desempenho                                                  | `perf: otimizar loop de busca de produtos`            |
| **build**    | Mudanças que afetam o processo de build (ex: webpack, vite)            | `build: configurar babel para suporte ES6`            |
| **ci**       | Mudanças em pipelines, scripts de integração contínua                  | `ci: ajustar workflow do GitHub Actions`              |
| **revert**   | Reversão de um commit anterior                                         | `revert: reverter commit 5a3f2a1 (erro na API)`       |



## 4️⃣ Clonar um Repositório Existente




Use este comando para baixar uma cópia completa de um repositório remoto para sua máquina:




```bash
git clone https://github.com/LucasEpifanio1/repositorio1.git
````

logo em seguida, localiza aonde está a pasta "repositorio1" e abra ela no vscode.

Depois da um cd:


```bash
cd repositorio1
````
e segue com as linhas de comando


```bash
git add .
git commit -m "Minha alteração - de acordo com conventional Commits"
git push origin main
````

