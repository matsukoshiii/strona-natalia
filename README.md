# mgr Natalia Szymala — wsparcie rodzica online

Statyczna strona na GitHub Pages. Otwórz `index.html` lub uruchom `python3 -m http.server 8765`. Zasoby są lokalne, bez zależności, trackerów i zewnętrznych fontów.

## Aktualizacja 28.10.2026

Zmiany wynikają z materiałów z 23.10 oraz feedbacku Grzegorza i Natalii z 26.10:
- Treści Emocje/Zmysły według Natalii; usunięte słowo „psychobiologii”, pozostawione Recall Healing.
- Pełne nazwisko, „mgr” w nagłówku, czytelny monogram NS i dostosowana typografia.
- Poprawione opisy wartości i trzech kroków, ujednolicona forma „Rozumiemy i wspieramy”, znaczniki list i wskazane przecinki.
- Dwa przyciski „Umów spotkanie” z oknem kontaktowym; kontakt w osobnej sekcji i stopce.
- FAQ rozszerzone z pięciu do ośmiu pytań.
- Powiększona grafika w hero i okno z pełną grafiką, przewijane na telefonie.
- Blog z trzema krótkimi tekstami opartymi na pytaniach z materiałów Natalii; wymagają jej oceny redakcyjnej.
- Eksport odpowiedzi ankiety do TXT, instrukcja ręcznego przekazania e-mailem i poprawiony wydruk długich odpowiedzi.

## Kontakt i ankieta

Adres `nataliaszymala1989@gmail.com` pochodzi z oryginalnej wiadomości Natalii z 15.10.2026, przekazanej 23.10. Numer telefonu nie był podany w materiałach i nie został wymyślony.

Rezerwacja odbywa się w korespondencji, a link `mailto:` otwiera program pocztowy użytkownika. Ankieta nie wysyła odpowiedzi automatycznie, nie zapisuje ich na serwerze ani w localStorage. Odpowiedzi można wydrukować/zapisać do PDF lub pobrać jako TXT. Użytkownik przekazuje plik ręcznie po uzgodnieniu sposobu z Natalią. Żadne odpowiedzi nie trafiają do adresu URL wiadomości.

## Pozostałe elementy

- Uzupełnić telefon, jeśli ma być publiczny.
- Dostarczyć zapowiedziany portret Natalii.
- Do automatycznej wysyłki ankiet potrzebna jest skonfigurowana usługa odbierająca zgłoszenia; sam GitHub Pages obsługuje tę stronę statycznie.
- Sprawdzić nowe teksty bloga i ustalić docelowe informacje formalne przed przyjmowaniem ankiet na serwerze.

## Pliki

`index.html`, `style.css`, `script.js`, `assets/`, `dokumenty/`. Dostarczone PDF-y pozostawiono bez zmian.

## Weryfikacja aktualizacji

- Chromium: 320 / 390 / 820 / 1024 / 1440 px, brak poziomego overflow i błędów JavaScript.
- Menu mobilne, mapa z klawiatury, otwieranie i zamykanie okien, powrót fokusu, przewijanie grafiki na telefonie.
- Osiem pytań FAQ, poprawne kotwice nawigacji.
- Eksport TXT z polskimi znakami i wieloma liniami.
- Wydruk PDF z pełną długą odpowiedzią (100 powtórzeń tekstu testowego), bez ucięcia do wysokości textarea.
- `node --check script.js` i `git diff --check`.

Nie przeprowadzono rzeczywistej wysyłki e-mail ani rezerwacji; strona ich automatycznie nie wykonuje. Publikacja na GitHub Pages wymaga dostępu do zapisu w repozytorium.
