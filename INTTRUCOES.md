## Considerações

Me foquei em corrigir algumas funções da aplicação para então fazer alguns testes. Acrescentei alguns testes de unidade que estão usando o próprio jest, criei algumas estruturas de mock para simular alguns comportamentos mais como não domino bem o framework cometi alguns erros porem quis mostrar a possibilidade de fazer alguns testes na camada de unidade que acredito ser a mais importante.
-Inclui parâmetros para criação do report e o coverage com jest.
Acrescentei alguns testes de integração seguindo o mesmo padrão.
Criei alguns testes E2E com o postman, um simulando a jornada pelos endpoints e o outro referente a algumas validações de mensagens.
Não tive tempo hábil para me focar 100% em todas as soluções, segue os pontos que poderiam ser melhorados
- Criação de mais testes unitários explorando cenários de exceção
- Achar pontos de melhoria no código para auxiliar na manutenibilidade
- Utilizar injeção de dependência para auxiliar no design dos testes e no código.
- Nos testes separar a cobertura por integração e unidade, sendo um peso maior para o de unidade.
- #### Implementar os seguintes passos para CI
- Implementar processo de PR com análise statica do código(bugs, segurança e vulnerabilidades) utilizando SonarQube ou Codacy
- Testes unitários e de Integração rodando na pipeline
- Build do projeto
- Deploy automático da aplicação no aws/Heroku/Azure
- Teste de API após o deploy usando newman
## Para rodar os testes de e2e
```sh
docker-compose up -d server
docker run -t --network host --name localhost postman/newman run https://raw.githubusercontent.com/DogMaker/api-ecommerce/master/pagar.json
```
