# Kuchapka — kontext projektu

Osobní kuchařka jako PWA. Běží na Netlify, instaluje se přes Chrome jako appka.
Data jen lokálně v prohlížeči, žádný účet, žádný server, žádné sdílení mezi zařízeními.

## Soubory

| soubor | role |
|---|---|
| `index.html` | jen kostra a markup pohledů, žádný inline CSS/JS |
| `styles.css` | všechny styly, barvy jen přes CSS proměnné na `:root` |
| `app.js` | celá logika, žádný build step, žádné moduly, prostý skript |
| `sw.js` | service worker, **network first** |
| `manifest.json` | PWA manifest |
| `_headers` | Netlify: Content-Type pro manifest a sw.js |
| `build.sh` | zabalí `kuchapka.zip` pro Netlify |

## Pravidla, která drž

- **Celé UI je česky.** Včetně hlášek, prázdných stavů a popisků.
- **Skloňování** přes `plural(n, one, few, many)`. Nikdy natvrdo „4 porce“.
- **Build číslo** je v patičce `index.html` (`build N`). Po každé změně ho zvedni —
  slouží k ověření, že na telefonu běží nová verze.
- **Úložiště** je `localStorage`, klíče `kucharka_*`. Nepřidávej cloud ani účty.
  Jediná výjimka: položky nákupu z hodin (Panel) chodí přes ntfy.sh — schránka
  s náhodným názvem z kódu na hodinách, potvrzení převzetí do `<schránka>-ack`.
- **Android aplikace** se staví v repozitáři Stihnu-to (modul `kuchapka`) z těchto
  souborů; v ní je `window.KuchapkaAndroid` (sdílení, záloha, displej, schránka hodin).
- **Service worker musí zůstat network first.** Cache-first verze způsobila, že se
  nová nasazení neprojevila.
- **Nové soubory přidej do `ASSETS` v `sw.js`** i do `FILES` v `build.sh`.
- Žádné CDN ani webfonty — appka musí fungovat offline.

## Doménové konvence

- Recepty: suroviny v **lžících, lžičkách a gramech**, ne v ml.
- Suroviny se dělí do pojmenovaných skupin (`Marináda`, `Omáčka`, `Suroviny`).
  Skupina, jejíž název obsahuje „potřebujete“ nebo „pomůcky“, se **nedává na nákupní seznam**.
- Postupy piš **neutrálně a spisovně** („Přidejte“, ne „hoď tam“), i když zdroj tyká.
- Kroky mají popisný název, ne „Krok 1“.

## Nákupní seznam

- V receptu se klepnutím označuje, co je **potřeba koupit** (ne co je doma).
- Příspěvek každého receptu je v položce uložený zvlášť pod `parts[].id`,
  takže opakované přidání množství **přepíše, nesečte**.
- `override` je ručně zadané množství a má přednost před výpočtem.
- Položky se třídí do regálů podle `SEKCE` v `app.js` — pořadí odpovídá trase obchodem.

## Testování

Není tu test runner. Před nasazením:

```bash
./build.sh            # kontroluje syntaxi app.js a zabalí ZIP
```

Logiku, kterou nejde ověřit okem (parser časů, kategorizace surovin, slučování
nákupního seznamu), ověřuj malým skriptem v Node proti reálným datům z `app.js`,
ne odhadem.

## Nasazení

`./build.sh`, pak na Netlify do **stejného projektu** → Deploys → nahrát ZIP.
Nový projekt = nová adresa = prázdná appka bez uložených receptů.
