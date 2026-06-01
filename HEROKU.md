# Deploy en Heroku — epoint-solution

La app ya está preparada para Heroku (`Procfile`, `build`, `start`, `engines`). Tú ejecutas el deploy.

## Requisitos

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalada
- Cuenta Heroku con la app **`epoint-solution`** creada
- Node **20.x** (ver `.nvmrc` y `engines` en `package.json`)
- Rama **`main`** (es la rama por defecto del repo)

## 1. Login

```bash
heroku login
```

## 2. Remote de Heroku (repo ya existente)

Desde la raíz del proyecto:

```bash
cd ~/workspace/landings/epoint-solution
heroku git:remote -a epoint-solution
```

Comprueba:

```bash
git remote -v
# debe aparecer heroku → git@git.heroku.com:epoint-solution.git (o https)
```

## 3. Variables de entorno (opcional)

Calendly tiene URL por defecto en código. Para sobrescribirla en producción:

```bash
heroku config:set NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/tu-usuario/tu-evento" -a epoint-solution
```

Las variables `NEXT_PUBLIC_*` se embeben en el **build**. Tras cambiarlas, vuelve a desplegar.

Listar config:

```bash
heroku config -a epoint-solution
```

## 4. Probar build local (recomendado)

```bash
npm ci
npm run build
npm start
```

Abre http://localhost:3000 (o el `PORT` que uses).

## 5. Deploy

```bash
git add .
git commit -m "tu mensaje"
git push heroku main
```

Si tu rama local no se llama `main`:

```bash
git push heroku HEAD:main
```

## 6. Ver logs y abrir la app

```bash
heroku logs --tail -a epoint-solution
heroku open -a epoint-solution
```

## Qué hace Heroku al desplegar

1. Detecta Node (`engines`: 20.x)
2. `npm install` (incluye devDependencies para compilar)
3. `npm run build` → `next build`
4. Arranca con `Procfile`: `web: npm start` → `next start` en `0.0.0.0` y `$PORT`

## Si el build falla por memoria

En dynos pequeños, Next puede quedarse corto de RAM:

```bash
heroku config:set NODE_OPTIONS="--max-old-space-size=460" -a epoint-solution
```

Luego `git push heroku main` de nuevo.

## Archivos relevantes

| Archivo        | Rol                                      |
|----------------|------------------------------------------|
| `Procfile`     | Comando web del dyno                     |
| `package.json` | `build`, `start`, `engines`              |
| `app.json`     | Metadatos / buildpack Node para Heroku   |
| `.nvmrc`       | Node 20 en local (nvm/fnm)               |
| `.env.example` | Variables opcionales documentadas        |
| `.slugignore`  | Excluye archivos innecesarios del slug   |
