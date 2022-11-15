# translation_improved

Eine Chrome-Erweiterung die überprüft ob der Text der Webseite richtig übersetzt wurde (Englisch --> Deutsch).
Wenn ein Satz falsch übersetzt wurde, wird er korrigiert.
Es wird geprüft ob es richtiges Deutsch ist oder nicht.

Vorab wird ein gültiger GOOGLE-TRANSLATE-API-KEY gebraucht( zu bekommen in der Google-Cloud ).
Dieser muss in der Datei 'js/main.js' in Zeile 7042 eingefügt werden. (Bei einigen Editoren kann
es dabei Probleme geben(z.B. Kate oder Notepad {Liegt, denke ich, an der Grösse der Datei}).
Aber mit Vim oder Nano geht es auf jeden Fall. 

Dann chrome://extensions/ aufrufen und die entpackte Erweiterung in den Browser laden. 
Danach sollte im Contextmenu von Chrome der Eintrag 'Seite korrigieren' stehen.

Zusätzlich erforderlich ist die Chrome-Erweiterung: 'Web Server for Chrome':
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb

Bei diesem sollten alle Optionen aktiviert werden. Und zusätzlich noch unter 'Show Advanced Options' bei 'Set Cors headers' einen Haken setzen.
Der Server muss auf Port 8887 laufen. Sollte aber so voreingestellt sein.

Dann über 'Choose Folder' die Erweiterung laden. 
Über die locale IP kann man dann eine index.html mit ein paar falsch übersetzten Sätzen zum Testen laden. (127.0.0.1:8887/index_neu.html)
Funktioniert dann aber auf jeder Seite.

Bei einigen Seiten kann es einen kurzen Moment brauchen bis das Ergebnis sichtbar wird.
Je nach dem wie gross der Overhead der Seite ist.

Im Trainig erhielt ich eine Genauigkeit von 94%, es verallgemeinert aber sehr gut. Die meisten Sätze bis zu einer Länge von 50 Wörtern
werden gut erkannt.
Die Korrektur funktioniert mit aufgesetztem Text besser als z.B. mit erzählerischem wie in einer Geschichte.
Schwierig sind auch Sätze in denen Aufzählungen oder wörtliche Rede vorkommen.
Der Text wird auf jeden Fall lesbarer und viele Fehler werden korrigiert.

Content is licensed under the [Google BSD License](https://developers.google.com/open-source/licenses/bsd).
Kontakt: janmmzus@yahoo.com
