# Cloudflare Pages Deployment Guide - hierl-backt

## Project Settings für Cloudflare Pages

**Repository:** https://github.com/Tacotitti/hierl-backt

### Build Configuration:
```
Framework preset: None
Build command: (leave empty)
Build output directory: /
Root directory: (default)
Branch: main
```

### Custom Domain Setup:
```
Primary domain: hierlbackt.de
Redirect: www.hierlbackt.de → hierlbackt.de
SSL/TLS: Full (automatic)
```

### DNS Settings (IONOS):

**Nach Cloudflare Deployment:**

1. CNAME Record:
   ```
   Name: hierlbackt.de
   Target: <cloudflare-pages-url> (z.B. hierl-backt.pages.dev)
   TTL: Auto
   ```

2. CNAME Record (www):
   ```
   Name: www
   Target: <cloudflare-pages-url>
   TTL: Auto
   ```

---

## Deployment Steps:

1. ✅ GitHub Repository erstellt: Tacotitti/hierl-backt
2. ✅ Code gepusht: 8 files, 3072 lines
3. ⏳ Cloudflare Login (User muss sich einloggen)
4. ⏳ Cloudflare Pages Project erstellen
5. ⏳ Custom Domain hinzufügen (hierlbackt.de)
6. ⏳ DNS bei IONOS konfigurieren

---

**Aktueller Status:** Warte auf Cloudflare Login
