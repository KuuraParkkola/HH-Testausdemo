# Suorituskykytestaus demo

Grafana K6 on kätevä ja suhteellisen suoraviivainen suorituskykytestauksen työkalusalkku. Testit kirjoitetaan monille tutulla javascriptillä, mutta K6 ajaa pinnan alla GO-kieltä, mikä mahdollistaa nopeamman ja kevyemmän testauksen. K6 on hyvin dokumentoitu, kannattaa tutustua tarkemmin!

## Asennus

Työkalun asennusohjeet löydät allaolevan linkin takaa. Oikeastaan mitään muuta ei juuri tarvitsekaan tehdä.

https://grafana.com/docs/k6/latest/set-up/install-k6/

## Testien ajaminen

Testit voit ajaa komennolla

```
k6 run script.js
```

Tämä esimerkki toki kuvaa todellista testausta huonosti. Todellisuudessa kahta erillistä testiä ei tavallisesti kirjoitettaisi samaan tiedostoon, vaan kukin omaansa. Näin yhdessä tiedostossa implementoitaisiin käyttäjäskenaariot, eli muutama tapa joilla käyttäjät saattaisivat toimia vieraillessaan sivulla. Näitä skenaarioita monistamalla työkalu sitten generoi realistisenkaltaista verkkoliikennettä sivulle.
