import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <div style={{ marginLeft: 30 + "px" }}>
      <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
        <b>ZÁPISNICA Z MEETINGU 7</b>
        <br />
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Datum: </b> 1.12.2023
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Čas: </b> 19:00
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Účastníci: </b> Filip, Maroš, Adam, Matej, Marcel, Martin
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
          <li>Vyhodnotenie nálady</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Používateľ prešiel procesom vyhodnocovania svojej nálady</li>
            <li>
              Reflektoval vplyv predchádzajúceho dňa na svoje aktuálne emočné
              stavy
            </li>
          </ul>
          <br />

          <li>
            Presnosť zbierania dát
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Aku presnosť zbieranych dát chceme?</li>
              <li>
                Preferencia medzi menej presnými, alebo získavaním väčšieho
                množstva údajov
              </li>
              <li>Ako zbierať data používateľsky najprívetivejšie</li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>
                  Navrhli sme minihru s kategóriami jednoduchých a
                  komplikovanejších vstupov
                </li>
                <li>Kategórie zahŕňajú jedlo, rodinu, vzťahy a ďalšie</li>
                <li>
                  Účastníci sú povzbudení zamerať sa na kategóriu, ktorá ich
                  zaujíma najviac
                </li>
              </ul>
              <li>Generovanie Odmien na Zameranie sa na Kategóriu</li>

              <li>
                Diskutovali sme o nápade generovania odmien, aby používatelia
                boli motivovaní zaznamenávať dáta.
              </li>
            </ul>
            <br />
            <li>Prototypy Aplikácií a Vykresľovanie Dát</li>
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Rozličné Prototypy</li>
              <li>
                Navrhli sme vytvorenie rôznych prototypov pre rôzne spôsoby a
                metódy počítania dát
              </li>
              <li>Vykresľovanie Dát</li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>
                  Diskutovali sme o možnostiach vykresľovania dát, vrátane
                  grafov a zoznamov
                </li>
                <li>
                  Zvážili sme vytvorenie nástrojov na sledovanie korelácií,
                  napríklad vplyvu alkoholu a nezdravých stravovacích návykov
                </li>
              </ul>
            </ul>
          </li>
          <br />

          <li>Odporúčania používateľovi a spracovanie osobných údajov</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Hlbšie Údaje pre Vylepšenie Funkcionality</li>
            <li>
              Odporúčali sme získavanie hlbších údajov od používateľov počas ich
              aktívneho používania aplikácie, a to nie len pri registrácii.
            </li>
            <li>Spracovanie Osobných Údajov pre Deployment</li>
          </ul>
          <br />
          <li>Riešenie funkcionality aplikácie a datovej analýzy</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Prioritizácia Funkcionality</li>
            <li>
              Sústredili sme sa na riešenie funkcionalít aplikácie, s dôrazom na
              procesy prihlasovania a registrácie ako posledné kroky.
            </li>
            <li>Datová Analýza a Potreba Databázového Modelu</li>
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>
                Zvážili sme potrebu databázového modelu pre efektívnu analýzu
                dát.
              </li>
              <li>
                Navrhli sme implementáciu REST API na získavanie vstupov od
                používateľov a diskutovali o správnej integrácii s analytickým
                nástrojom.
              </li>
            </ul>
          </ul>
          <br />
          <li>Vytvorenie hard dát na prvé zloženie</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Stanovili sme cieľ vytvoriť funkčný prototyp na testovanie do
              polovice januára
            </li>
          </ul>

          <br />
        </ol>
      </MKTypography>
    </div>
  </>
);

export default featuresCode;
