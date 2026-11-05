# Kuchapka

Osobní kuchařka jako instalovatelná PWA. Recepty, nákupní seznam, režim vaření,
časovače a statistiky vaření. Data zůstávají v telefonu.

## Spuštění lokálně

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Service worker a instalace appky fungují jen přes https nebo localhost.

## Nasazení

```bash
./build.sh
```

Vzniklý `kuchapka.zip` nahraj na Netlify do **stejného projektu** (Deploys →
nahrát ZIP). Nový projekt znamená novou adresu a tím i prázdné úložiště.

## Co appka umí

- recepty s kategoriemi, hledáním podle názvu a přepočtem porcí
- označení surovin ke koupi a jejich přenos na nákupní seznam
- nákupní seznam tříděný podle regálů, s ruční úpravou množství,
  vlastními položkami a sdílením přes systémové sdílení (WhatsApp)
- režim vaření: krok přes celou obrazovku, suroviny po ruce, displej nezhasne
- časovače odvozené z textu kroku („duste 20–25 minut“)
- záznam, kdy byl recept uvařen, a statistiky za měsíc/rok/celou historii
- světlý a tmavý režim
- záloha a obnova receptů do JSON souboru
