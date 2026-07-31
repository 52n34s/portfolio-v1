/**
 * Zentrale Rechtsangaben für Impressum und Datenschutzerklärung.
 *
 * Dies ist die EINZIGE Stelle, an der diese Werte stehen.
 * Impressum und Datenschutzerklärung lesen beide von hier.
 *
 * ---------------------------------------------------------------
 * AUSFÜLLEN: Die Felder unter TODO müssen gesetzt werden.
 * Solange sie leer sind, schlägt der Build absichtlich fehl.
 * ---------------------------------------------------------------
 */

export const legal = {
  // --- Person und Anschrift ---
  name: "Steffen Giebler",
  company: "52N34S Group",
  street: "Schwedter Str. 25",
  postalCode: "10119",
  city: "Berlin",
  country: "Deutschland",

  // --- Kontakt ---
  emailGeneral: "support@52n34s.com",
  emailPrivacy: "privacy@52n34s.com",

  // TODO: Telefonnummer eintragen ODER auf null lassen.
  // Rechtlich ist eine Telefonnummer nicht zwingend, solange eine
  // andere schnelle Kontaktmöglichkeit besteht (EuGH C-649/17).
  // Bei null wird im Impressum keine Telefonzeile gerendert.
  phone: null as string | null,

  // TODO: USt-IdNr. eintragen. Pflichtangabe nach § 5 Abs. 1 Nr. 6 DDG,
  // sobald eine vorhanden ist. Format: "DE123456789"
  vatId: "",

  // --- Aufsichtsbehörde Datenschutz ---
  dpaName: "Berliner Beauftragte für Datenschutz und Informationsfreiheit",
  dpaShort: "BlnBDI",
  dpaAddress: "Alt-Moabit 59–61, 10555 Berlin",

  // --- Stand der Rechtstexte ---
  lastUpdated: "31. Juli 2026",
  lastUpdatedEn: "31 July 2026",
} as const;

// Build bricht ab, wenn Pflichtfelder fehlen — verhindert, dass
// Platzhalter unbemerkt live gehen.
if (!legal.vatId) {
  throw new Error(
    "src/lib/legal.ts: USt-IdNr. fehlt. Pflichtangabe nach § 5 DDG. " +
      "Bitte das Feld vatId ausfüllen (Format DE123456789)."
  );
}

export const legalAddressLines = [
  legal.name,
  legal.company,
  legal.street,
  `${legal.postalCode} ${legal.city}`,
  legal.country,
];
