# Systeemitestausesimerkki

Playwright on monipuolinen nopea ja melko luotettava työkalu nettisivujen 'end-to-end' testaamiseen. Playwright on Microsoftin kehittäjien luoma avoimen lähdekoodin ohjelma, joka sisältää monenlaisia testaajan elämänlaatua kohentavia ominaisuuksia.

## Asentaminen

Asennus onnistuu, muiden yarn-projektien tavoin, komennolla

```
yarn install
```

Tämä todennäköisesti asentaa myös Playwrightin käyttämät selaimet, jos ei, niin voit koittaa komentoa

```
yarn playwright init
```

Uusi playwright-projekti luodaan komennolla

```
yarn create playwright
```

Lisätietoa ja dokumentaatiota löytyy allaolevasta osoitteesta. Tämäkin työkalu on hyvin dokumentoitu, kannattaa siis tutustua mitä kaikkea tällä voi tehdä. Voihan tällä tehdä vaikka web crawlereita tai jotain muuta hauskaa.

https://playwright.dev/docs/

## Käyttö

Testit ajetaan komennoilla

```
yarn playwright test
yarn playwright test --ui
```

`--ui` lippu avaa kätevän selainpohjaisen käyttöliittymän, joka tekee testien debuggaamisesta helpompaa.

Testiraportin saa auki komennolla

```
yarn playwright show-report
```

Kannattaa myös koittaa kätevää testikoodigeneraattoria. Tämän saa auki komennolla

```
yarn playwright codegen
```
