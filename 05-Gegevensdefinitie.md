Uitgangspunten voor modellering
-----------------

De volgende uitgangspunten zijn gehanteerd bij het opstellen van CIMOP-dso:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.1.1.
- Begrippenkaders van STOP is leidend.
- Het model is conceptueel conform de STOP specificaties, maar kan een andere syntax hebben waar dat voor het begrip van OZON nodig is.
- De scope van CIMOP-dso is de informatie die vanuit het DSO perspectief nodig is om van STOP te weten. Dit is ruim genomen onuit het DSO perspectief het nodig is om de context van de strikt benodigde STOP informtatie te weten. Deze context geeft voor een deel de achtergrond van de van uit de LVBB doorgezette informatie naar de DSO. Tevens is een bredere invulling gegeven omdat voor nu nog niet alle use cases en fucntionaliteit bedacht kan worden van de aan de DSO doorgeleverde informatie. Door een bredere scope te nemen ontstaat er een mogelijkheid voor ontdekken van toekomstige gewenste functionaliteit, bijvoorbeeld voor de viewer.

Indien modellen voornamelijk bedoeld zijn om de bredere context aan te geven is dat kenbaar gemaakt door het label `(Context)`.

UML diagrammen en objectdefinities
-----------------

In het volgende hoofdstuk is de gegevensdefinitie opgenomen van het CIMOP-dso model.
Het model is opgedeeld in een aantal onderdelen:
- CIMOP - Overzichtsmodel voor officiële publicaties `(Context)`
- FRBR model als basismodel voor instrumenten `(Context)`
- Regeling-Besluit met een overzicht op hoofdlijn
- GIO
- Omgevingsvergunning
- BesluitCompact `(Context)`
- BesluitKlassiek `(Context)`
- RegelingCompact
- RegelingKlassiek
- RegelingVrijeTekst
- RegelingTijdelijkdeel
- Kennisgeving
- Consolidatie `(Context)`

Bij elk model is een korte uitleg opgenomen. In die uitleg is indien relevant ook een referentie naar de STOP documentatie opgenomen.

De modellen zijn conceptueel en geven de DSO view op STOP weer. De informatie-elementen zijn toegepast in metaklassen (o.a. objecttypen, attributen, relaties) die voor deze DSO-view handig zijn en niet noodzakelijkerwijze overeenkomen met de metaklassen in STOP. De relaties tussen objecttypen zijn over het algemeen aggregatierelaties met de naam 'bevat'. De associatieeinden hebben in de regel dezelfde naam als het doel of de bron van de relatie. Dit is bijna overal uniform toegepast en komt niet overeen met STOP maar is voor de DSO view voldoende.

Na de diagrammen komt een objectcatalogus met de definities van de CIMOP-dso informatie-elementen.


<aside class="note">
Vraag is of de objectcatalogus nodig is voor STOP elementen. Liever verwijs ik daarvoor naar STOP. In een aantal gevallen is dat ook gedaan. Het wordt echter moeilijk om deze referenties te beheren.

De toegevoegde DSO constructies zoals bijvoorbeeld DocumentComponent wel in catalogus.
</aside>


In de diagrammen zijn de objecttypen aan te klikken en wordt er gelinkt naar de beschrijving opgenomen in de objectcatalogus.

Voor het inzoomen in de UML diagrammen kan het best het diagram in een apart tabblad van de browser worden geopenend. Afhankelijk van het type browser is dit meestal via een rechtermuisklik en 'open in nieuw tabblad'.