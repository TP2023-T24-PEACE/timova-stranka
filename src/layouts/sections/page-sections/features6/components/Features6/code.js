import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <div style={{ marginLeft: 30 + "px" }}>
      <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
        <b>ZÁPISNICA Z MEETINGU 6</b>
        <br />
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Datum: </b> 21.11.2023
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Čas: </b> 19:00
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
          <li>Diskusia o Components diagrame</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Frontend bude volať cez API na server</li>
            <li>Dátová analýza bude fungovať ako submodule</li>
            <li>Perzistencia bude zabezpečená databázou (PostgreSQL)</li>
          </ul>
          <br />

          <li>
            Diskusia o Dátovej Analýze
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Prechádzanie konceptu pre dátovú analýzu</li>
              <li>Definícia formátu dát</li>
              <li>Kvantifikácia emócii: Úloha dátovej analýzy</li>
              <li>Zbieranie návykov: Návrh - zbierať údaje od inštalácie</li>
            </ul>
          </li>
          <br />

          <li>Diskusia o Autentifikácii</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Matej a Filip diskutovali o autentifikácii - Po dokončení
              autentifikácie Matej a Filip sa pripoja k API
            </li>
          </ul>
          <br />
          <li>Uzávierka Šprintu</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Prebratie UC a sekvenčných diagramov</li>
            <li>Žiadne námietky, už boli diskutované na minulom stretnutí</li>
          </ul>
          <br />
          <li>Plán na Budúce</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Filip uzatvára šprint a plánuje pridať nové úlohy</li>
            <li>
              Matej navrhuje začať s Adamom modelovať low fidelity návrh + jeden
              high fidelity návrh
            </li>
            <li>Marcel dostal úlohu vytvoriť mock dáta pre prácu</li>
            <li>
              Andy a Marcel majú úlohu rozhodnúť o vizualizáciách na začiatok
            </li>
            <li>Ďalšie úlohy budú pridané do Notionu/Trello</li>
          </ul>
          <br />
          <li>Ďalšie Poznámky</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Stretnutie bolo produktívne a efektívne</li>
            <li>
              Filip bude zodpovedný za pridávanie nových úloh do nástrojov na
              sledovanie úloh (Notion/Trello)
            </li>
          </ul>
          <br />
        </ol>
      </MKTypography>
    </div>
  </>
);

export default featuresCode;
