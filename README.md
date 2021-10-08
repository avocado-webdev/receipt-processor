# Receipt Processor

<br/>

Die Applikation *Receipt Processor* versucht mithilfe der Verfahren der *Texterkennung (OCR - Optical Character Recognition)*, relevante Informationen aus einem Kassenbeleg, welcher in Form eines pixelbasierten Bildes zur Verfügung steht, zu extrahieren und weiterzuverarbeiten. Das Bild kann dabei direkt mit der Kamera des jeweiligen Endgeräts aufgenommen, oder die zu untersuchende Datei entsprechend aus dem Dateisystem des Geräts ausgewählt werden.

Für den Prozess der Texterkennung wird die open-source und JavaScript-basierte Bibliothek *Tesseract.js* verwendet, welche mithilfe eines auf LSTM-basierten *neuronalen Netzwerks* versucht, möglichst exakte und akkurate Ergebnisse zu liefern.

<br/>

### Kassenbeleg/Kassabon

<hr/>

<br/>

Der zu untersuchende Gegenstand ist der *Kassenbeleg/Kassabon*, welcher nach dem Einkauf (Bezahlvorgang) von Lebensmitteln entsprechend in einem Supermarkt erworben werden kann. Die folgende Abbildung veranschaulicht den möglichen Aufbau (Struktur), sowie Inhalt eines Kassenbelegs:

<br/>

<div align="center">
    <img src="./assets/img/receipt.jpg" alt="Kassenbeleg Beispiel" height="720px">
</div>

<br/>


**Mögliche Herausfoderungen & Lösungsansätze:**

Der folgende Absatz beschreibt die grundlegende Herausforderungen, die mit der Analyse von Kassenbelegen auftreten können, sowie mögliche Lösungsansätze, die im weiteren Verlauf des Recherchierungs- und Implementierungsprozesses ausgearbeitet werden sollen.

Kassenbelege sind in erster Linie für den Konsumenten selbst und nicht für die technischen Geräte konzipiert. Diese sollen lediglich einen Überblick über die gekauften Produkte und deren Preise vermitteln und werden vom Lebensmittelgeschäft aufgrund der Belegerteilungspflicht dem Konsumenten ausgehändigt.

<br/>

**Aufbau & Struktur:**

Die Kassenbelege können abhängig von dem jeweiligen Supermarkt unterschiedlich *aufgebaut* und *strukturiert* sein, sowie unterschiedliche Informationen über die einzelnen Produkte enthalten. Folglich muss die Applikation unabhängig von dem Kassenbeleg interagieren können und der Texterkennungsprozess nicht wesentlich vom Aufbau und der Struktur beeinträchtigt werden.

<br/>

**Irrelevante Informationen & Produktbezeichnungen:**

Auf dem Kassenbeleg befinden sich zusätzliche Informationen, die für die Applikation nicht weiter relevant sind, wie z.B. Name und Adresse des Lebensmittelgeschäfts, sowie Art der Bezahlung, etc. Folglich können diese Informationen einen zusätzlichen Mehraufwandin in der Weiterverarbeitung generieren und die Effizienz der Texterkennung negativ beeinflussen. 

Zudem können die Produkte unterschiedliche Bezeichnungen besitzen, bzw. mehr oder weniger genau beschrieben werden. Folglich wird die Klassifizierung der Lebensmittel erschwert - die Art des Produkts selbst und nicht dessen Bezeichnung ist für die Applikation von Interesse.




