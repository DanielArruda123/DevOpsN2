# 🚀 Aplicação DevOps com Nginx

> Demonstração prática de conceitos DevOps utilizando Nginx como Load Balancer e Reverse Proxy

![DevOps](https://img.shields.io/badge/DevOps-Enabled-blue)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-Load%20Balancer-009639?logo=nginx)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=github-actions)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura](#️-arquitetura)
- [Stack Tecnológica](#️-stack-tecnológica)
- [Conceitos DevOps Aplicados](#-conceitos-devops-aplicados)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Funciona](#-como-funciona)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Testes](#-testes)
- [Monitoramento](#-monitoramento)
- [Comandos Úteis](#-comandos-úteis)
- [Melhorias Futuras](#-melhorias-futuras)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar práticas modernas de **DevOps** utilizando **Nginx** como peça central da arquitetura. A aplicação implementa um sistema de load balancing entre múltiplos backends, demonstrando como distribuir carga de trabalho de forma eficiente e escalável.

### Objetivos:
- ✅ Demonstrar conceitos de DevOps na prática
- ✅ Implementar Load Balancing com Nginx
- ✅ Criar pipeline CI/CD automatizado
- ✅ Aplicar containerização com Docker
- ✅ Estabelecer práticas de IaC (Infrastructure as Code)

---

## 🏗️ Arquitetura

```
┌─────────────┐
│   Cliente   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│         Nginx (Load Balancer)       │
│    - Reverse Proxy                  │
│    - SSL Termination                │
│    - Health Checks                  │
│    - Algoritmo: Least Connections   │
└──────┬──────────────────────────────┘
       │
       ├─────────────┬─────────────┐
       ▼             ▼             ▼
┌──────────┐  ┌──────────┐  ┌──────────┐
│Backend-1 │  │Backend-2 │  │Backend-3 │
│ Node.js  │  │ Node.js  │  │ Node.js  │
│ Port:3000│  │ Port:3000│  │ Port:3000│
└──────────┘  └──────────┘  └──────────┘
       │             │             │
       └─────────────┴─────────────┘
                     │
              ┌──────────────┐
              │Docker Network│
              └──────────────┘
```

### Fluxo de Requisições:
1. Cliente faz requisição HTTP para o Nginx (porta 80)
2. Nginx aplica algoritmo de load balancing (least_conn)
3. Requisição é distribuída para um dos backends disponíveis
4. Backend processa e retorna resposta
5. Nginx envia resposta de volta ao cliente

---

## 🛠️ Stack Tecnológica

### Frontend
- **HTML5/CSS3/JavaScript**: Interface interativa para demonstração
- **Fetch API**: Requisições assíncronas

### Backend
- **Node.js v18**: Runtime JavaScript
- **Express.js v4.18**: Framework web minimalista
- **Alpine Linux**: Base das imagens Docker (menor footprint)

### Infraestrutura & DevOps
- **Nginx**: Load Balancer e Reverse Proxy
- **Docker**: Containerização de aplicações
- **Docker Compose**: Orquestração de containers
- **GitHub Actions**: CI/CD automatizado
- **Docker Hub**: Registry de imagens

### Algoritmos de Load Balancing
- **Least Connections** (Implementado): Prioriza servidor com menos conexões ativas
- **Round Robin**: Distribuição circular alternada
- **IP Hash**: Baseado no IP do cliente
- **Weight**: Distribuição baseada em pesos configurados

---

## 💡 Conceitos DevOps Aplicados

### 1. **Infrastructure as Code (IaC)**
Todo o ambiente é definido em código:
- `docker-compose.yml`: Definição da infraestrutura
- `Dockerfile`: Imagens personalizadas
- `nginx.conf`: Configuração do load balancer

### 2. **Containerização**
- Aplicações isoladas em containers Docker
- Imagens otimizadas usando Alpine Linux
- Multi-stage builds para reduzir tamanho

### 3. **Orquestração**
- Docker Compose gerencia múltiplos serviços
- Rede isolada para comunicação entre containers
- Dependências e ordem de inicialização controladas

### 4. **CI/CD (Continuous Integration/Continuous Deployment)**
- Pipeline automatizado com GitHub Actions
- Build automático das imagens
- Testes automatizados
- Deploy automatizado em produção

### 5. **Automação**
- Build e deploy automatizados
- Testes integrados no pipeline
- Health checks automáticos

### 6. **Observabilidade**
- Logs estruturados de todos os serviços
- Status do Nginx disponível via endpoint
- Métricas de distribuição de carga

### 7. **Escalabilidade Horizontal**
- Fácil adicionar mais backends
- Load balancing automático
- Zero downtime deployment

### 8. **Resiliência**
- Health checks contínuos
- Failover automático
- Retry em caso de falha

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/) (v20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0+)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (v18+) - opcional, apenas para desenvolvimento local

### Verificar instalação:

```bash
docker --version
docker compose version
git --version
```

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nginx-devops-app.git
cd nginx-devops-app
```

### 2. Configure as variáveis (opcional)

Edite o `docker-compose.yml` e ajuste conforme necessário:
- Portas expostas
- Nome das imagens (para Docker Hub)
- Variáveis de ambiente

### 3. Suba a aplicação

```bash
# Buildar e subir todos os containers
docker compose up -d --build

# Verificar status dos containers
docker compose ps
```

### 4. Acesse a aplicação

- **Frontend**: http://localhost
- **API Backend**: http://localhost/api/
- **Health Check**: http://localhost/health
- **Nginx Status**: http://localhost/nginx_status

### 5. Visualize os logs

```bash
# Logs de todos os serviços
docker compose logs -f

# Logs apenas do Nginx
docker compose logs -f nginx

# Logs de um backend específico
docker compose logs -f backend1
```

### 6. Pare a aplicação

```bash
# Parar containers
docker compose stop

# Parar e remover containers
docker compose down

# Parar, remover containers e volumes
docker compose down -v
```

---

## 📁 Estrutura do Projeto

```
nginx-devops-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # Pipeline CI/CD
├── nginx/
│   ├── Dockerfile              # Imagem customizada do Nginx
│   └── nginx.conf              # Configurações do Nginx
├── backend/
│   ├── Dockerfile              # Imagem do backend
│   ├── app.js                  # Aplicação Node.js
│   └── package.json            # Dependências Node.js
├── frontend/
│   └── index.html              # Interface web
├── docker-compose.yml          # Orquestração dos serviços
├── README.md                   # Documentação (este arquivo)
└── .gitignore                  # Arquivos ignorados pelo Git
```

---

## ⚙️ Como Funciona

### Nginx como Load Balancer

O Nginx recebe todas as requisições e distribui entre os backends usando o algoritmo **Least Connections**:

```nginx
upstream backend_servers {
    least_conn;  # Algoritmo de balanceamento
    server backend1:3000 weight=1 max_fails=3 fail_timeout=30s;
    server backend2:3000 weight=1 max_fails=3 fail_timeout=30s;
    server backend3:3000 weight=1 max_fails=3 fail_timeout=30s;
}
```

### Health Checks

O Nginx monitora a saúde dos backends:
- **max_fails=3**: Marca backend como indisponível após 3 falhas
- **fail_timeout=30s**: Tempo de espera antes de tentar novamente
- **proxy_next_upstream**: Tenta próximo backend em caso de erro

### Endpoints Disponíveis

| Endpoint | Descrição |
|----------|-----------|
| `/` | Frontend da aplicação |
| `/api/` | API dos backends (load balanced) |
| `/health` | Health check do Nginx |
| `/nginx_status` | Status e métricas do Nginx |

---

## 🔄 CI/CD Pipeline

O projeto utiliza **GitHub Actions** para automatizar o processo de CI/CD.

### Trigger

O pipeline é executado quando:
- Push para branches `main` ou `develop`
- Pull Request para branch `main`

### Etapas do Pipeline

#### Job 1: Build and Test
1. **Checkout**: Clona o código do repositório
2. **Setup Docker Buildx**: Configura builder do Docker
3. **Build**: Constrói todas as imagens Docker
4. **Test**: Sobe containers e testa health check
5. **Login Docker Hub**: Autentica no Docker Hub (apenas na main)
6. **Push**: Envia imagens para o Docker Hub (apenas na main)

#### Job 2: Deploy
7. **Deploy**: Deploy em produção (apenas na main após testes)

### Configurar Secrets

No GitHub, vá em **Settings > Secrets and variables > Actions** e adicione:

- `DOCKER_USERNAME`: Seu usuário do Docker Hub
- `DOCKER_PASSWORD`: Sua senha ou Access Token do Docker Hub

### Arquivo de Pipeline

Localizado em `.github/workflows/ci-cd.yml`

---

## 🧪 Testes

### Testar Load Balancing

```bash
# Fazer 10 requisições e ver a distribuição
for i in {1..10}; do
  curl -s http://localhost/api/ | jq '.server'
done
```

### Testar Health Check

```bash
# Health check do Nginx
curl http://localhost/health

# Health check dos backends
curl http://localhost/api/health
```

### Testar Failover

```bash
# Parar um backend
docker compose stop backend1

# Fazer requisições - Nginx automaticamente usa outros backends
curl http://localhost/api/

# Subir o backend novamente
docker compose start backend1
```

### Testes de Carga

```bash
# Instalar Apache Bench
sudo apt-get install apache2-utils

# Fazer 1000 requisições com 10 conexões simultâneas
ab -n 1000 -c 10 http://localhost/api/
```

---

## 📊 Monitoramento

### Nginx Status

Acesse: http://localhost/nginx_status

Mostra:
- Conexões ativas
- Requisições processadas
- Conexões aceitas/handled

### Logs em Tempo Real

```bash
# Todos os serviços
docker compose logs -f

# Apenas Nginx
docker compose logs -f nginx

# Filtrar por erro
docker compose logs | grep -i error
```

### Métricas de Distribuição

Use a interface web em http://localhost e clique em "10 Requisições" para ver a distribuição visual de carga entre os backends.

---

## 🛠️ Comandos Úteis

### Docker Compose

```bash
# Subir em background
docker compose up -d

# Rebuild de imagens
docker compose up -d --build

# Ver status
docker compose ps

# Parar serviços
docker compose stop

# Remover tudo
docker compose down -v

# Logs
docker compose logs -f [serviço]

# Escalar backends (adicionar mais instâncias)
docker compose up -d --scale backend1=3
```

### Docker

```bash
# Listar containers
docker ps

# Listar imagens
docker images

# Inspecionar container
docker inspect <container_id>

# Entrar no container
docker exec -it <container_id> /bin/sh

# Remover imagens não utilizadas
docker image prune -a

# Ver uso de recursos
docker stats
```

### Nginx

```bash
# Testar configuração
docker exec nginx-container nginx -t

# Recarregar configuração
docker exec nginx-container nginx -s reload

# Ver configuração ativa
docker exec nginx-container cat /etc/nginx/nginx.conf
```

---

## 🔐 Segurança (Produção)

Para ambiente de produção, considere:

### 1. SSL/TLS

```nginx
server {
    listen 443 ssl http2;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
}
```

### 2. Rate Limiting

```nginx
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

location /api/ {
    limit_req zone=mylimit burst=20;
}
```

### 3. Secrets Management

Use Docker Secrets ou ferramentas como:
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault

### 4. Network Security

```yaml
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
    internal: true  # Isola do acesso externo
```

---

## 🚀 Melhorias Futuras

- [ ] Implementar HTTPS com Let's Encrypt
- [ ] Adicionar Prometheus + Grafana para métricas
- [ ] Implementar ELK Stack para logs centralizados
- [ ] Adicionar Redis para cache
- [ ] Implementar rate limiting
- [ ] Adicionar autenticação JWT
- [ ] Criar testes automatizados (Jest/Mocha)
- [ ] Implementar circuit breaker pattern
- [ ] Adicionar database (PostgreSQL/MongoDB)
- [ ] Implementar service mesh (Istio/Linkerd)
- [ ] Migrar para Kubernetes

---

## 📚 Referências

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [The Twelve-Factor App](https://12factor.net/)

---

## 👨‍💻 Autor

Desenvolvido para demonstração de práticas DevOps em ambiente acadêmico.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Made with ❤️ for DevOps learning**