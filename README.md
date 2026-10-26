# aucnetfasion-auction-demo-app

## Requirement

- [mise]
- [Docker]

## Preparation

Clone repository

```bash
cd && git clone "git@github.com:aucnet-dev/aucnetfasion-auction-demo-app.git" \
    && cd "aucnetfasion-auction-demo-app"
```

Install software

```bash
mise trust \
    && mise install \
    && pnpm install
```

## Local linter

```bash
./super-linter.sh
```

[mise]: https://mise.jdx.dev/
[Docker]: https://www.docker.com/
