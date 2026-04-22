# 🎨 Hierl backt - Anpassungs-Guide

Schritt-für-Schritt Anleitung zur Personalisierung deiner Website.

---

## 📋 Übersicht

Dieser Guide hilft dir, die Website zu **deiner eigenen** zu machen:

1. [Logo ersetzen](#1--logo-ersetzen)
2. [Bilder austauschen](#2--bilder-austauschen)
3. [Texte anpassen](#3--texte-anpassen)
4. [Farben ändern](#4--farben-ändern)
5. [Kontaktdaten aktualisieren](#5--kontaktdaten-aktualisieren)
6. [Rechtliches ausfüllen](#6--rechtliches-ausfüllen)
7. [Kontaktformular aktivieren](#7--kontaktformular-aktivieren)
8. [Zusätzliche Features](#8--zusätzliche-features)

**Voraussetzungen:** 
- Text-Editor (z.B. VS Code, Sublime Text, Notepad++)
- Bildbearbeitungs-Software (optional: Photoshop, GIMP, Canva)

---

## 1. 📝 Logo ersetzen

### Aktuell:
Text-Logo "Hierl backt" (elegant, aber kein echtes Logo)

### Option A: Eigenes Logo-Bild verwenden

**Schritt 1:** Logo vorbereiten
- Format: PNG mit transparentem Hintergrund
- Größe: Empfohlen 200-400px Breite, max. 80px Höhe
- Dateiname: `logo.png`

**Schritt 2:** Logo hochladen
- Speichere `logo.png` im `hierl-backt` Ordner

**Schritt 3:** Code anpassen
Öffne `index.html` und ersetze **Zeile 60-64** (im `<nav>` Element):

**Vorher:**
```html
<a href="#hero" class="font-display text-3xl font-bold text-brown">
    Hierl backt
</a>
```

**Nachher:**
```html
<a href="#hero">
    <img src="logo.png" alt="Hierl backt" class="h-12 sm:h-16">
</a>
```

**Wiederhole für Mobile Navigation** in `impressum.html` und `datenschutz.html`!

---

### Option B: Text-Logo verbessern (kein Bild nötig)

Du kannst das Text-Logo behalten und nur die Schriftart/Farbe ändern:

```html
<a href="#hero" class="font-display text-4xl font-bold text-brown hover:text-dark-brown transition-colors">
    🍰 Hierl backt
</a>
```

**Tipp:** Füge ein Emoji hinzu (🍰, 🧁, 🎂) für mehr Persönlichkeit!

---

## 2. 🖼 Bilder austauschen

### Aktuell:
Platzhalter-Bilder von Unsplash (schön, aber generisch)

### Wo Bilder austauschen?

#### A. Hero-Bild (Hauptbereich oben)

**Öffne:** `index.html` → Zeile ~97

**Vorher:**
```html
<img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1600&q=80" 
     alt="Köstliche Desserts" 
     class="w-full h-full object-cover opacity-30"
     loading="eager">
```

**Nachher:**
```html
<img src="images/hero-background.jpg" 
     alt="Köstliche Desserts von Hierl backt" 
     class="w-full h-full object-cover opacity-30"
     loading="eager">
```

**Empfohlene Größe:** 1920x1080px, Format: JPG, Dateigröße: < 300KB

---

#### B. Über Uns - Bild

**Öffne:** `index.html` → Zeile ~157

**Vorher:**
```html
<img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80" 
     alt="Team beim Backen" 
     class="rounded-2xl shadow-2xl w-full"
     loading="lazy">
```

**Nachher:**
```html
<img src="images/team.jpg" 
     alt="Team von Hierl backt beim Backen" 
     class="rounded-2xl shadow-2xl w-full"
     loading="lazy">
```

**Tipp:** Verwende ein Foto von dir/deinem Team bei der Arbeit!

**Empfohlene Größe:** 800x600px

---

#### C. Galerie-Bilder (8 Stück)

**Öffne:** `index.html` → Zeile ~270-350 (Galerie-Sektion)

**Beispiel:**
```html
<!-- Gallery Item 1 -->
<img src="images/gallery-1.jpg" 
     alt="Hochzeitstorte von Hierl backt" 
     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
     loading="lazy">
```

**Wiederhole für alle 8 Galerie-Bilder.**

**Empfohlene Größe:** 800x800px (quadratisch), Format: JPG

**Dateinamen-Vorschlag:**
- `gallery-1.jpg` - Kuchen
- `gallery-2.jpg` - Tiramisu
- `gallery-3.jpg` - Hochzeitstorte
- `gallery-4.jpg` - Cupcakes
- `gallery-5.jpg` - Dessert-Buffet
- `gallery-6.jpg` - Macaron-Turm
- `gallery-7.jpg` - Detailaufnahme
- `gallery-8.jpg` - Event-Setup

---

### Ordnerstruktur für Bilder:

```
hierl-backt/
├── index.html
├── images/
│   ├── hero-background.jpg
│   ├── team.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── ...
│   └── gallery-8.jpg
└── ...
```

Erstelle einen `images/` Ordner und speichere alle Bilder dort.

---

### Bilder optimieren (wichtig für Performance!):

**Online-Tools:**
- [TinyPNG.com](https://tinypng.com/) - Kostenlose Kompression
- [Squoosh.app](https://squoosh.app/) - Google's Bild-Optimierer
- [Compressor.io](https://compressor.io/)

**Zielgröße:** < 200KB pro Galerie-Bild, < 300KB Hero-Bild

---

## 3. ✏️ Texte anpassen

### A. Meta-Daten (für Google & Social Media)

**Öffne:** `index.html` → Zeile 6-17

**Passe an:**
- `<title>` - Browser-Tab Titel
- `<meta name="description">` - Google-Beschreibung
- `<meta name="keywords">` - Suchbegriffe
- `<meta property="og:title">` - Facebook/Instagram Titel
- `<meta property="og:description">` - Social Media Beschreibung
- `<meta property="og:url">` - Deine finale Domain (z.B. `https://hierlbackt.de`)

**Beispiel:**
```html
<title>Hierl backt - Premium Dessert Catering Stuttgart | Hochzeiten & Events</title>
<meta name="description" content="Professionelles Dessert-Catering in Stuttgart. Kuchen, Tiramisu, Hochzeitstorten. Über 50 zufriedene Kunden. Jetzt anfragen!">
```

---

### B. Texte in Sektionen

**Hero (Start-Bereich):**
- Zeile 111-121: Hauptüberschrift, Untertitel, Call-to-Action

**Über Uns:**
- Zeile 165-195: Deine Geschichte, Philosophie

**Services:**
- Zeile 215-270: Beschreibung deiner Leistungen

**Kontakt:**
- Zeile 355-360: Kontaktformular-Intro

**Footer:**
- Zeile 470-495: Footer-Texte, Links

**Tipp:** Bleib authentisch! Schreibe wie du sprichst.

---

## 4. 🎨 Farben ändern

### Aktuelle Farbpalette:

```css
Cream:       #FFF8F0
Peach:       #FFE5D9
Rose:        #FFD7C4
Brown:       #8B6F5C
Dark Brown:  #5C4D42
```

### Farben anpassen:

**Öffne:** `index.html` → Zeile 30-47 (Tailwind Config)

**Beispiel - Änderung zu Blau/Lila:**

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'cream': '#FFF8F0',        // Behalten oder ändern
                'peach': '#E8D5FF',        // Helles Lila
                'rose': '#C8B6FF',         // Mittleres Lila
                'brown': '#6B5B95',        // Dunkles Lila
                'dark-brown': '#4A3F6B',   // Sehr dunkles Lila
            }
        }
    }
}
```

**Tipp:** Nutze [Coolors.co](https://coolors.co/) für harmonische Farbpaletten!

---

### Farben im gesamten Design:

Die Farben werden automatisch über Tailwind-Klassen angewendet:
- `text-brown` - Braune Schrift
- `bg-peach` - Pfirsich-Hintergrund
- `border-rose` - Rosa Rahmen
- etc.

Nach dem Ändern der Config werden ALLE Farben automatisch aktualisiert! 🎨

---

## 5. 📞 Kontaktdaten aktualisieren

### A. Header/Navigation

**Öffne:** `index.html` → Zeile 75-81 (Desktop Social Links)

```html
<a href="https://instagram.com/hierlbackt" target="_blank">...</a>
<a href="mailto:luisa.hierl@gmx.de">...</a>
```

**Passe an:** Instagram-Handle, E-Mail

---

### B. Kontakt-Sektion

**Öffne:** `index.html` → Zeile 435-455

```html
<a href="mailto:luisa.hierl@gmx.de" class="...">
    luisa.hierl@gmx.de
</a>
<a href="https://instagram.com/hierlbackt" target="_blank" class="...">
    @hierlbackt
</a>
```

---

### C. Footer

**Öffne:** `index.html` → Zeile 485-495

Gleiche Anpassungen wie oben.

---

### D. Telefonnummer hinzufügen (optional)

Falls du eine Geschäftstelefon-Nummer hast:

**Füge hinzu in Kontakt-Sektion:**

```html
<div>
    <i class="fas fa-phone text-3xl text-brown mb-3"></i>
    <h3 class="font-display text-lg font-bold text-brown mb-2">Telefon</h3>
    <a href="tel:+4917012345678" class="text-gray-600 hover:text-brown transition-colors">
        +49 170 123 456 78
    </a>
</div>
```

**Ändere:** `grid sm:grid-cols-2` → `grid sm:grid-cols-3` (Zeile 430)

---

## 6. ⚖️ Rechtliches ausfüllen

**WICHTIG:** Dies ist KEINE Rechtsberatung! Konsultiere einen Anwalt oder nutze einen Generator.

### A. Impressum

**Öffne:** `impressum.html` → Ab Zeile 70

**Fülle aus:**
1. **Firmenname / Vollständiger Name**
2. **Rechtsform** (Einzelunternehmen, GbR, etc.)
3. **Adresse** (Straße, PLZ, Ort)
4. **Telefon** (Geschäftsnummer)
5. **E-Mail**
6. **USt-IdNr.** (falls vorhanden, sonst "Kleinunternehmerregelung")
7. **Zuständige Kammer** (z.B. Handwerkskammer)

**Generator-Tools:**
- [e-recht24.de/impressum-generator](https://www.e-recht24.de/impressum-generator.html)
- [impressum-generator.de](https://www.impressum-generator.de/)

---

### B. Datenschutzerklärung

**Öffne:** `datenschutz.html` → Ab Zeile 70

**Wichtige Anpassungen:**

1. **Hosting-Anbieter** (Zeile ~120)
   - Füge ein: GitHub Pages, Netlify, Vercel, etc.

2. **Kontaktdaten** (Zeile ~400)
   - Stelle sicher, dass E-Mail und Adresse stimmen

3. **Wenn du EmailJS/Formspree nutzt:**
   - Füge Abschnitt hinzu über Datenverarbeitung durch Drittanbieter

4. **Wenn du Google Analytics nutzt:**
   - Füge Abschnitt über Google Analytics hinzu

**Generator-Tools:**
- [e-recht24.de/datenschutzerklaerung-generator](https://www.e-recht24.de/datenschutzerklaerung-generator.html)
- [datenschutz-generator.de](https://www.datenschutz-generator.de/)

---

## 7. 📧 Kontaktformular aktivieren

### Option A: EmailJS (Empfohlen)

**Schritt 1:** Registrierung
1. Gehe zu [emailjs.com](https://www.emailjs.com/)
2. Erstelle kostenlosen Account
3. Verifiziere E-Mail

**Schritt 2:** Service einrichten
1. Dashboard → "Email Services" → "Add New Service"
2. Wähle deinen E-Mail-Provider (Gmail, Outlook, etc.)
3. Folge den Anweisungen
4. **Notiere Service ID** (z.B. `service_abc123`)

**Schritt 3:** Template erstellen
1. Dashboard → "Email Templates" → "Create New Template"
2. Template Name: "Hierl backt Kontaktformular"
3. Template-Beispiel:

**Subject:**
```
Neue Anfrage von {{from_name}}
```

**Content:**
```
Name: {{from_name}}
E-Mail: {{from_email}}
Telefon: {{phone}}
Event-Typ: {{event_type}}
Datum: {{date}}
Anzahl Gäste: {{guests}}

Nachricht:
{{message}}
```

4. **Notiere Template ID** (z.B. `template_xyz456`)

**Schritt 4:** Public Key holen
1. Dashboard → "Account" → "API Keys"
2. **Notiere Public Key** (z.B. `user_abcXYZ123`)

**Schritt 5:** Code aktivieren
Öffne `script.js` → Zeile 170-195

**Entferne die Kommentare** (`/*` und `*/`) und füge deine IDs ein:

```javascript
// Initialize EmailJS
(function() {
    emailjs.init("DEIN_PUBLIC_KEY_HIER"); // ← Ersetze!
})();

// ... (Rest des Codes)

const response = await emailjs.send(
    "DEIN_SERVICE_ID_HIER",      // ← Ersetze!
    "DEIN_TEMPLATE_ID_HIER",     // ← Ersetze!
    {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Nicht angegeben',
        event_type: data['event-type'] || 'Nicht angegeben',
        date: data.date || 'Nicht angegeben',
        guests: data.guests || 'Nicht angegeben',
        message: data.message || 'Keine Nachricht'
    }
);
```

**Schritt 6:** Form Handler aktualisieren
Zeile 80 in `script.js`, ersetze:
```javascript
await simulateFormSubmission(data);
```

mit:
```javascript
await submitFormWithEmailJS(data);
```

**Schritt 7:** EmailJS Script einbinden
Füge in `index.html` NACH Zeile 35 hinzu:

```html
<!-- EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

**Fertig!** 🎉 Teste das Formular!

---

### Option B: Formspree

**Schritt 1:** Registrierung
1. Gehe zu [formspree.io](https://formspree.io/)
2. Erstelle Account
3. "Create New Form"
4. **Notiere Form Endpoint** (z.B. `https://formspree.io/f/xvoeabcd`)

**Schritt 2:** Code aktivieren
Öffne `script.js` → Zeile 197-218

Entferne Kommentare und füge dein Endpoint ein:

```javascript
async function submitFormWithFormspree(data) {
    const response = await fetch("https://formspree.io/f/DEIN_ENDPOINT", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Form submission failed');
    }
    
    return response.json();
}
```

**Schritt 3:** Form Handler aktualisieren
Zeile 80 in `script.js`, ersetze:
```javascript
await simulateFormSubmission(data);
```

mit:
```javascript
await submitFormWithFormspree(data);
```

**Fertig!** 🎉

---

## 8. 🚀 Zusätzliche Features

### A. WhatsApp-Button hinzufügen

**Öffne:** `index.html` → vor `</body>` (Zeile ~510)

**Füge ein:**
```html
<!-- WhatsApp Button -->
<a href="https://wa.me/4917012345678" target="_blank" class="whatsapp-btn">
    <i class="fab fa-whatsapp"></i>
</a>
```

**Ersetze:** `4917012345678` mit deiner Nummer (Format: Landesvorwahl + Nummer ohne 0)

**Styling ist bereits in `styles.css` vorhanden!**

---

### B. Google Maps einbetten (falls du einen Laden hast)

**Öffne:** `index.html` → Kontakt-Sektion (nach Zeile 455)

**Füge ein:**
```html
<!-- Google Maps -->
<div class="mt-12">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!..." 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        class="rounded-2xl shadow-lg">
    </iframe>
</div>
```

**Google Maps Embed-Code generieren:**
1. Gehe zu [Google Maps](https://maps.google.com)
2. Suche deine Adresse
3. Klicke "Teilen" → "Karte einbetten"
4. Kopiere den `<iframe>` Code

---

### C. Instagram Feed einbetten (optional)

Es gibt mehrere Optionen:

**Option 1: Elfsight Widget (einfach, kostenpflichtig)**
- [elfsight.com/instagram-feed-instashow](https://elfsight.com/instagram-feed-instashow/)

**Option 2: Manually (kostenlos)**
- Erstelle einen Grid mit deinen letzten Posts als Bilder
- Verlinke zu deinem Instagram-Profil

**Option 3: SnapWidget (kostenlos mit Limits)**
- [snapwidget.com](https://snapwidget.com/)

---

### D. Cookie-Banner (falls nötig)

Wenn du Google Analytics, Facebook Pixel, oder andere Tracking-Tools nutzt, brauchst du einen Cookie-Banner!

**Tools:**
- [cookiebot.com](https://www.cookiebot.com/)
- [cookieconsent.osano.com](https://www.osano.com/cookieconsent)
- [borlabs-cookie.com](https://borlabs.io/) (Premium, sehr gut für DSGVO)

---

## ✅ Checkliste: Vor dem Launch

- [ ] Logo ersetzt (oder Text-Logo angepasst)
- [ ] Alle Bilder mit eigenen Fotos ausgetauscht
- [ ] Bilder optimiert (< 200KB)
- [ ] Texte personalisiert (Hero, Über Uns, Services)
- [ ] Meta-Daten aktualisiert (Title, Description)
- [ ] Farben angepasst (optional)
- [ ] Kontaktdaten geprüft (E-Mail, Instagram, Telefon)
- [ ] Impressum vollständig ausgefüllt
- [ ] Datenschutzerklärung angepasst
- [ ] Kontaktformular aktiviert & getestet
- [ ] Test-Formular abgeschickt (kommt E-Mail an?)
- [ ] Mobile-Ansicht überprüft
- [ ] Alle Links funktionieren
- [ ] Rechtschreibung korrigiert
- [ ] Deployment durchgeführt (siehe README.md)
- [ ] SSL-Zertifikat aktiv (HTTPS)
- [ ] Google My Business eingerichtet (optional)
- [ ] Social Media aktualisiert (Instagram-Link zur Website)

---

## 🎓 Weiterführende Ressourcen

**HTML/CSS Lernen:**
- [developer.mozilla.org](https://developer.mozilla.org/)
- [w3schools.com](https://www.w3schools.com/)

**Bilder & Design:**
- [unsplash.com](https://unsplash.com/) - Kostenlose Fotos
- [canva.com](https://www.canva.com/) - Design-Tool (auch für Logos)
- [flaticon.com](https://www.flaticon.com/) - Icons

**Farben:**
- [coolors.co](https://coolors.co/) - Farbpaletten-Generator
- [mycolor.space](https://mycolor.space/) - KI Farbpaletten

**SEO & Marketing:**
- [moz.com/beginners-guide-to-seo](https://moz.com/beginners-guide-to-seo)
- [google.com/business](https://www.google.com/business/)

---

## 💬 Brauchen Sie Hilfe?

**Tipps bei Problemen:**

1. **Browser DevTools nutzen:** F12 → Console (zeigt Fehler an)
2. **Google ist dein Freund:** Die meisten Fehler wurden schon gelöst
3. **Schritt für Schritt:** Ändere eine Sache, teste, dann die nächste
4. **Backup erstellen:** Kopiere `hierl-backt` Ordner bevor du große Änderungen machst

---

## 🎉 Fertig!

Du hast jetzt eine komplett personalisierte, professionelle Website!

**Nächste Schritte:**
1. Deployment (siehe README.md)
2. Social Media updaten (Link zur Website)
3. Google My Business (falls lokal)
4. Regelmäßig Galerie-Bilder aktualisieren!

**Viel Erfolg mit Hierl backt!** 🍰✨

---

**Made with ❤️ and 🍰**
