# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confimar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF** Requisitos Funcionais

- O usuário deve poder atualizar seu nome, email e senha;

**RNF** Requisitos não Funcionais

**RN** Regras de negocio

- O usuário não pode alterar seu email para um email já atualizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confimar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificaão semrpre que houver um novo agendamentos;
- O prestador de poder visualizar as notificação não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notifivações do prestador devem ser armazenadas no MongoDB;

**RN**

- A notifição deve ter um status de lida ou não lida para que o prestador controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horário disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h extamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h(Primeiro às 8h, último às 18h);
- O usuário não pode agendar em um horário  já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
