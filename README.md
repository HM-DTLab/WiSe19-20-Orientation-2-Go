# G6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



<h2 style="color:#035642;"> Challenge Report zu "Orientation 2 Go" (??) [Name des Projekts/Titel ?]</h2>


<h3> Projektkontext </h3>
Dieses Projekt wurde im Rahmen der Veranstaltung "Software Engineering I" im Wintersemester 2019/20 des Bachelorstudiengangs "Informatik" unter der Aufsicht von Prof. Dr. Kofler und Prof. Dr. Socher (ausschreiben?) erstellt. Hierbei war die Alzheimer Gesellschaft München Partner des Projektes. Grobes Ziel dieser Aktion ist Demenzbetroffenen oder auch Angehörigen den Alltag mittels Digitalisierung/technischen Möglichkeiten zu erleichtern.

<h4> Alzheimer Gesellschaft München </h4>
Die Deutsche Alzheimer Gesellschaft e.V. Selbsthilfe Demenz (DAlzG) engagiert sich seit nun mehr als 30 Jahren für ein besseres Leben mit Demenz. Die Alzheimer Gesellschaft München ist dabei ein Ableger davon (glaub ich? :) ). Im Mittelpunkt für die Organisation steht hierbei Wissen über Demenz sowie Beratungs- und Unterstützungsangebote flächendeckend in Deutschland anzubieten. Neben der Aufklärungsarbeit ist die Unterstützung der Betroffenenen in Form von Hilfen zur Selbsthilfe wie auch Möglichkeiten zur Entlastung des Alltags von Angehörigen besonders wichtig. Zusätzlich stellen sie die Anlaufstelle für ehrenamtliche Helfer dar, die sich besonders engagieren wollen für Menschen mit Demenz. Sei es durch soziale Projekte oder auch finanziell mittels Spenden.
<br>

<h4> DTLab </h4>
// straight up copied von hm edu

Das Digital Transformation Lab (DTLab) der Hochschule München in Kooperation mit Amazon Web Services...

- organisiert curricular integrierte Praxisprojekte ("Challenges"), in denen Studierende an Problemen aus dem Bereich der Digitalisierung arbeiten, die von einer Institution des öffentlichen Sektors ("Partner") benannt wurden.

- bietet Studierenden aller Fakultäten die Möglichkeit, wichtige Fähigkeiten im Bereich der Digitalen Transformation zu entwickeln.
verfolgt dabei den Ansatz der Co-Creation, die Partner arbeiten also mit den Studierenden zusammen, um geeignete Lösungen zu entwickeln. Die Ergebnisse werden der Allgemeinheit unter einer Open Source-Lizenz zur Verfügung gestellt.

- ist Teil des Innovationsnetzwerks M:UniverCity , das die Hochschule München mit dem Strascheg Center for Entrepreneurship (SCE) und Partnern aus Wirtschaft, Politik und Gesellschaft betreibt


<h3> Einleitung </h3>
Auch wenn der Kontext durch die Kollaborationen durchaus gegeben ist, war am Anfang nicht unbedingt klar, an welcher Stelle man denn tatsächlich die Hilfe ansetzen kann. Uns wurde weitgehend komplett freigestellt, wie wir denn den Demenzbetroffenen oder -angehörigen helfen wollen, damit unserer Kreativität nichts im Wege steht. Grundlegendes Ziel war vor allem mittels technischen Hilfsmittel wie beispielsweise Smartphones den PatientInnen den Alltag zu erleichtern oder auch sonstwie Verantwortung abzunehmen und zu unterstützen. Über den Kontakt mit einem Betroffenenen brachten wir in Erfahrung, dass er selbst mittlerweile alle seine Bedürfnisse gedeckt hat über eine Vielzahl an Apps auf seinem Smartphone.

<h3> Problembeschreibung </h3>

Das einzige, was diesen Betroffenenen störte, sei nunmal eben diese große Anzahl an verschiedenen Apps, die er handhaben muss, anstatt einer einzelnen, die er für alles verwenden könnte. Wir hielten es allerdings für fraglich, ob diese Meinung besonders repräsentativ ist, da er doch im Unterschied zu den meisten älteren Menschen sehr technikaffin wirkte. Wie also wollen wir Demenzbetroffenen im Alltag unterstützen?   

<h3> Beschreibung der Idee </h3>

Über die Methode der "Crazy Eight", in der jedes Mitglied des Teams über acht Minuten jeweils eine Idee pro Minute niederschreiben muss, kamen einige Ideen zustande. Viele davon - geschuldet des Zeitdrucks - sehr schwierig umsetzbar in den nächsten Jahrzehnten/-hunderten, aber im Mittel war viel davon sehr brauchbar.

Wir entschieden uns im Folgenden für eine Orientierungsapp, die zusätzlich einen Kalender und die Möglichkeit zur Kontaktspeicherung implementiert, sodass wir einerseits viele nützliche Funktionenen in einer App vereinen, aber auch andererseits den Umgang mit der App einfacher gestalten wollten für Menschen, die nicht unbedingt an Technik gewöhnt sind.

Die App soll dem Betroffenenen dabei helfen pünktlich den richtigen Weg zu den eigenen Terminen zu finden. Weiterhin soll die App automatisch erkennen können, falls der Betroffene zu lange außerhalb eines gewissen Radius von seinem Zuhause oder dem Ort seines Termins entfernt ist. Diesen Zustand deklarierten wir als "verloren/orientierungssuchend". Nach einer eingestellten Zeitdauer oder bei Betätigung eines Knopfes in der App "Bring mich nach Hause" soll die App automatisch den Nutzer fragen, ob er derzeit verloren sei und falls ja, wird automatisch eine Route zu seinem voreingestellten Zuhause berechnet und angezeigt.

Gleichzeitig soll die App erkennen, wie lange man zu gespeicherten Terminen unterwegs ist, und soll einen dynamisch rechtzeitig erinnern, sodass man seinen Termin fristgerecht wahrnehmen kann/pünktlich aufbrechen kann.

Zusätzlich hielten wir die Möglichkeit von Kontakten als sinnvoll, da man dort dann bestimmte Angehörige einspeichern kann, die dann als Schnellfenster erreichbar sein können, falls man "verloren" ist und man jemanden anrufen will.

Da man doch eine beachtliche Anzahl an Einstellungen in einer solchen App hat, allerdings die meisten den Betroffenenen verwirren könnten, falls er derzeit sowieso verloren ist und nicht besonders technikaffin ist, entschieden wir uns dafür diese Einstellungen passwortgeschützt zu machen, sodass gegebenenfalls ein Pfleger oder Angehöriger diese Sachen für den Betroffenenen einstellt und der Patient bloß sehr wenige Knöpfe tatsächlich drücken kann.


<h3> Herangehensweise zur Umsetzung </h3>

Für dieses Projekt wurde explizit die "Working backwards"-Philosophie von Amazon getestet. Diese wurde im Rahmen der Veranstaltung ausführlich präsentiert. Dementsprechend wurde zu Beginn des Projekts viel Fokus gelegt auf die Sichtweise möglicher Kunde. Dies wurde über die Erstellung von Empathy Maps, Wireframes/Prototyping, User Storys, FAQs und einem Press Release erreicht.
In der tatsächlichen Entwicklungsphase kam dagegen SCRUM zum Einsatz.


<h3> Beschreibung der Lösung </h3>

Durch den Mangel an Zeit sind wir leider nicht zu allen Features gekommen, die wir uns vorgestellt haben. Trotzdem haben wir eine beachtliche Menge an Struktur geschaffen, an dem man in Zukunft weiterarbeiten kann.

1. persistenter Speicher der folgenden Einstellungen

  - Passwortgeschützt
  <br>
  <br>
  <img src="Home_Screen.png" width="200"/>
  <img src="Password.png" width="200"/>
  <img src="Sec_Settings.png" width="200"/>
  <br>
  <br>
  - Kontakte hinzufügbar, änderbar + löschbar
  <br>
  <br>
  <img src="Add_Contact.png" width="200"/>
  <img src="Change_Contact.png" width="200"/>
  <br>
  <br>
  - Heimatadresse speicherbar
  <br>
  <br>
  <img src="Input_Adress.png" width="200"/>
  <br>
  <br>

  - Maximaler Entfernungsradius, Timer & Synchronisierungsintervall einstellbar

2. Ausführbarkeit der App auf Android

3. "Bring mich nach Hause" ruft Google Maps Routenfindung mit Heimatadresse als Argument auf
<br>
<br>
<img src="Bring_Me_Home.png" width="200"/>
<br>
<br>

4. Etwas ansprechender designed mittels Angular Material

5. Service auf Android, der ohne die App offen zu haben, nach einer Minute automatisch Google Maps Routenfindung  öffnet

6. Grundlegende implementation des Kalenders
<br>
<br>
<img src="Calendar.png" width="200"/>
<br>
<br>

Neben der erwarteten Einarbeitungszeit in Angular floß auch einiges an Zeit in die Portierung auf das Smartphone, da dies nunmal unser eigentlicher Zielmarkt ist. Da wir uns dafür entschieden die App mittels Angular zu programmieren anstelle direkt in Android zu arbeiten, kam Cordova zum Einsatz, was zu einigen Komplikationen führte, besonders bei dem im Hintergrund laufendem Service.


<h3> Weiterführende Dokumente </h3>

| Allgemeine Übersicht | |
|-----------------|:-------------|
| [Press-Release](Press-Release.pdf)    | Fiktionaler Pressebericht mit Eckdaten, wie ein möglicher Release der Applikation auf dem Markt beschrieben werden könnte |
| [Frequently Asked Questions](FAQ.pdf/) | Fragen (und Antworten), die uns vor der eigentlichen Implementation aus Sicht eines möglichen Kunden gekommen sind, und die unsere Implementation maßgeblich beeinflusst haben|
| [User Storys](/User-Storys-G6.pdf) | Beispielhafte Geschichten, für welche Arten an Menschen und in welchem Kontext diese App hilfreich sein könnte       |
| [Wireframes](/Wireframe-G6.pptx/) | Anfängliche Demonstration eines Prototypen unser Applikation über Powerpoint Darstellung  |
| Ggf.     |       |


<h3> Nächste Schritte </h3>

Are there next steps planned? Does the team plan to continue the work? Will the sponsoring organization support or take over and continue the work?


<h3> Zusammenfassung </h3>

War lustig. Viel gelernt :) Danke dtlab? danke amazon? Team davor schon vorstellen?


<h3> Team </h3>

Unser Team besteht aus vier Menschen. Manuel Eberhar, Daniel Soukup, Tobias Karius und Thorsten Schartel. Eventuell am Ende Unser Team, bestehend aus [..] bedankt sich (?).
