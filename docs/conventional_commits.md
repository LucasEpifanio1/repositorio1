# Convencionais  commits 1.0.0

Pelo que eu entendi, o  **_Convencionais  commits 1.0.0_** é uma forma pradronizada de escrever mensagens de commit no git:
cada commit segue uma seguinte estrutura.

### Estrutura da mensagem de commit
```brach
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
````
e pelo que eu entendi o **_BREAKING CHANGE_** é uma forma de fala que o código antigo não funciona mais da mesma forma depois dessa atualização.

ai tem duas formas de fala, usando o ponto de exclamação(!):

```brach
feat!: mudar formato da autenticação de string para objeto
````
ou forma dois 
```brach
feat(api): alterar formato de retorno da API

BREAKING CHANGE: o campo 'token' foi removido da resposta`

fix → indica que foi feita uma correção de bug.
(api) → o escopo, ou seja, qual parte do projeto foi alterada.
descrição → explica o que foi corrigido.
````

e a pergunta que não quer calar, por utilizar o convenvencioanl commmits
| Benefício        | O que traz                                |
| ---------------- | ----------------------------------------- |
| 📖 Clareza       | Histórico de commits fácil de entender    |
| 🧮 Automação     | Versionamento automático (SemVer)         |
| 🧾 Organização   | Geração automática de changelog           |
| 🤝 Comunicação   | Todos falam a mesma “linguagem” no Git    |
| ⚙️ Integração    | Facilita CI/CD e ferramentas de automação |
| 🧠 Boas práticas | Commits pequenos, objetivos e descritivos |

e em seguida tem os tipos mais utilizados de commits
| Tipo         | Significado                                                | Exemplo                                             |
| ------------ | ---------------------------------------------------------- | --------------------------------------------------- |
| **feat**     | Adiciona uma **nova funcionalidade**                       | `feat: adicionar botão de cadastro`                 |
| **fix**      | Corrige um **bug**                                         | `fix: resolver erro ao salvar usuário`              |
| **docs**     | Mudança apenas na **documentação**                         | `docs: atualizar README`                            |
| **style**    | Ajustes de **formatação** (espaços, vírgulas etc.)         | `style: padronizar indentação do código`            |
| **refactor** | Refatoração de código (sem mudar comportamento)            | `refactor: melhorar performance da função login`    |
| **test**     | Adição ou modificação de **testes**                        | `test: adicionar testes unitários para userService` |
| **chore**    | Tarefas de manutenção (sem impacto no código de produção)  | `chore: atualizar dependências`                     |
| **perf**     | Melhorias de **desempenho**                                | `perf: otimizar consulta ao banco`                  |
| **build**    | Mudanças que afetam o **sistema de build** ou dependências | `build: atualizar Node para v20`                    |
| **ci**       | Mudanças na **integração contínua (CI)**                   | `ci: ajustar pipeline do GitHub Actions`            |



[Compromissos Convencionais 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)