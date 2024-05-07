import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.4</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 2.3.2024
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
        <li> Aktualizácie užívateľského rozhrania</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Prezentácia a diskusia o úprave veľkosti písma v dolnom menu, za
            účelom zlepšenia čitateľnosti na rôznych zariadeniach
          </li>
          <li>
            Prediskutované boli nové otázky pridané do sekcie, ktorá simuluje
            funkcionalitu aplikácie Tinder, zamerané na intuitívnejšie
            získavanie odpovedí od užívateľov.
          </li>
        </ul>
        <br />

        <li>
          Implementácia funkcionalit Tinder
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Prezentácia a hodnotenie novej funkcie "Tinder Questions", ktorá
              umožňuje užívateľom odpovedať na otázky o svojej nálade swipovaním
              kariet.
            </li>
            <li>
              Diskusia o implementácii viacnásobných swipovateľných kariet,
              ktoré zvyšujú interakciu a zábavný prvok aplikácie
            </li>
            <li>
              Zhodnotenie dosiahnutej funkcionality a jej prípadných dopadov na
              spokojnosť a zážitok.
            </li>
          </ul>
        </li>
        <br />

        <li>Problémy s novými funkciami</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskusia o optimalizácii ukladania a spracovania dát získaných z
            nových interaktívnych otázok pre zlepšenie analýzy nálady
          </li>
        </ul>
        <br />

        <li>Backendové a frontendové integrácie</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Úpravy v backendovej infraštruktúre na podporu nových funkcií
            swipovania a dynamického zobrazovania obsahu
          </li>
          <li>
            Plánovanie testovania a validácie nových funkcii pred ich nasadením.
          </li>
        </ul>
        <br />

        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
