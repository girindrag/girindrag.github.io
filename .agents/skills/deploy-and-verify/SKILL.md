---
name: deploy-and-verify
description: Workflow to build, commit, push, and verify live GitHub Pages deployments for Girindra's portfolio.
---

# Deploy & Verify Workflow

Use this skill whenever making changes that need to be tested and deployed to production.

## Step 1: Pre-Commit Build Check
Always run a production build locally before committing:
```bash
npm run build
```
Verify:
- Exit code 0
- No missing module imports or CSS compilation errors
- `dist/` is generated with `index.html`, `resume.html`, and hashed assets

## Step 2: Stage & Commit
Write clear, conventional commit messages:
```bash
git add <modified-files>
git commit -m "feat(scope): concise description of change"
```

## Step 3: Push to Origin
```bash
git push origin main
```

## Step 4: Monitor CI/CD Pipeline
Check GitHub Actions run status using the `gh` CLI:
```bash
gh run list --limit 1 --json databaseId,status,conclusion,displayTitle
```
If in progress, wait or monitor until status is `completed` and conclusion is `success`.

## Step 5: Verify Live Deployment
Verify that GitHub Pages is serving the newly built bundle:
```bash
# Check HTTP 200 and headers
curl -s -I https://girindrag.github.io/ | head -n 10

# Verify asset hashes match local dist/
curl -s https://girindrag.github.io/ | grep -o 'assets/[^"]*'
```
