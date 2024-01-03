# Overzicht


## Naam en Acroniemen

CIM-OP: Conceptueel Informatiemodel Officiële Publicaties binnen de context van de DSO-LV.

## Informele beschrijving

### Definitie

Een aantal begrippen omvat de definitie van het domein van het Conceptuel Informatiemodel Officiële Publicaties (CIM-OP).

**STOP**: Standaard Officiële Publicaties

**Officiële Publicatie**: De bekendmaking in een Officieel publicatieblad. (Bron STOP).

**Publicatieblad**: Een van de bekendmakingsbladen waarin de officiële publicaties bekend gemaakt worden. (Bron STOP).

**DSO**: Digitaal Stelsel Omgevingswet

**LVBB**: De landelijke voorziening voor het bekendmaken en beschikbaar stellen van besluiten (officiele publicaties)

**DSO-LV**: De landelijke voorziening voor het digitaal ondersteunen van de Omgevingswet

CIM-OP bekijkt de informatiekundige inhoud van dit domein in zoverre dat dit in STOP is uitgewerkt en een rol speelt binnen het functioneren van de DSO-LV.

### Beschrijving

CIM-OP beschrijft de integratie van de informatie, data, van de Landelijke voorziening bekendmaken en beschikbaar stellen (LVBB) en de landelijke voorziening DSO-LV.

Voor het beeld van die integratie of beter koppeling is het goed om een beeld van beide voorzieningen te hebben. We maken daarbij gebruik van beschrijvingen zoals ze zijn opgenomen in het DSO architectuur document DSO-LV/LVBB diensten en informatiestromen per applicatiecluster.

**LVBB**

De landelijke voorzieningen voor het bekendmaken en beschikbaarstellen van officiele publicaties. De LVBB ontvangt alle besluiten van het bevoegd gezag, maakt daar officiële bekendmakingen van en stelt de nieuwe toestanden van geconsolideerde regelingen samen. De toestanden die hier ontstaan moeten planmatig worden doorgeleverd aan DSO-LV en op verzoek ook worden terug geleverd aan het bevoegd gezag.

<figure id="Figuur_1">
<img src="media/LVBB-architectuur.png" alt="">
<figcaption>Context applicatiecluster Landelijke voorziening bekendmaken en beschikbaarstellen (LVBB) (bron: [[OGAS]])</figcaption>
</figure>

**Ozon**

Ozon wordt via het bronhouderskoppelvlak voor juridische regels (LVBB) geïnformeerd over nieuwe regelingversies en zorgt voor validatie, objectvorming en registratie. De objecten die ontstaan worden binnen de landelijke objectstructuur ingepast en uitgeleverd via API’s die zijn afgestemd op verschillende doelgroepen.

<figure id="Figuur_2">
<img src="media/OZON-architectuur.png" alt="">
<figcaption>Context applicatiecluster Objectgerichte Ontsluiting Omgevingsdocumenten (Ozon) (bron: [[OGAS]])</figcaption>
</figure>

In onderstaand figuur wordt een overzicht gegeven van de informatie-uitwisseling tussen verschillende componenten inclusief de LVBB en de DSO-LV met Ozon.

<figure id="Figuur_3">
<img src="media/Informatieuitwisseling LVBB-DSO-LV.png" alt="">
<figcaption>Overzicht informatie-uitwisseling tussen LVBB en DSO-LV (bron: [[OGAS]])</figcaption>
</figure>

Binnen de context van de LVBB beschrijft de STOP standaard het informatiekundig perspectief en binnen DSO-LV is CIM-OW en IMOW de leidende informatiestandaard. Maar voor een effectieve ontsluiting van het dataproduct omgevingsdocument is een gedeeltelijke combinatie van beide en een afhankelijkheid van beide nodig. Het CIM-OP beschrijft die combinatie en afhankelijkheid vanuit het perspectief van de DSO-LV. Deze wordt in dit document de view van DSO-LV op STOP genoemd.

Onderstaand figuur geeft op hoofdlijn de relatie tussen kern-objecttypen uit CIM-OP en CIM-OW.

<figure id="Figuur_4">
<img src="media/CIMOP-CIMOW koppeling.png" alt="">
<figcaption>Relatie tussen kern-objecttypen uit CIM-OP en CIM-OW</figcaption>
</figure>

#### Use-cases voor CIM-OP

Het CIM-OP heeft als algemene use case (gebruikstoepassing) het vastleggen van  informatiekundige relaties tussen functionaliteiten in de DSO-LV en de gegevens binnen STOP. Om dit concreter te maken is hier beneden een lijst opgenomen met specifieke use cases of vragen die door CIM-OP beantwoord moeten worden.

- Ideeënontwikkeling voor de samenhang en afstemming tussen STOP en CIM-OW.
- Ideeënontwikkeling voor de CIM-OW gerichte functionaliteit in DSO-LV inclusief bevragings- en presentatiefunctionaliteit gerelateerd aan STOP.

Voorbeeld van een aantal specifieke situaties waar de CIM-OP informatietechnisch kan ondersteunen:
- De relatie tussen CIM-OW objecten en besluiten moet traceerbaar zijn. Als een gebruiker vanuit de viewer op de tekst van een artikel klikt is het zinvol om uiteindelijk uit kunnen komen bij de wetstechnische informatie in het LVBB. Hiervoor moet er uit het CIM-OW een koppeling kunnen worden gelegd naar de juiste objecten in het CIM-OP.
- Als het bevoegd gezag twee besluiten neemt op basis van dezelfde regelingversie is er sprake van samenloop. In dat geval moet het bevoegd gezag los een consolidatie aanleveren. Hoe dit moet, en welke OW-objecten horen daar bij.
- Het intrekken van een regeling (via een besluit) moet leiden tot het niet meer hebben van gerelateerde CIM-OW objecten DSO-LV.
-  (mogelijk via wid van tekstobjecten).
- Consolidatie van CIM-OW objecten moet traceerbaar zijn naar besluiten.
- Relatie tussen regelingversie en CIM-OW object moet traceerbaar zijn.
- ...


## Normatieve referenties

CIM-OP verwijst normatief naar een aantal standaarden.

 - MIM - Metamodel Informatie Modellering [[!MIM]].
 - Basisgeometrie [[!Basisgeometrie]].
 - Conceptueel Informatiemodel Omgevingswet [[!CIMOW]].
 - Informatiemodel Omgevingswet [[!IMOW]].
 - Standaard Officiële Publicaties [[!STOP20]].

## Termen en definities

Lijst van termen en definities die in deze beschrijving worden gehanteerd.

<aside class="note">
Nog invullen of weglaten. Worden er in dit document nieuwe begrippen gedefinieerd?
</aside>

 - <dfn>geo-informatie</dfn>: Gegevens met een directe of indirecte referentie naar een plaats ten op gezichte
van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)

OPMERKING Geo-informatie is synoniem aan geografische informatie

## Symbolen en afkortingen

- **API** Application Programming Interface
- **CIM-OP** Conceptueel Informatiemodel Officiële Publicaties
- **CIM-OW** Conceptueel Informatiemodel Omgevingswet
- **DSO** Digitaal Stelsel Omgevingswet
- **DSO-LV** Digitaal Stelsel Omgevingswet - Landelijke Voorziening
- **FRBR** Functional Requirements for Bibliographic Records
- **LVBB**: Landelijke Voorziening Bekendmaken en Beschikbaarstellen
- **MIM** Metamodel voor Informatiemodellen
- **OGAS** Overall Globale Architectuur Schets 
- **Ozon**: Objectgerichte Ontsluiting Omgevingsdocumenten
- **STOP** Standaard Officiële Publicaties
- **TPOD** Toepassingsprofiel Omgevingsdocumenten
- **UML** Universal Modeling Language

