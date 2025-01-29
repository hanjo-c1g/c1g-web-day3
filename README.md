
# Tag 3: JSON und Local Storage

Willkommen zu Tag 3! Heute lernst du, wie du JSON-Daten verarbeitest und den Local Storage verwendest, um Daten in deinem Browser zu speichern und wieder abzurufen.

## Ziele des Tages

- JSON als Datenformat verstehen und nutzen.
- Daten lesen, schreiben und anzeigen.
- Local Storage verwenden, um Daten dauerhaft im Browser zu speichern.

---

## Aufgaben

### Aufgabe 1: Formular Daten in einer Liste anzeigen
1. Im HTML Code findest du bereits ein Formular mit zwei Datenfeldern: **Name** & **Alter**
2. Beim Absenden des Formulars:
   - Füge die abgesendeten Daten in einer HTML Liste hinzu

### Aufgabe 2: Local Storage verwenden

1. Speichere die Benutzereingaben aus dem Formular als JSON Strings im **Local Storage**.
2. Lade die gespeicherten Daten beim Neustart der Seite und zeige sie automatisch an.

### Aufgabe 3: Reset der Daten

1. Setzte die im HTML angezeigten Datensätze zurück
2. Lösche die im **Local Storage** gespeicherten Daten

### Weitere Aufgaben

Grundsätzlich solltest du mir dem gelernten JavaScript, CSS und HTML Kenntnissen in der Lage sein diese kleine Datenbank noch zu erweitern. Experimentiere gern weiter mit dem Code. Füge weitere Datenfelder hinzu, integriere eine Funktion um einzelne Zeilen zu löschen oder versuche dich daran eine Sortierungsfunktion zu implementieren.

---

## Hinweise

- Um die Daten beim Neustart zu laden benötigst du einen Eventlistener: **`window.addEventListener("DOMContentLoaded", () => {});`**
- Achte darauf, die Daten immer in JSON-Format zu speichern und beim Laden aus dem Local Storage wieder zu parsen.
- Debugge deine Lösung mit **`console.debug()`**, um Abläufe nachzuvollziehen.
- Nutze auch andere Funktionien wie den Local Storage Viewer in den Entwicklertools.
- Du kannst die Übungen gern wieder in einem CodePen durchführen oder du lädst dir das GitHub Repo auf deinen Rechner.

---

Viel Erfolg und Spaß beim Lernen!