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
git push   # Envia do local para o remoto
git pull   # Baixa do remoto para o local
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
##  Clonar um Repositório Existente




Baixe uma cópia completa do repositório remoto para sua máquina:


```bash
git clone https://github.com/LucasEpifanio1/repositorio1.git
````

logo em seguida, localiza aonde está a pasta "repositorio1" e abra ela no vscode.

Depois, entre na pasta clonada:


```bash
cd repositorio1

````
```bash
code .
````
#Primeiro Commit (Exemplo Prático)


```bash
git add README.md
git add .
git commit -m "Minha alteração - de acordo com conventional Commits"
git push origin main
````

# Arquivos de estudo
[Compromissos Convencionais 1.0.0](./conventional_commits.md)


[Explicação](explicacao_git.md)
