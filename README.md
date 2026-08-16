# 🌸 Flower Store on Kubernetes

> A production-style multi-tier application demonstrating **Docker**, **Kubernetes**, **Helm**, **Ingress**, **Nginx**, **React**, and **Node.js**.

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge\&logo=kubernetes\&logoColor=white)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=for-the-badge\&logo=helm\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge\&logo=nginx\&logoColor=white)

---

# 📖 Overview

This project demonstrates how to deploy a modern **multi-tier web application** on Kubernetes using production-inspired cloud-native practices.

The application consists of:

* 🌐 React Frontend
* ⚡ Node.js / Express Backend API
* 🐳 Docker Containers
* ☸ Kubernetes Deployments & Services
* ⚙ ConfigMaps & Secrets
* ⛵ Helm Chart
* 🌍 NGINX Ingress Controller

The goal is to demonstrate practical Kubernetes deployment skills including application packaging, service discovery, configuration management, and traffic routing.

---

# 🏗 Architecture

```text
                       Internet
                           │
                    flowers.local
                           │
                           ▼
                  NGINX Ingress Controller
                           │
                           ▼
                  frontend-service (ClusterIP)
                           │
                           ▼
               React + NGINX Frontend Pods
                           │
                     /api requests
                           │
                           ▼
                  backend-service (ClusterIP)
                           │
                           ▼
                  Node.js Backend Pods
                           │
               ConfigMap + Secret
```

---
sdvvsdvsdsdvsf
#  Technologies

| Category           | Technologies      |
| ------------------ | ----------------- |
| Frontend           | React.js          |
| Backend            | Node.js, Express  |
| Containerization   | Docker            |
| Orchestration      | Kubernetes        |
| Package Management | Helm              |
| Networking         | Services, Ingress |
| Reverse Proxy      | NGINX             |
| Configuration      | ConfigMap         |
| Secrets            | Kubernetes Secret |
| Local Cluster      | Minikube          |

---

# 📂 Repository Structure

```text
Flower-Store-Kubernetes/

├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src/
│
├── flower-app/
│   ├── Chart.yaml
│   ├── values.yaml
│   └── templates/
│
├── screenshots/
│
└── README.md
```

---

# ✨ Features

* Dockerized frontend and backend
* Kubernetes Deployments
* Multiple Pod replicas
* ClusterIP Services
* Ingress Controller
* Helm Chart
* ConfigMaps
* Secrets
* Internal Service Discovery
* NGINX Reverse Proxy

---

# 🐳 Docker

Both frontend and backend applications are containerized.

## Frontend

* Multi-stage Docker build
* Optimized production build
* Served using NGINX
* Reverse proxy to backend API

```dockerfile
FROM node:18 AS build
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

---

## Backend

Built using Express.js.

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]
```

---

# ☸ Kubernetes Resources

| Resource   | Purpose                  |
| ---------- | ------------------------ |
| Deployment | Manage Pods              |
| Service    | Internal Networking      |
| ConfigMap  | Store Configuration      |
| Secret     | Store Sensitive Data     |
| Ingress    | External Traffic Routing |

---

# ⚙ ConfigMap

Application configuration is stored outside the container image.

Example:

```yaml
apiVersion: v1
kind: ConfigMap

data:
  APP_NAME: Flower Store
```

---

# 🔐 Secret

Sensitive values are stored securely.

```yaml
apiVersion: v1
kind: Secret

type: Opaque
```

---

# 🌐 Services

## Frontend Service

```text
Browser
      │
      ▼
frontend-service
```

---

## Backend Service

```text
Frontend
      │
      ▼
backend-service
```

Services provide stable networking even when Pods are recreated.

---

# 🌍 Ingress

Instead of exposing multiple NodePorts, traffic enters through a single Ingress Controller.

```text
flowers.local
       │
       ▼
Ingress
       │
       ▼
frontend-service
       │
       ▼
Frontend Pods
```

---

# ⛵ Helm

The application is packaged as a reusable Helm Chart.

```
flower-app/
├── Chart.yaml
├── values.yaml
└── templates/
```

Install:

```bash
helm install flower-app .
```

Upgrade:

```bash
helm upgrade flower-app .
```

Uninstall:

```bash
helm uninstall flower-app
```

---

# 🚀 Deployment Workflow

```text
Developer
     │
     ▼
Docker Build
     │
     ▼
Docker Hub
     │
     ▼
Helm Chart
     │
     ▼
Kubernetes Cluster
     │
     ▼
Deployments
     │
     ▼
Services
     │
     ▼
Ingress
     │
     ▼
Users
```

---

# 📸 Screenshots

Add screenshots for:

* Running Application

![AD DS Screenshot](https://github.com/jkaljokey-hub/kubernetes-fullstack-deployment/blob/main/Doc&screenshots/FlowersHome.png?raw=true)

* Kubernetes Pods

![AD DS Screenshot](https://github.com/jkaljokey-hub/kubernetes-fullstack-deployment/blob/main/Doc&screenshots/Pods.png?raw=true)

* Kubernetes Services

![AD DS Screenshot](https://github.com/jkaljokey-hub/kubernetes-fullstack-deployment/blob/main/Doc&screenshots/Services.png?raw=true)

* Helm Release

![AD DS Screenshot](https://github.com/jkaljokey-hub/kubernetes-fullstack-deployment/blob/main/Doc&screenshots/Helm.png?raw=true)

* Ingress

![AD DS Screenshot](https://github.com/jkaljokey-hub/kubernetes-fullstack-deployment/blob/main/Doc&screenshots/Ingress.png?raw=true)



---

# 📚 Lessons Achived


* Kubernetes architecture
* Pod lifecycle
* Deployments
* ReplicaSets
* Services
* Service Discovery
* ConfigMaps
* Secrets
* Helm Charts
* Ingress Routing
* Reverse Proxy
* Docker Networking

---

# 🔮 Future Improvements

* Azure Kubernetes Service (AKS)
* Horizontal Pod Autoscaler
* Persistent Volumes
* GitHub Actions CI/CD
* TLS Certificates
* Prometheus Monitoring
* Grafana Dashboards

---

# 👨‍💻 Author

**Abubakar Alnour**

Cloud Infrastructure Engineer

* Microsoft Azure
* Kubernetes
* Docker
* Helm
* Terraform
* GitHub Actions

If you found this project useful, consider giving it a ⭐ on GitHub.
