import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 5</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 26.10.2023
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Čas: </b> 17:00
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Účastníci: </b> Filip, Maroš, Adam, Matej, Andrej, Marcel, Martin
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Vedúci tímu: </b> Jakub Dubec
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <br />
      <br />
      <b>Agenda:</b>
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <ol>
        <li>Akademický výstup</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Príprava diagramov</li>
          <li>Analytický modul</li>
          <li>Use Case analýza</li>
        </ul>
        <br />

        <li>
          Akceptačné testy
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Identifikovanue actors (Systém, Užívateľ)</li>
          </ul>
        </li>
        <br />

        <li>Inicializácia prostredia</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Začiatok procesu (pomaly zacat, este netreba funkcne verzie)</li>
          <li>Fázovanie úloh (Návrh, Prototypy, atď.)</li>
        </ul>
        <br />
        <li>Deadliny v projekte</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Stanovenie časových termínov pre konkrétne úlohy v jednotlivých
            mesiacoch
          </li>
          <li>Zahrnutie milestonov - okrem issues</li>
        </ul>
        <br />
        <li>MVP tasky</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Zabezpečiť konkrétne a jasné úlohy (nie banálne úlohy ako zbieranie
            vstupu)
          </li>
          <li>
            Zadefinovať presné zadanie pre úlohy (Ako zbierať údaje, Formát
            údajov, Váha, Spracovanie, Forma Vstupu a Transformácia na Výstup)
          </li>
        </ul>
        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
