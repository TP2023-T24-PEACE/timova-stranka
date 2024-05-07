import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.2</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 5.2.2024
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
        <li> Prehľad a revízia vývoja</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Prehodnotenie dosiahnutého pokroku v oblasti frontendu a backendu.
          </li>
          <li>
            Diskusia o integrácii a testovaní nových zmien z posledných
            commitov.
          </li>
        </ul>
        <br />

        <li>
          Aktualizácia frontendu
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Diskusia o úvodnej obrazovke a spätnej väzbe po integrácii nových
              zmien
            </li>
            <li>Zavedenie nového rozbaľovacieho menu "Reason dropdown"</li>
            <li>
              Implementácia presmerovania na dashboard po dokončení prechodov v
              aplikacii
            </li>
          </ul>
        </li>
        <br />

        <li>Vylepšenia backendu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskusia o backendovej podpore pre nové frontendové funkcie, ako sú
            menu a presmerovania a gamifikovana časť získavania dát.
          </li>
          <li>
            Plánovanie rozšírenia databázových schém pre nové dáta získané z
            rozbaľovacieho menu.
          </li>
          <li>
            Konzultovanie, že všetky užívateľské vstupy sú spracované a
            zabezpečené proti bežným bezpečnostným hrozbám.
          </li>
        </ul>
        <br />

        <li> Data Science</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Ako spracovať "Reason dropdown" pre hlbšiu analýzu nálad užívateľov
            a identifikáciu vzorcov
          </li>
          <li>
            Prediskutovanie možnosti použitia strojového učenia na predpovedanie
            zmeny nálady na základe historických dát a aktuálneho vstupu od
            užívateľa.
          </li>
          <li>
            Plánovanie implementácie personalizovaných odporúčaní na základe
            analýz užívateľských dát.
          </li>
        </ul>
        <br />

        <li>Diskusia o problémoch</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskusia o možných problémoch s integritou a súkromím dát, najmä ako
            zabezpečiť osobné informácie v multi-užívateľskom prostredí.
          </li>
          <li>
            Zhodnotenie a plánovanie infraštruktúry pre škálovanie aplikácie s
            rastúcim počtom užívateľov.
          </li>
        </ul>
        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
