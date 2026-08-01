export type Project = {
  id: string;
  title: string; // bei NDA-Projekten z.B. "Fintech Platform" statt echtem Namen
  isNda: boolean;
  role: string; // z.B. "Senior Architect & Solo Developer"
  stack: string[]; // z.B. ["Next.js", "Supabase", "React Native"]
  problem: string; // 1-2 Sätze: welches Problem gelöst wurde
  approach: string; // 1-2 Sätze: wie es angegangen wurde, mit Fokus auf Architektur-Entscheidungen
  timeline: string; // z.B. "3 months, idea to launch"
  outcome?: string; // optional, falls messbares Ergebnis vorhanden und nicht NDA-sensibel
};

export const projects: Project[] = [
  // WICHTIG: Diese Liste absichtlich leer gelassen.
  // Steffen trägt hier seine echten Projekte ein — sowohl
  // Kundenprojekte (isNda: true, ohne Klarnamen) als auch
  // eigene Apps (isNda: false). NICHT mit Beispieldaten
  // befüllen.
];
