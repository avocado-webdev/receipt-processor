# Receipt Processor

<br/>

Die Applikation *Receipt Processor* versucht mithilfe der Verfahren der *Texterkennung (OCR)*, relevante Informationen aus einem Kassenbeleg, welcher in Form eines Bildes zur Verfügung steht, zu extrahieren und weiterzuverarbeiten. Das Bild kann dabei direkt mit der Kamera des jeweiligen Endgeräts aufgenommen, oder die zu analysierende Datei entsprechend aus dem Dateisystem des Geräts ausgewählt werden.

Für den Prozess der Texterkennung wird die Open Source und JavaScript-basierte Bibliothek *Tesseract.js* verwendet, welche sich auf ein *neuronales Netzwerk (LSTM)* stützt, um möglichst exakte Ergebnisse zu liefern.


Die folgende Abbildung veranschaulicht den allgemeinen Prozess (Ablauf) und Funktionsweise der Texterkennung:

<br/>

<div align="center">
    <img src="./assets/diagrams/ocr-process.svg" alt="OCR-Prozess">
</div>

<br/>

Der *OCR-Prozess* besteht dabei aus der *Datenvorverarbeitung*, bei dem das Bild beispielsweise begradigt und entzerrt (deskewed), sowie in Graustufen umgewandelt wird. Anschließend werden die einzelnen Zeilen, Wörter und Buchstaben erkannt, die mithilfe eines Trainingsdatensatzes einem entsprechendem Ranking von *Kandidatenzeichen* zugeordnet werden. Bei der *Nachbearbeitung* der erkannten Zeichen, werden die besten (wahrscheinlichsten) Buchstaben, aufgrund des im vorherigen Schritt ermittelten Konfidenzwerts, ausgewählt und Sprachdaten, wie z.B. Wörterbücher und Grammatikregelen entsprechend berücksichtigt.

<br/>

### Installation

<hr/>

<br/>

Die folgenden Ausschnitte veranschaulichen die Installation und Verwendung von Tesseract. Dabei wird mithilfe von *emscripten*, C- und C++-Code zu *WebAssembly* kompiliert, wodurch Tesseract im Webbrowser ausgeführt und die OCR-Engine entsprechend verwendet werden kann:

<br/>

```bash
npm install tesseract.js
```

<br/>

```JSX
import { createWorker } from 'tesseract.js';
```

<br/>

### Kassenbeleg/Kassabon

<hr/>

<br/>

Der zu analysierende Gegenstand ist ein herkömmlicher *Kassenbeleg/Kassabon*, welcher nach dem Einkauf (Bezahlvorgang) von Lebensmitteln entsprechend in einem Supermarkt erworben werden kann. Die folgende Abbildung veranschaulicht den möglichen Aufbau (Struktur), sowie Inhalt eines Kassenbelegs:

<br/>

<div align="center">
    <img src="./assets/img/receipt.jpg" alt="Kassenbeleg Beispiel" height="720px">
</div>

<br/>


**Mögliche Herausfoderungen & Lösungsansätze:**

Kassenbelege sind in der Regel für den Konsumenten selbst, als Überblick und Dokumentation der gekauften Produkte und nicht primär für technische Geräte, sowie für die digitale Weiterverarbeitung konzipiert. Entsprechend gestaltet sich die Extrahierung relevanter Informationen als Herausforderung, wodurch folglich Verfahren der Texterkennung benötigt werden. Die Genauigkeit der Ergebnisse hängt dabei stark von unterschiedlichen Faktoren, wie z.B. Schriftart und -Größe, Qualtität des Bildes und des Kassenbelegs, etc.

<br/>

**Aufbau & Struktur:**

Die Kassenbelege können abhängig von dem jeweiligen Supermarkt unterschiedlich aufgebaut und strukturiert sein, sowie unterschiedliche Informationen zu den einzelnen Produkten enthalten. Folglich muss der Texterkennungsprozess unabhängig von der Art des Kassenbelegs interagieren.

<br/>

**Irrelevante Informationen & Produktbezeichnungen:**

Auf dem Kassenbeleg können sich zusätzliche Informationen befinden, die für die Applikation nicht weiter relevant sind, wie z.B. Name und Adresse des Lebensmittelgeschäfts, sowie Art der Bezahlung, etc. Folglich generieren diese Informationen einen zusätzlichen Mehraufwand bei der Weiterverarbeitung der Daten, die sich negativ auf die Effizienz des eigentlichen Texterkennungsprozess auswirken kann.




