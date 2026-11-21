# DESCRIÇÃO DA FUNÇÃO: K-ADMIN

## Objetivo
Fazer a ponte entre K-AI e as contas oficiais de Supabase e GitHub.

## Como funciona
- Recebe ação do K-AI: criar tabela, rodar SQL, criar arquivo no GitHub, etc.
- Executa de verdade nas APIs oficiais.
- Devolve o resultado para mostrar na cópia dentro do app.
- Guarda os tokens com segurança nos Secrets, nunca no HTML.
