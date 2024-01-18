# Inleiding

## Algemeen: Conceptuele Informatiemodellen van het DSO

In een stelsel van samenhangende voorzieningen, zoals het Digitaal Stelsel Omgevingswet (DSO), is semantische interoperabiliteit essentieel om de verschillende stelselonderdelen in staat te stellen relevante informatie op een betekenisvolle manier met elkaar uit te wisselen. Voor de dienstverlening rondom de Omgevingswet moet altijd duidelijk zijn welke betekenis wordt toegekend aan woorden (begrippenkader) en wat de relatie is tussen begrippen, vanuit de inhoud van die begrippen (semantische relaties). 
Dit modelleren we in conceptuele informatiemodellen (CIM) die een relatief stabiel raamwerk voor het werken onder architectuur en de basis voor de implementatie biedt.


<aside class="note">

**Conceptuele informatiemodellen (CIMs) – Definitie volgens MIM**

Een conceptueel informatiemodel beschrijft de modellering van de werkelijkheid binnen het beschouwde domein door middel van de beschrijving van welke informatie (data met betekenis en structuur) een rol speelt. Een conceptueel informatiemodel is hierbij onafhankelijk van het ontwerp van en de implementatie in systemen. Het geeft een zo getrouw mogelijke beschrijving van die werkelijkheid en is in natuurlijke taal geformuleerd.
Een dergelijk model definieert het ‘wat’: welke 'onderwerpen van gesprek' ('concepten', 'dingen’) worden onderscheiden in de beschouwde werkelijkheid. Wat betekenen zij, hoe verhouden ze zich tot elkaar en welke informatie is daarvan relevant. Deze informatie wordt gemodelleerd als informatieobjecten met eigenschappen/kenmerken, oftewel waarvoor data beschikbaar is (of zal zijn) en wordt ondergebracht in een informatiemodel. Dit informatiemodel dient als taal waarmee domeinexperts kunnen communiceren met informatieanalisten en verschaft een eenduidige interpretatie van die werkelijkheid ten behoeve van deze communicatie.

Met conceptueel wordt niet bedoeld abstract of hoog over, de beschrijvingen van de informatie die beschikbaar is zijn heel precies en concreet.

Een conceptueel informatiemodel wordt opgesteld voor gebruik door mensen, zodat ‘de business’ en de ICT-specialisten elkaar (gaan) begrijpen voor wat betreft de informatie die in het domein wordt geregistreerd en/of kan worden uitgewisseld.
</aside>



Binnen DSO worden verschillende informatiedomeinen onderkend: elk informatiedomein groepeert informatieobjecten met maximale samenhang en vormt logische bouwblokken voor de informatievoorziening van DSO.  
De informatiedomeinen zijn de basis voor de indeling van de informatiemodellen. Elk informatiedomein wordt op conceptueel niveau beschreven door een conceptueel informatiemodel (CIM) dat richting geeft aan de uitwerking van het informatiedomein en de samenhang met aanpalende domeinen borgt.

<figure id="Figuur_0">
<img src="media/Stelsel van CIMs.png" alt="">
<figcaption>Samenhang tussen conceptuele informatiemodellen binnnen DSO.</figcaption>
</figure>

De onderstaande conceptuele informatiemodellen zijn beschikbaar. De modellen zijn in verschillende stadia van ontwikkeling en de links kunnen zowel naar ontwikkel- als publicatieversies verwijzen.

 - [CIM-AM](https://geonovum.github.io/dso-cim-am/): Conceptueel Informatiemodel Aanvragen en Meldingen.
 - [CIM-BHKV](https://geonovum.github.io/dso-cim-bhkv/): Conceptueel Informatiemodel Bronhouderkoppelvlak.
 - [CIM-HLP](https://geonovum.github.io/dso-cim-hlp/): Conceptueel Informatiemodel Help en Ondersteuning.
 - [CIM-MAC](https://geonovum.github.io/dso-cim-mac/): Conceptueel Informatiemodel Machtigen.
 - [CIM-OI](https://geonovum.github.io/dso-cim-oi/): Conceptueel Informatiemodel Omgevingsinformatie.
 - [CIM-OW](https://geonovum.github.io/dso-cim-ow/): Conceptueel Informatiemodel Omgevingswet.
 - [CIM-OP](https://geonovum.github.io/dso-cim-op/): Conceptueel Informatiemodel Officiële Publicaties. 
 - [CIM-ORG](https://geonovum.github.io/dso-cim-org/): Conceptueel Informatiemodel (Overheids-)Organisaties.
 - [CIM-PDC](https://geonovum.github.io/dso-cim-pdc/): Conceptueel Informatiemodel Producten- en Dienstencatalogus.
 - [CIM-SWF](https://geonovum.github.io/dso-cim-swf/): Conceptueel Informatiemodel Samenwerkfuctie.
 - [CIM-TR](https://geonovum.github.io/dso-cim-tr/): Conceptueel Informatiemodel Toepasbare Regels. .
 
Alhoewel elk conceptueel informatiemodel één informatiedomein afbeeldt, zijn er dwarsverbanden en afhankelijkheden tussen de verschillende domeinen. De conceptuele informatiemodellen worden derhalve in samenhang beheert en ontwikkelt, teneinde de semantische interoperabiliteit in en met het DSO te kunnen waarborgen.
Dit document bevat de vastlegging en beschrijving van het Conceptuele Informatiemodel Officiële Publicaties (CIM-OP).

## CIM-OP
In het Digitaal Stelsel Omgevingswet wordt als serviceproduct de tekstuele en
ruimtelijke informatie van omgevingsdocumenten ontsloten. Dit serviceproduct is
datagericht en legt de focus op de geannoteerde informatie. De informatie
waarmee een omgevingsdocument bevraagbaar en analyseerbaar wordt gemaakt in een
digitale omgeving. De locatie, of geo-informatie, is voor het Digitaal Stelsel Omgevingswet - Landelijke Voorziening (DSO-LV) de basis
voor het weergeven en bevraagbaar maken van een omgevingsdocument. De
compleetheid van de informatie van een omgevingsdocument vanuit het perspectief van de opsteller is pas gegarandeerd
als ook de bijbehorende inhoud van de artikelen of tekstonderdelen wordt
weergegeven. Tekst, annotatie en locatie vormen in hun drie-eenheid de
volledige informatie die de opsteller tracht over te brengen. Voor de tekst en de juridische informatie ligt de focus
bij de Standaard Officiële Publicaties (STOP) [[STOP20]]; deze standaard wordt beheerd
door KOOP. Voor annotatie en locatie-gericht bevragen bij de standaard
Informatiemodel Omgevingsdocumenten (IMOW) [[IMOW]], beheerd door Geonovum.

Vanuit het perspectief van het DSO-LV is er een view nodig op STOP waarbij het STOP model gedefinieerd wordt vanuit de functionaliteit die voor de DSO-LV nodig is. Deze view wordt gespecificeerd met dit Conceptueel Informatiemodel Officiële Publicaties (CIM-OP). Het CIM-OP is een UML informatiemodel dat op conceptueel niveau STOP in relatie brengt tot het CIM-OW en de toepassing daarvan in de DSO-LV. Alle voor de DSO-LV benodigde en in STOP aanwezige semantiek en functionaliteit is in het CIM-OP beschreven. CIM-OP is conceptueel in de zin dat het alleen op conceptueel niveau de informatie beschrijft en geen implementatiespecificatie is. Het staat wat dat betreft naast en los van de in het DSO opgenomen implementatiespecificaties.

CIM-OP volgt de regels voor opstellen van een informatiemodel zoals vastgelegd in de MIM standaard en wordt uitgedrukt in UML.





