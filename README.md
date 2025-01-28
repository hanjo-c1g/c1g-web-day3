
# Tag 3: JSON und Local Storage

Willkommen zu Tag 3! Heute lernst du, wie du JSON-Daten verarbeitest und den Local Storage verwendest, um Daten in deinem Browser zu speichern und wieder abzurufen.

## Ziele des Tages

- JSON als Datenformat verstehen und nutzen.
- Daten lesen, schreiben und anzeigen.
- Local Storage verwenden, um Daten dauerhaft im Browser zu speichern.

---

## Aufgaben

### Aufgabe 1: Formular Daten in einer Liste anzeigen
1. Erstelle ein Formular mit zwei Eingabefeldern:
   - **Name**
   - **Alter**
2. Beim Absenden des Formulars:
   - Zeige die abgesendeten Daten in einer HTML Liste an

### Aufgabe 2: Local Storage verwenden

1. Speichere die Benutzereingaben aus dem Formular als JSON Strings im **Local Storage**.
2. Lade die gespeicherten Daten beim Neustart der Seite und zeige sie automatisch an.

### Aufgabe 3: Reset der Daten

1. Setzte die im HTML angezeigten Datensätze zurück
2. Lösche die im **Local Storage** gespeicherten Daten

---

## Hinweise

- Um die Daten beim Neustart zu laden benötigst du einen Eventlistener: **`window.addEventListener("DOMContentLoaded", () => {});`**
- Achte darauf, die Daten immer in JSON-Format zu speichern und aus dem Local Storage zu lesen.
- Debugge deine Lösung mit **`console.debug()`**, um Abläufe nachzuvollziehen.

---

Viel Erfolg und Spaß beim Lernen!