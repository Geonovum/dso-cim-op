# Overzicht


**Dit hoofdstuk beschrijft kenmerken van deze Dataspecificatie.**

## Naam en Acroniemen


CIMOP-dso: Conceptueel Informatiemodel Officiële Publicaties binnen de context van het DSO.

## Informele beschrijving

### Definitie

Een aantal begrippen omvat de definitie van het domein van het Conceptuel Informatiemodel Officiële Publicaties - DSO (CIMOP-dso).

**STOP**: Standaard Officiële Publicaties

**Officiële Publicatie**: De bekendmaking in een Officieel publicatieblad. (Bron STOP).

**Publicatieblad**: Een van de bekendmakingsbladen waarin de officiële publicaties bekend gemaakt worden. (Bron STOP).

**DSO**: Digitaal Stelsel Omgevingswet

CIMOP bekijkt de informatiekundige inhoud van dit domein in zoverre dat dit in STOP is uitgewerkt en een rol speelt binnen het functioneren van het DSO.

### Beschrijving

CIMOP-dso beschrijft de integratie van de informatie, data van de Landelijke voorziening Bekendmaking Besluiten (LVBB) en de landelijke voorziening OZON.

Voor het beeld van die integratie of beter koppeling is het goed om een beeld van beide voorzieningen te hebben. We maken daarbij gebruik van beschrijvingen zoals ze opgenomen in het DSO architectuur document DSO-LV/LVBB diensteneninformatiestromen per applicatiecluster.


<aside class="note">
Hier had ik graag een architectuur plaat over de ketenuitwisseling tussen LVBB en OZON. Is die er?
</aside>

**LVBB**

De landelijke voorzieningen voor het bekendmaken en beschikbaarstellen van officiele publicaties. DeLVBBontvangt alle besluiten van het bevoegd gezag, maakt daar officiële bekendmakingen van en stelt denieuwetoestanden van geconsolideerde regelingen samen. De toestanden die hier ontstaan moeten planmatigworden doorgeleverd aan DSO-LV en op verzoek ook worden terug geleverd aan het bevoegd gezag.


<figure id="Figuur_1">
<img src="media/LVBB-architectuur.png" alt="">
<figcaption>Context applicatiecluster Landelijke voorziening bekendmaken en beschikbaarstellen (LVBB) (bron: OGAS)</figcaption>
</figure>

**OZON**

Ozon wordt via het bronhouderskoppelvlak voor juridische regels (LVBB) geïnformeerd over nieuweregelingversies en zorgt voor de benodigde inwinning en validatie van OW-informatie, objectvormingenregistratie. De objecten die ontstaan worden binnen de landelijke objectstructuur ingepast en uitgeleverdviaAPI’s die zijn afgestemd op verschillende doelgroepen.


<figure id="Figuur_2">
<img src="media/OZON-architectuur.png" alt="">
<figcaption>Context applicatiecluster Objectgerichte Ontsluiting Omgevingsdocumenten (Ozon) (bron: OGAS)</figcaption>
</figure>


Binnen de context van de LVBB beschrijft de STOP standaard het informatiekundigperspectief en binnen OZON is IMOW de leidende informatiestandaard. Maar voor een effectieve ontsluiting van het dataproduct omgevingsdocument is een gedeeltelijke combinatie van beide en een afhankelijkheid van beide nodig. Het CIMOP-dso beschrijft die combinatie en afhankelijkheid vanuit het perspectief van het DSO. Deze wordt in dit document de view van DSO op STOP genoemd.

#### Use-cases voor CIMOP-dso

Het CIMOP-dso heeft als algemene use case (gebruikstoepassing) om informatiekundige relaties te leggen tussen functionaliteiten in DSO en de gegevens binnen STOP. Om dit concreter te maken is hier beneden een lijst opgenomen met specifieke use cases of vragen die door CIMOP-dso beantwoord moeten worden.

<aside class="note">
Vul lijst aan. Kan zijn vanuit bevraging, viewer, consistentie, validatie enz
</aside>

- ..iets met consolidatie..
- ..iets met bevraging..
- Als ik vanuit de viewer op de tekst van een artikel klik wil ik uiteindelijk uit kunnen komen bij de wetstechnische informatie in het LVBB. Hiervoor moet er uit het IMOW een koppeling kunnen worden gelegd naar de juiste objecten n het CIMOP 
- Als het bevoegd gezag twee besluiten neemt op basis van dezelfde regelingversie is er sprake van samenloop. In dat geval moet het bevoegd gezag los een consolidatie aanleveren. Hoe dit moet, en welke OW-objecten daar bij horen zou ik graag willen terugzien in dit model

- Het intrekken van een regeling (via een besluit) moet leiden tot het intrekken van IMOW objecten in de DSO-LV.
- De relatie tussen IMOW objecten en besluiten moet traceerbaar zijn. (mogelijk via wid van tekstobjecten).
- Consolidatie van IMOW objecten moet traceerbaar zijn naar besluiten.
- Relatie tussen regelingversie en IMOW object moet traceerbaar zijn.
- ...


## Normatieve referenties

Verwijder referenties die niet van toepassing zijn of vul referenties aan.

 - Basisgeometrie
 - Conceptueel Informatiemodel Omgevingswet (CIMOW)
 - Informatiemodel Omgevingswet (IMOW)
 - Standaard Officiële Publicaties (STOP)



## Termen en definities

Lijst van termen en definities die in deze beschrijving worden gehanteerd.

<aside class="note">
Nog invullen
</aside>


(13) Geo-informatie

Gegevens met een directe of indirecte referentie naar een plaats ten op gezichte
van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)

OPMERKING Geo-informatie is synoniem aan geografische informatie

## Symbolen en afkortingen

Lijst van afkortingen en acroniemen die worden gehanteerd in deze
dataspecificatie.

**CIMOW**: Conceptueel Informatiemodel Omgevingswet

**IMOW**: Informatiemodel Omgevingswet

**LVBB**: Landelijke Voorziening Bekendmaken en Beschikbaarstellen

**Ozon**: Objectgerichte Ontsluiting Omgevingsdocumenten

**STOP**: Standaard Officiële Publicaties
