import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.3</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 21.2.2024
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
        <li>Revízia nedávnych zmien v kóde</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskusia o integrácii nových zmien z posledných commitov vrátane
            zlúčenia vetvy ’mood-tracking’.
          </li>
          <li>
            Prehodnotenie výhod a potenciálnych problémov spojených so zmenou
            štruktúry projektu
          </li>
        </ul>
        <br />

        <li>
          Reštrukturalizácia a aktualizácia užívateľského rozhrania
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Hodnoteni nových zmien, ktoré zahrnujú urobenie všetkých
              obrazoviek použiteľnými a zmeny v navigácii
            </li>
            <li>
              Diskusia o odstránení starej domovskej obrazovky a jeho náhrade
              novým, efektívnejším rozhraním.
            </li>
          </ul>
        </li>
        <br />

        <li>Diskusia o výzvach a problémoch</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Riešenie potenciálnych problémov s výkonom a použiteľnosťou po
            reštrukturalizácii.
          </li>
          <li>
            Hodnotenie, ako zmeny ovplyvnia celkovú navigáciu a interakciu
            užívateľa s aplikáciou
          </li>
        </ul>
        <br />

        <li>Backendové a frontendové integráci</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskusia o potrebe ďalších úprav v backendovej architektúre na
            podporu nových užívateľských rozhraní.
          </li>
          <li>
            Zváženie zlepšení v bezpečnosti a spracovaní dát vzhľadom na nové
            funkcionality užívateľského rozhrania.
          </li>
        </ul>
        <br />

        <li>Plánovanie ďalších krokov</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Stanovenie priorít a rozdelenie úloh medzi tímom na ďalšie vývojové
            cykly.
          </li>
        </ul>

        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
