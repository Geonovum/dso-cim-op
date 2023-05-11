Uitgangspunten voor modellering
-----------------

De volgende uitgangspunten zijn gehanteerd bij het opstellen van CIMOP-dso:

- Conformiteit met Metamodel voor informatiemodellering 1.1.1
- Begrippenkaders van STOP en CIMOW zijn leidend
- Het model is conceptueel conform de STOP specificaties, maar kan een andere syntax hebben waar dat voor het begrip in OZON nodig is.

UML diagrammen en objectdefinities
-----------------

In het volgende hoofdstuk is de gegevensdefinitie opgenomen van het CIMOP-dso model. Het model is opgedeeld in een aantal onderdelen:
- Regeling-Besluit met een overzicht op hoofdlijn
- GIO
- DocumentComponenten
- Omgevingsvergunning
- BesluitCompact
- BesluitKlassiek
- RegelingCompact
- RegelingKlassiek
- RegelingTijdelijkdeel
- Kennisgeving
- Consolidatie

Bij elk model is een korte uitleg opgenomen.

De modellen zijn conceptueel en geven de DSO view op STOP weer. De informatie-elementen zijn toegepast in metaklassen (o.a. objecttypen, attributen, relaties) die voor deze DSO-view handig zijn en niet noodzakelijkerwijze overeenkomen met de metaklassen in STOP. De relaties tussen objecttypen zijn over het algemeen aggregatierelaties met de naam 'bevat'. De associatieeinden hebben in de regel dezelfde naam als het doel of de bron van de relatie. Dit is bijna overal uniform toegepast en komt niet overeen met STOP maar is voor de DSO view voldoende.

Na de diagrammen komt een objectcatalogus met de definities van de CIMOP-dso informatie-elementen.


<aside class="note">
Vraag is of de objectcatalogus nodig is voor STOP elementen. Liever verwijs ik daarvoor naar STOP. De toegevoegde DSO constructies zoals bijvoorbeeld DocumentComponent wel in catalogus.
</aside>


In de diagrammen zijn de objecttypen aan te klikken en wordt er gelinkt naar de beschrijving opgenomen in de objectcatalogus.

Voor het inzoomen in de UML diagrammen kan het best het diagram in een apart tabblad van de browser worden geopenend. Afhankelijk van het type browser is dit meestal via een rechtermuisklik en 'open in nieuw tabblad'.