Uitgangspunten voor modellering
-----------------

De volgende uitgangspunten zijn gehanteerd bij het opstellen van CIM-OP:

- Conformiteit met Metamodel voor informatiemodellering, MIM 1.1 [MIM].
- Model is opgesteld in UML klassediagrammen. Voor algemene uitleg over UML klassediagram zie [wikipedia: UML klassediagram](https://en.wikipedia.org/wiki/Class_diagram).
- Begrippenkaders van STOP zijn leidend.
- Het model is conceptueel conform de STOP specificaties, maar kan een andere syntax hebben waar dat voor het begrip van DSO-LV nodig is.
- De scope van CIM-OP is de informatie die vanuit het DSO-LV perspectief nodig is om van STOP te weten. Dit is ruim genomen om de context van de strikt benodigde STOP informatie te weten. Deze context geeft voor een deel de achtergrond van de van uit de LVBB doorgezette informatie naar de DSO-LV. Tevens is een bredere invulling gegeven omdat voor nu nog niet alle use-cases en functionaliteit bedacht kan worden van de aan de DSO-LV doorgeleverde informatie. Door een bredere scope te nemen ontstaat er een mogelijkheid voor ontdekken van toekomstige gewenste functionaliteit, bijvoorbeeld voor de viewer.

Indien modellen voornamelijk bedoeld zijn om de bredere context aan te geven is dat kenbaar gemaakt door het label `(Context)`.

UML diagrammen en objectdefinities
-----------------

In het volgende hoofdstuk is de gegevensdefinitie opgenomen van het CIM-OP model.
Het model is opgedeeld in een aantal onderdelen:
- CIM-OP - Overzichtsmodel voor officiële publicaties `(Context)`
- FRBR model als basismodel voor instrumenten `(Context)`
- Regeling-Besluit met een overzicht op hoofdlijn
- GIO
- Documentcomponenten
- Besluit compact `(Context)`
- Toelichtingsrelatie
- Besluit klassiek `(Context)`
- Regeling compact
- Regeling klassiek
- Regeling vrijetekststructuur
- Tijdelijk regelingdeel
- Kennisgeving `(Context)`
- Mededeling `(Context)`
- Consolidatie `(Context)`

Bij elk model is een korte uitleg opgenomen. In die uitleg is indien relevant ook een referentie naar de STOP documentatie opgenomen.

De modellen zijn conceptueel en geven de DSO-LV view op STOP weer. De informatie-elementen zijn toegepast in metaklassen (o.a. objecttypen, attributen, relaties) die voor deze DSO-LV view handig zijn en niet noodzakelijkerwijze overeenkomen met de metaklassen in STOP. De relaties tussen objecttypen zijn over het algemeen aggregatierelaties met de naam 'bevat'. De associatieeinden hebben in de regel dezelfde naam als het doel of de bron van de relatie. Dit is bijna overal uniform toegepast en komt niet overeen met STOP maar is voor de DSO-LV view voldoende.

Bij een aantal diagrammen is er een legenda opgenomen. Dit is een algemene legenda en het kan zijn dat specifieke legenda-eenheden niet in een specifiek diagram voorkomen. De kleuren hebben geen informatiekundige betekenis in het UML en zijn alleen om het model inzichtelijker te maken. 

<figure id="Figuur_5.1">
<img src="media/Legenda CIM-OW UML.png" alt="">
<figcaption>Legenda die bij een aantal diagrammen wordt toegepast.</figcaption>
</figure>

*CIM-OP*: Regulier onderdeel van CIM-OP\
*Specifiek deel CIM-OP*: Een onderdeel van CIM-OP dat in dit diagram specifiek aandacht krijgt\
*Specifiek voor DSO-LV*: Een onderdeel dat door DSO-LV is toegevoegd en niet in STOP voorkomt\
*CIM-OW*: Een onderdeel van CIM-OW dat van belang is voor dit diagram\
*Extern model*: Een onderdeel van een extern model dat van belang is voor dit diagram

<aside class="note">
Er is bij dit CIM-OP geen objectcatalogus opgenomen. Voor de definities van informatieelementen wordt verwezen naar de [[STOP20]] documentatie
</aside>
