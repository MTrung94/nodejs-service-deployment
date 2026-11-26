@"
# Node.js Service Deployment
https://roadmap.sh/projects/nodejs-service-deployment
Automated CI/CD pipeline for deploying a Node.js service to a remote Ubuntu server using **GitHub Actions**, **Terraform**, **Ansible**, and **SSH**.

## Project Structure

- `app/` — Express.js service (`index.js`, `package.json`) with `/` JSON endpoint and `/health` check endpoint.
- `terraform/` — Infrastructure as Code (`main.tf`, `variables.tf`) to provision a remote Ubuntu server.
- `ansible/` — Configuration management (`inventory.ini`, `playbook.yml`) to install Node.js 20, PM2, and Nginx reverse proxy.
- `.github/workflows/deploy.yml` — Automated deployment workflow triggered on pushes to `main` using SCP, SSH, GitHub Secrets, and repository variables.

## Deployment Flow

1. Provision a remote Ubuntu server with Terraform (or use an existing Ubuntu VPS) and configure SSH key access.
2. Run the Ansible playbook to set up Node.js, PM2, and Nginx (`port 80` -> `port 3000`).
3. Configure GitHub repository **Secrets** (`SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`) and **Variables** (`APP_MESSAGE`).
4. Push changes to `main` to trigger GitHub Actions and deploy automatically.
"@ | Out-File -Encoding utf8 README.md

git add README.md
git commit -m "docs: add comprehensive README for nodejs service deployment"
git push -u origin main
