# DESCRIÇÃO DA FUNÇÃO: COMANDO DE VOZ - K-AI APP

## Objetivo
Fazer o K-AI funcionar também com comando de voz.

## Como funciona
1. Usuário clica 1x no botão 🎤 no chat do K-AI para ativar o comando de voz. O botão fica ativo enquanto ele estiver falando.
2. Enquanto ele fala, o K-AI vai digitando na hora em tempo real no chat tudo exatamente como ele falar.
3. Reconhece com máxima precisão cada palavra, cada letra, cada sentido das falas e pedidos.
4. Nunca permite digitar palavras que não existem. Corrige na hora: ex: kai -> K-AI, github -> GitHub.
5. Reconhece automaticamente, instantâneo e rápido em tempo real, todas as falas, palavras, cada letra, cada sentido, pedidos.
6. Reconhece quando o usuário falar o que quer que ele faça.

## Regra dos 2 segundos até 5 segundos
- Se o usuário parar de falar por 2 segundos, o K-AI pergunta: "Você já terminou? Posso fazer o que você falou?"
- Se o usuário falar alguma coisa entre 2, 3 ou 4 segundos, o K-AI digita rápido continuando o que ele falou antes de ficar 2 segundos sem falar, e continua digitando as falas seguintes.
- Se o usuário não falar mais nada de 2 segundos até 5 segundos sem interrupção, quando der 5 segundos o botão desliga sozinho e o K-AI envia e faz o que foi pedido.
- Para ativar de novo, basta clicar 1x no botão de novo.
- O K-AI sempre digita de onde parou até as últimas falas que foram faladas antes de parar.

## Outro modo
- Se o usuário enviar os pedidos digitando no chat, também funciona certo, do mesmo jeito.

## Microfone do celular
- Funciona real no Chrome no celular, usando o microfone do celular. É preciso permitir o microfone no navegador.

## Arquivos desta função
- voz.js: código da função de voz
- DESCRICAO-DA-FUNCAO.md: este arquivo, descreve o funcionamento
