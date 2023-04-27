Inicialização
    - instalar o node.js
    https://www.youtube.com/watch?v=PCSrXjGetsA&t=1s
    testar se está ok: node -v , versao 18.15.0
    - instalar vscode

Execução dos arquivos
    node nomearquivo.js


Ambiente do Projeto 
    dentro da pasta desejada, no terminal, executa o código
    //npm para instalar pacotes, já instala junto com o node
    //configuracoes iniciais
    npm init -y  //inicializar o projeto (cria o arquivo package.json) -y preenche informações automaticamente
    npm install express //express - modulos basicos (cria a pasta node_modules e o package-lock.json) e atualiza também o package.json

Criar servidor
    cada aplicação será rodada a partir de um servidor, que seria o serviço que ficará rodando
    cria o arquivo  - exemplo server.js
    criar os const e o app
    criar as funções que vão responder alguma informação
    
GET
    cria as rotas e define os getS, o get chama a função criada
    exemplo ola.js 
    exemplo mulher.js: responde com um json
        o servidor está servindo dados sobre uma mulher, porém esses dados estão escritos no arquivo
    exemplo mulheres.js - envia vários objetos

Fazendo o Deploy


        


executar o arquivo node nome do arquivo

em todo arquivo tem que colocar o mesmo conteudo que está no servidor

criar o arquivo gitigonere