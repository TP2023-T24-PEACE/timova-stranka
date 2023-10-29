import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresOneCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 1</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 29.9.2023
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Čas: </b> 13:00
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Účastníci: </b> Filip, Maroš, Adam, Matej, Andrej, Marcel, Martin
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Vedúci tímu: </b> Jakub Dubec
      <br />
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <ol>
        <li>Výstup z vykonaných meetingov</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Agenda</li>
        </ul>
        <br />
        <li>
          Realizácia problémov v danom týždni
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Typy otázok a metódy zberu dát (napr. denne, náhodné notifikácie,
              pravidelné záznamy)
            </li>
          </ul>
        </li>
        <br />
        <li>Rýchly a efektívny spôsob získavania relevantných údajov</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Stručný prehľad riešení problémov, ktoré sa objavili počas týždňa.
          </li>
        </ul>
        <br />
        <li>PROJEKT</li>

        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Popis mobilnej aplikácie
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>
                Aplikácia pre jednu platformu s dôrazom na kvalitu nad kvantitou
              </li>
              <li>
                Funkcionalita na monitorovanie nálady a správania používateľa
              </li>
              <li>
                Záznam základných stavov (napr. smutný, šťastný, sám, pitie
                alkoholu, fajčenie, problémy doma) a ich vplyv na používateľa
              </li>
            </ul>
          </li>

          <li>
            Ciele
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>
                Posunúť sledovanie vlastného života a pomôcť používateľom
                rozpoznať vzorce správania
              </li>
              <li>
                Vytvoriť terapeutickú metódu na základe merania dát v zlých
                obdobiach a sledovaním zmien v správaní
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <li>
          Zber dát
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Typy otázok a metódy zberu dát (napr. denne, náhodné notifikácie,
              pravidelné záznamy)
            </li>
            <li>Rýchly a efektívny spôsob získavania relevantných údajov</li>
          </ul>
        </li>
        <br />

        <li>
          Prvý semester
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Návrh riešenia</li>
            <li>Základný zber dát a ich spracovanie</li>
            <li>Vytvorenie jednoduchého prototypu</li>
          </ul>
        </li>
        <br />

        <li>
          Technológie
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Použité natívne technológie na zber dát a analýzu</li>
            <li>Rozpracovanie frontendu pre kvalitné zobrazovanie dát</li>
            <li>
              Vytvorenie webovej stránky pre záznam zo stretnutí, zodpovednosti
              a pokrok v projekte
            </li>
            <li>
              Dokumentácia projektu vrátane opisu produktu, jeho aspektov a
              špecifikácie (diagramy, diagram komponentov, databázový model,
              sekvenčné diagramy)
            </li>
          </ul>
        </li>
        <br />

        <li>
          Plán projektu
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Výber relevantných technológií</li>
            <li>
              Použitie nástroja Jira na vytváranie tiketov a rozdeľovanie úloh
            </li>
            <li>Rozdelenie práce do týždňových šprintov s jasnými cieľmi</li>
          </ul>
        </li>
        <br />

        <li>
          Rozdelenie tímu
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Back-end a spracovanie dát
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Martin</li>
                <li>Filip</li>
              </ul>
            </li>
            <li>
              Dátová analýza
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Marcel</li>
                <li>Andrej</li>
              </ul>
            </li>
            <li>
              Dátová analýza
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Matej</li>
                <li>Adam</li>
                <li>Maroš</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li style={{ marginLeft: 10 + "px" }}>
          Akceptačné testy
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Vytvorenie myšlienok, nápadov a cieľov pre produkt</li>
            <li>Stanovenie technológií a podmienok akceptačných testov</li>
          </ul>
        </li>
        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresOneCode;
