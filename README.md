# mgr Natalia Szymala — wsparcie rodzica online

Statyczna strona na GitHub Pages: https://matsukoshiii.github.io/strona-natalia/

Otwórz `index.html` lub uruchom `python3 -m http.server 8765`. Wszystkie grafiki, style, skrypty i dokumenty są lokalne. Bez zewnętrznych bibliotek, fontów, trackerów i procesu budowania.

## Aktualizacja 04.11.2026

Grafika w nagłówku jest większa bezpośrednio w układzie strony: około 750 px przy ekranie 1440 px, zamiast wcześniejszych 450 px. Usunięto przycisk powiększania, osobne okno podglądu i etykiety zasłaniające obraz. Na węższym ekranie grafika zajmuje szerokość swojej kolumny, a jej główna myśl pozostaje dostępna także jako czytelny tekst.

Pozostałe poprawki:
- Opisy obszarów współdzielą miejsce dopasowane do najdłuższej treści. Przełączanie mapy nie przesuwa grafiki, przycisków ani kolejnej sekcji.
- Zdjęcie przy rozwijanych sytuacjach ma niezależną pozycję; obrazy w kartach mają zarezerwowaną przestrzeń i prawidłowe proporcje.
- Sekcje pytań, bloga i ankiety rozwijają się płynnie, obsługują szybkie ponowne kliknięcia i ustawienie ograniczonego ruchu. Rozwinięcie jednej sytuacji nie zamyka automatycznie innej.
- Efekty powiększania zdjęć po najechaniu są wyłączone dla dotyku. Odsłanianie sekcji jest łagodniejsze i nie koliduje z późniejszymi interakcjami.
- Okna kontaktowe zachowują szerokość strony, pozycję przewijania i fokus. Tło jest blokowane również przez stałe pozycjonowanie, z myślą o Safari na iOS.
- Dodano „Przed spotkaniem” do menu, poprawiono wskazywanie aktualnej sekcji i dostęp do dłuższego menu na niskich ekranach.
- Pola formularza mają czcionkę 16 px, żeby uniknąć automatycznego przybliżania podczas wpisywania na iPhonie. Akcja czyszczenia jest mniej dominująca.
- Zachowano zatwierdzone treści Natalii, ceny i dotychczasowy kierunek wizualny; dopracowano gramatykę i czytelność.

## Kontakt i ankieta

Kontakt: `nataliaszymala1989@gmail.com`, zgodnie z materiałami Natalii. Numeru telefonu nie było w dostarczonych danych.

Przyciski „Umów spotkanie” otwierają dane kontaktowe. Termin i szczegóły są ustalane w korespondencji. Link `mailto:` otwiera program pocztowy użytkownika.

Ankieta nie wysyła ani nie przechowuje odpowiedzi na serwerze lub w localStorage. Odpowiedzi można wydrukować, zapisać jako PDF lub pobrać jako TXT. Użytkownik dołącza zapisany plik ręcznie po uzgodnieniu sposobu przekazania z Natalią. Żadne odpowiedzi nie trafiają do adresu URL wiadomości. Bez JavaScript dostępne są dokumenty PDF i kontakt e-mail.

## Weryfikacja

Chromium, w tym emulacja dotyku i mobilnego widoku:
- 320 / 375 / 390 / 430 / 680 / 768 / 820 / 1024 / 1100 / 1150 / 1280 / 1440 / 1920 px: bez poziomego przepełnienia i błędów JavaScript.
- Stała wysokość mapy i pozycja jej przycisków dla wszystkich pięciu obszarów na każdej z tych szerokości.
- Stała pozycja zdjęcia przy rozwijaniu sąsiedniego tekstu w układzie dwukolumnowym.
- Okna kontaktowe bez przesunięcia poziomego, z przywracaniem przewijania i fokusu.
- Menu mobilne, obsługa mapy klawiaturą, poprawne kotwice i grafiki.
- Szybkie otwieranie/zamykanie sekcji z włączonymi animacjami; brak pozostawionych animacji i wymuszonej wysokości.
- Eksport TXT z polskimi znakami i wieloma liniami oraz wydruk pełnej długiej odpowiedzi.
- `node --check script.js` i `git diff --check`.

Testy nie zastępują sprawdzenia na fizycznym iPhonie. Nie wykonują rzeczywistej wysyłki wiadomości ani rezerwacji.

## Pliki i dalsze uzupełnienia

`index.html`, `style.css`, `script.js`, `assets/`, `dokumenty/`. Dostarczone PDF-y zachowano bez zmian. Wersjonowane adresy CSS i JS ułatwiają pobranie aktualizacji po publikacji.

Do późniejszego uzupełnienia: telefon, zapowiedziany portret Natalii i skonfigurowana usługa odbierająca ankiety, jeśli potrzebna będzie automatyczna wysyłka. Trzy krótkie teksty bloga pozostają do oceny redakcyjnej Natalii.
