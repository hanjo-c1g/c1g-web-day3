---
marp: true
theme: default
class: lead
paginate: true
backgroundColor: #f8f8f8
color: #333
---

# Tag 3: JSON und Local Storage
## Daten speichern und abrufen im Browser

---

# Ziel des Tages

- **JSON als Datenformat** verstehen und nutzen.
- JSON-Daten **lesen**, **schreiben** und **darstellen**.
- Daten mit **Local Storage** speichern und abrufen.
- Fetch-API für Datenzugriff einsetzen.

---

# Was ist JSON?

- **Definition:**
  - JSON = **JavaScript Object Notation**.
  - Standardformat zum Speichern und Übertragen von Daten.
- **Vorteile:**
  - Einfach und leicht lesbar.
  - Plattformunabhängig.
  - Unterstützt von nahezu allen Programmiersprachen.
- **Anwendungsbeispiele:**
  - API-Daten (z. B. Wetterdaten).
  - Konfigurationsdateien.

---

# JSON-Struktur

- **Schlüssel-Wert-Paare:**
  ```json
  { "name": "Alice", "age": 25, "isStudent": false }
  ```
- **Datenstrukturen:**
  - Strings, Zahlen, Booleans, Arrays, Objekte.
  - Beispiel mit Array:
    ```json
    [
      { "name": "Alice", "age": 25 },
      { "name": "Bob", "age": 30 }
    ]
    ```

---

# JSON in JavaScript

- **Lesen von JSON:** (`JSON.parse()`)
  ```javascript
  const jsonString = '{"name": "Alice", "age": 25}';
  const data = JSON.parse(jsonString);
  console.log(data.name); // Alice
  ```
- **Schreiben von JSON:** (`JSON.stringify()`)
  ```javascript
  const user = { name: "Alice", age: 25 };
  const jsonString = JSON.stringify(user);
  console.log(jsonString); // {"name":"Alice","age":25}
  ```

---

# Funktionen in JavaScript

## Arrow Functions
```javascript
const greet = (name) => `Hallo, ${name}!`;
console.log(greet("Charlie"));
```

## Benannte Funktionen
```javascript
function greet(name) {
  return `Hallo, ${name}!`;
}
console.log(greet("Alice"));
```

---

# Einführung in Local Storage

- **Was ist der Local Storage?**
  - Speichert Daten dauerhaft im Browser, auch nach einem Neustart.
- **Vorteile:**
  - Einfach zu verwenden.
  - Daten bleiben lokal auf dem Gerät.
- **Einschränkungen:**
  - Speichergröße (~5 MB pro Domain).
  - Daten sind nur für die Domain zugänglich.
- **Unterschiede zu Session Storage:**
  - Local Storage: Daten bleiben erhalten.
  - Session Storage: Daten werden gelöscht, wenn der Tab geschlossen wird.

---

# JSON und Local Storage kombinieren

- **Daten speichern:**
  ```javascript
  const user = { name: "Alice", age: 25 };
  localStorage.setItem("user", JSON.stringify(user));
  ```
- **Daten lesen:**
  ```javascript
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser.name); // Alice
  ```

---

# Daten beim Seitenladen aus dem Storage holen

Um Daten beim Laden der Seite aus dem Local Storage zu laden nutzt man am besten den event listener `DOMContentLoaded` am `window` Objekt.

```javascript
window.addEventListener("DOMContentLoaded", () => {
    console.debug("Seite geladen. Daten aus Local Storage werden geladen...");
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.forEach((item) => {
        addDataToList(item);
    });
});
```

---

# Übung: Eine kleine Datenbank im Local Storage halten

[https://github.com/hanjo-c1g/c1g-web-day3](https://github.com/hanjo-c1g/c1g-web-day3)

---

# Abschluss und Ausblick

- **Zusammenfassung:**
  - JSON ist ein standardisiertes Datenformat.
  - Local Storage ermöglicht das Speichern von Daten im Browser.
- **Ausblick:**
  - Arbeiten mit APIs am nächsten Tag.

**Fragen?**

**Danke für die Teilnahme!**