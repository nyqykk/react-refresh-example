1. pnpm install
2. cd apps/host && pnpm dev
3. cd apps/provider && pnpm dev
4. open http://localhost:8080/sub
5. modify apps/provider/src/routes/page.tsx. There is no fast refresh

solve:
1. open root node_modules/.pnpm/react-refresh/cjs/react-refresh-runtime.development.js
2. line 441 add code `hook.renderers.set(id, injected);`
3. modify apps/provider/src/routes/page.tsx. Fast Refresh is working.
