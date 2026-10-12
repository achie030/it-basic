# Mijn Portfolio

Een persoonlijke portfolio-website gebouwd met **HTML**, **CSS** en **JavaScript**. Hier toon ik wie ik ben, welke vaardigheden ik heb en welke projecten ik heb gemaakt.

## Inhoud van de website

- **Home** – een hero-sectie met een typing-effect.
- **Over mij** – een korte introductie over mijzelf.
- **Vaardigheden** – een overzicht van mijn technische vaardigheden.
- **Projecten** – mijn drie projecten met omschrijving en gebruikte technieken, op een eigen pagina (`projecten.html`).
- **Contact** – een contactformulier en links naar mijn socials.

## Technologieën

| Technologie | Gebruik |
|-------------|---------|
| HTML | Structuur van de pagina's |
| CSS | Opmaak, styling en responsive design |
| JavaScript | Interacties zoals het menu, typing-effect en het formulier |

## Projectstructuur

```
ITweek2/
├── index.html          # Hoofdpagina van de website
├── projecten.html      # Projectenpagina met de drie projecten
├── css/
│   └── style.css       # Alle opmaak en styling
├── js/
│   └── script.js       # Interacties en dynamische content
├── assets/
│   ├── img/            # Afbeeldingen (foto's, logo's, projectafbeeldingen)
│   └── documents/      # Documenten (bijv. CV als PDF)
└── README.md           # Deze documentatie
```

## Verken de website

1. Open `index.html` direct in je browser (dubbelklik op het bestand).
2. Of start een lokale server:
   ```
   python -m http.server
   ```
   en open `http://localhost:8000` in je browser.

## Zelf aanpassen

Wil je de website aanpassen? Dit kun je doen:

1. **Persoonlijke gegevens** – de naam Achie staat al in beide HTML-bestanden. Vul nog je eigen e-mail, GitHub en LinkedIn in bij `#contact` in `index.html`.
2. **Over mij** – schrijf je eigen tekst in de sectie `#over-mij` in `index.html`.
3. **Vaardigheden** – bewerk de `skills`-array in `js/script.js`.
4. **Projecten** – bewerk de projectkaarten in `projecten.html` (titel, omschrijving en technieken).
5. **Afbeeldingen** – voeg je eigen foto's toe in `assets/img/` en verwijs er naar in `index.html`.

## Functionaliteiten

- Responsive design (werkt goed op mobiel, tablet en desktop).
- Sticky navigatie met een hamburgermenu op mobiel.
- Typing-effect in de hero-sectie.
- Dynamisch geladen vaardigheden via JavaScript.
- Projectenpagina met drie kaarten, elk met omschrijving en technieken.
- Contactformulier met client-side validatie.
- Auto-updated jaar in de footer.

## Gepland

- Dark mode.
- Echte formulierverwerking (bijv. via Formspree of een backend).
- Portfolio-details per project (modal of aparte pagina).

## Licentie

Dit project is voorzien van de MIT-licentie. Zie het bestand `LICENSE` voor meer informatie.