# Desarrollo local — rendimiento

## Por qué se puede “congelar” el Mac

1. **Varios `next dev` a la vez** (puertos 3000/3001). Cierra todos antes de volver a arrancar.
2. **Caché `.next` muy grande** (~700 MB+). Borrarla libera disco y acelera el arranque.
3. **Turbopack mirando la carpeta equivocada**: si existe `package-lock.json` en `/practica` (padre), Next puede vigilar muchos proyectos a la vez. Este repo fija la raíz en `next.config.ts`; evita correr `npm run dev` desde `/practica`.
4. **`npm run build` + `npm run dev` juntos** duplican carga de CPU/RAM.

## Comandos útiles

```bash
# Detener servidores Next en 3000/3001
npm run stop:dev

# Borrar caché de compilación
npm run clean

# Arrancar de nuevo (solo uno)
npm run dev
```

Si Turbopack sigue pesado:

```bash
npm run dev:webpack
```

## Antes de cada sesión

1. `npm run stop:dev`
2. No dejes builds colgados en otra terminal.
3. Trabaja siempre dentro de `epoint-solution/`, no en la raíz `practica/`.
