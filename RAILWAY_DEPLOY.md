# Nasazení DOMIDOMI Energie na Railway

## Stav
- ✅ GitHub repo: https://github.com/AAATom16/domidomi-energie
- ✅ Iniciální commit hotov
- ⏳ Railway – vyžaduje ruční krok (workspace výběr)

## Jak dokončit nasazení na Railway

### Varianta A: Přes webový dashboard (doporučeno)
1. Otevři **https://railway.app**
2. **New Project** → **Deploy from GitHub repo**
3. Vyber repo **domidomi-energie**
4. Railway automaticky detekuje Vite projekt a nastaví:
   - Build: `npm run build`
   - Start: `npm start` (slouží dist přes `vite preview`)
5. Po deployi klikni na **Generate Domain** pro veřejnou URL

### Varianta B: Přes CLI (interaktivně)
V terminálu spusť:
```bash
cd "/Users/tomashajek/Desktop/web/WEB DOMIDOMI ENERGIE"
railway init -n domidomi-energie
```
Vyber workspace (např. Hájek Tomáš) a potvrď. Pak:
```bash
railway up
```

### Varianta C: Přes CLI s workspacem
Pokud znáš ID nebo název workspace:
```bash
railway init -n domidomi-energie -w "NÁZEV_TVÉHO_WORKSPACE"
railway up
```
