let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Conceptueel Informatiemodel Officiële Publicaties -- versie voor review STOP--",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  specType: "IM",                 // Informatie Model
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "dso",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "dso-cim-op",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-07-11",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2014-07-11",
  previousMaturity: "cv",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name:       "Paul Janssen",
        company:    "Geonovum",
        url:        "https://www.geonovum.nl",
      },
      {
        name:       "Wilko Quak",
        company:    "Geonovum",
        url:        "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name:       "Paul Janssen",
        company:    "Geonovum",
        url:        "https://www.geonovum.nl",
      },
      {
        name:       "Wilko Quak",
        company:    "Geonovum",
        url:        "https://www.geonovum.nl",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/dso-cim-op",
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
};
