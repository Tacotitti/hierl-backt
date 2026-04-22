# Hierl backt - Dessert Catering Website 🍰

Eine moderne, elegante One-Page-Website für **Hierl backt**, einen Dessert-Catering-Service.

![Website Preview](https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80)

---

## 📋 Inhalt

- [Features](#-features)
- [Technologie](#-technologie)
- [Installation](#-installation)
- [Anpassung](#-anpassung)
- [Deployment](#-deployment)
- [Form-Integration](#-form-integration)
- [SEO & Performance](#-seo--performance)
- [Support](#-support)

---

## ✨ Features

✅ **Modernes Design** - Elegante Dessert-Thematik mit warmen Farbtönen  
✅ **Voll responsiv** - Mobile-first Design, perfekt auf allen Geräten  
✅ **One-Page Layout** - Smooth Scroll Navigation  
✅ **Kontaktformular** - Mit Client-Side Validierung  
✅ **SEO-optimiert** - Meta-Tags, Open Graph, semantisches HTML  
✅ **Performance** - Lazy Loading, optimierte Bilder  
✅ **Rechtssicher** - Impressum & Datenschutz Templates (DSGVO)  
✅ **Animationen** - Sanfte Fade-in Effekte und Hover-States  
✅ **Social Media** - Instagram Integration  

---

## 🛠 Technologie

Die Website ist komplett mit **reinem HTML, CSS und JavaScript** gebaut - kein Build-Prozess nötig!

- **HTML5** - Semantisches Markup
- **Tailwind CSS** (CDN) - Utility-first CSS Framework
- **Vanilla JavaScript** - Keine Frameworks, keine Dependencies
- **Google Fonts** - Playfair Display (Display) + Inter (Body)
- **Font Awesome** - Icons
- **Unsplash** - Placeholder-Bilder (ersetzen mit eigenen!)

---

## 🚀 Installation

### 1. Dateien herunterladen/kopieren

Alle Dateien befinden sich bereits in diesem Ordner:

```
hierl-backt/
├── index.html              # Haupt-Website
├── impressum.html          # Impressum (Template)
├── datenschutz.html        # Datenschutzerklärung (Template)
├── styles.css              # Custom CSS
├── script.js               # JavaScript
├── README.md               # Diese Datei
└── CUSTOMIZATION-GUIDE.md  # Anpassungs-Anleitung
```

### 2. Lokal testen

**Option A: Mit Python**
```bash
cd hierl-backt
python -m http.server 8000
```
Dann öffne: `http://localhost:8000`

**Option B: Mit Node.js (npx)**
```bash
npx serve
```

**Option C: Mit VS Code**
Installiere die Extension "Live Server" und klicke auf "Go Live"

**Option D: Direkt öffnen**
Doppelklick auf `index.html` - funktioniert in den meisten Browsern!

---

## 🎨 Anpassung

Siehe **[CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)** für eine detaillierte Anleitung!

### Quick Start:

**1. Logo ersetzen**
- Aktuell: Text-Logo "Hierl backt"
- Ersetze durch ein echtes Logo im `<nav>` (Zeile ~60 in index.html)

**2. Bilder ersetzen**
- Ersetze Unsplash-URLs mit eigenen Fotos
- Empfohlene Größen: 1600x1200px (Hero), 800x800px (Galerie)

**3. Kontaktformular aktivieren**
- Siehe Abschnitt [Form-Integration](#-form-integration)

**4. Rechtliches ausfüllen**
- `impressum.html` - Füge deine Firma/persönlichen Daten ein
- `datenschutz.html` - Passe Datenschutzerklärung an

---

## 📮 Form-Integration

Das Kontaktformular ist **vorbereitet**, aber noch nicht mit einem Backend verbunden.

### Option A: EmailJS (Empfohlen - Kostenlos)

1. **Registrieren:** [emailjs.com](https://www.emailjs.com/)
2. **Service erstellen:** Gmail, Outlook, etc.
3. **Template erstellen:** Mit Variablen wie `{{from_name}}`, `{{from_email}}`, etc.
4. **Code aktivieren:** In `script.js` ab Zeile 170:
   - Entferne `/*` und `*/` (Kommentare)
   - Füge deine IDs ein: `PUBLIC_KEY`, `SERVICE_ID`, `TEMPLATE_ID`
5. **Fertig!** Formulare werden direkt an deine E-Mail gesendet

**Anleitung in script.js:** Siehe Zeile 170-195

---

### Option B: Formspree (Alternative)

1. **Registrieren:** [formspree.io](https://formspree.io/)
2. **Form erstellen** und Form-Endpoint kopieren
3. **Code aktivieren:** In `script.js` ab Zeile 200
4. **Fertig!**

**Anleitung in script.js:** Siehe Zeile 197-218

---

### Option C: Eigenes Backend

Falls du ein eigenes Backend hast, ersetze die `simulateFormSubmission()` Funktion in `script.js` (Zeile 158) mit deinem API-Endpoint.

---

## 🌐 Deployment

Die Website ist **deployment-ready** - kein Build-Prozess nötig!

### 🎯 GitHub Pages (Kostenlos, Empfohlen)

```bash
# 1. Git Repository erstellen
git init
git add .
git commit -m "Initial commit - Hierl backt website"

# 2. GitHub Repository erstellen (auf github.com)
# Dann:
git remote add origin https://github.com/DEIN-USERNAME/hierl-backt.git
git branch -M main
git push -u origin main

# 3. GitHub Pages aktivieren:
# Gehe zu: Settings → Pages → Source: main → Save
```

**Domain:** `https://dein-username.github.io/hierl-backt/`

**Custom Domain möglich!** (z.B. `hierlbackt.de`)

---

### 🚀 Netlify (Empfohlen für Anfänger)

1. Erstelle Account auf [netlify.com](https://www.netlify.com/)
2. Drag & Drop den `hierl-backt` Ordner auf Netlify
3. **Fertig!** URL: `https://dein-name.netlify.app`
4. Custom Domain hinzufügen: Settings → Domain management

**Features:** Auto-SSL, Form-Handling, Analytics

---

### ⚡ Vercel

```bash
# 1. Vercel CLI installieren
npm install -g vercel

# 2. Im Projekt-Ordner:
vercel

# 3. Folge den Anweisungen
```

Oder: [vercel.com](https://vercel.com/) → "Import Project"

---

### ☁️ Cloudflare Pages

1. Gehe zu [pages.cloudflare.com](https://pages.cloudflare.com/)
2. "Create a project" → Git verbinden oder direkt hochladen
3. **Fertig!**

**Vorteil:** Extrem schnelles CDN weltweit

---

## 🔍 SEO & Performance

### ✅ Bereits implementiert:

- Meta-Tags (Title, Description, Keywords)
- Open Graph Tags (Facebook, Instagram)
- Semantisches HTML5
- Alt-Tags auf Bildern
- Mobile-friendly
- Lazy Loading
- Schnelle Ladezeit (keine großen Dependencies)

### 🚀 Weitere Optimierungen:

**1. Eigene Bilder optimieren:**
```bash
# Mit ImageMagick oder Online-Tools wie tinypng.com
# Zielgröße: < 200KB pro Bild
```

**2. Google Search Console einrichten:**
- [search.google.com/search-console](https://search.google.com/search-console)
- Sitemap einreichen (Optional, für später)

**3. Google My Business:**
- Wenn lokales Geschäft: [business.google.com](https://business.google.com/)

**4. Schema.org Markup** (Optional, für Fortgeschrittene)
- Füge LocalBusiness Schema hinzu für bessere lokale SEO

---

## 📊 Analytics (Optional)

### Google Analytics 4

1. Erstelle Property auf [analytics.google.com](https://analytics.google.com/)
2. Füge Tracking-Code in `index.html` vor `</head>` ein:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Wichtig:** Datenschutzerklärung anpassen!

---

## 🎨 Farben & Branding

**Farbpalette:**
- Cream: `#FFF8F0`
- Peach: `#FFE5D9`
- Rose: `#FFD7C4`
- Brown: `#8B6F5C`
- Dark Brown: `#5C4D42`

**Fonts:**
- Display: Playfair Display (Überschriften)
- Body: Inter (Text)

**Zum Anpassen:** Siehe `tailwind.config` in `index.html` (Zeile 30-47)

---

## 🐛 Troubleshooting

### Problem: Formular sendet nicht

**Lösung:** 
1. Prüfe Browser-Konsole (F12) auf Fehler
2. Stelle sicher, dass EmailJS/Formspree konfiguriert ist
3. Teste mit `console.log()` in `script.js`

### Problem: Bilder laden nicht

**Lösung:**
1. Prüfe Internet-Verbindung (Unsplash lädt über CDN)
2. Ersetze mit lokalen Bildern (siehe CUSTOMIZATION-GUIDE.md)

### Problem: Mobile-Menü funktioniert nicht

**Lösung:**
1. Stelle sicher, dass `script.js` geladen wird
2. Prüfe Browser-Konsole auf Fehler
3. JavaScript aktiviert?

---

## 📄 Checkliste vor Go-Live

- [ ] **Impressum ausgefüllt** (impressum.html)
- [ ] **Datenschutz angepasst** (datenschutz.html)
- [ ] **Eigene Bilder hochgeladen**
- [ ] **Kontaktformular konfiguriert** (EmailJS/Formspree)
- [ ] **E-Mail-Adresse geprüft** (luisa.hierl@gmx.de)
- [ ] **Instagram-Link funktioniert** (@hierlbackt)
- [ ] **Domain konfiguriert** (falls Custom Domain)
- [ ] **SSL-Zertifikat aktiv** (HTTPS)
- [ ] **Mobile-Ansicht getestet**
- [ ] **Formular-Test durchgeführt**
- [ ] **Rechtschreibung geprüft**
- [ ] **Google Analytics eingerichtet** (optional)

---

## 📞 Support

Bei Fragen oder Problemen:

1. **Lies:** [CUSTOMIZATION-GUIDE.md](CUSTOMIZATION-GUIDE.md)
2. **Google:** Die meisten Probleme sind bereits gelöst
3. **Browser DevTools:** F12 öffnen → Console für Fehler prüfen

---

## 📝 Lizenz & Credits

**Website erstellt für:** Hierl backt - Dessert Catering  
**Technologie:** HTML5, CSS3, JavaScript, Tailwind CSS  
**Bilder:** Unsplash (Placeholder - bitte ersetzen!)  
**Icons:** Font Awesome  
**Fonts:** Google Fonts  

---

## 🎉 Viel Erfolg!

Diese Website ist bereit für den Einsatz. Folge dem CUSTOMIZATION-GUIDE, um sie zu personalisieren.

**Tipp:** Starte klein - gehe die Checkliste Schritt für Schritt durch!

---

**Made with ❤️ and 🍰**
