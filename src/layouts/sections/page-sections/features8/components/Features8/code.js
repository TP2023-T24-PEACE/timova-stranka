import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <div style={{ marginLeft: 30 + "px" }}>
      <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
        <b>ZÁPISNICA Z MEETINGU 8</b>
        <br />
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Datum: </b> 8.12.2023
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Čas: </b> 19:00
      </MKTypography>
      <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
        <b>Účastníci: </b> Filip, Maroš, Adam, Matej, Marcel, Martin, Andrej
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
          <li>Sofitikovanejšie hry a dátová analýza</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Zamysleli sme sa nad vytvorením sofistikovanejších hier s dôrazom
              na optimalizáciu získavania dát.
            </li>

            <li>
              Menej sústrediť na veci na dashboardoch a skôr rozšíriť
              funkcionalitu hier
            </li>
            <li>
              Chceme pridať prvky, ktoré budú zamerané na sledovanie cieľov
              používateľa, vrátane vecí, ktoré nechce robiť
            </li>
          </ul>
          <br />

          <li>
            Presnosť zbierania dát
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Rozšírenie Zaznamenávania Údajov</li>

              <li>
                Diskutovali sme o potrebe dodizajnovania existujúcich hier a
                vylepšení v zaznamenávaní údajov.
              </li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>
                  Príklad: Kvantifikácia celkového záznamu údajov, zahŕňajúce
                  alkohol, rodinu, spánok, jedlo.
                </li>
              </ul>
              <li>Behaviorálna Analýza</li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Plánujeme implementovať behaviorálnu analýzu</li>
                <li>
                  Maximálny počet 60 nálad (napríklad šťastný, smutný), aby sme
                  pokryli rôzne stavy
                </li>
              </ul>
            </ul>
            <br />
            <li>
              Rôzne permutácie hier a vyhodnotenie optimalizácie získavania dát
            </li>
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Optimalizácia vstupov a výstupov</li>
              <li>
                Navrhli sme rôzne permutácie hier na optimalizáciu získavania
                dát
              </li>
              <li>
                Zvážili sme otázky, ktoré by sme mohli pridať do nových hier s
                väčším množstvom klikania, ale s presnejším vyhodnotením emócií
              </li>
              <li>Príklad otázok</li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Ako na teba vplývala práca?</li>
                <li>Ako na teba vplývala rodina?</li>
                <li>Čo na teba pôsobilo pozitívne?</li>
              </ul>
            </ul>
            <br />
            <li>Preddefinované Hodnoty Dát:</li>
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Zvažujeme možnosť preddefinovania niektorých hodnôt dát</li>
              <li>
                Dáta sa môžu meniť po zadávaní väčšieho množstva údajov alebo po
                zmene používateľom.
              </li>
              <li>
                Záverečným krokom je vytvorenie niečoho kreatívneho a nového, s
                dôrazom na experimentovanie.
              </li>
            </ul>
          </li>
          <br />

          <br />
        </ol>
      </MKTypography>
    </div>
  </>
);

export default featuresCode;
