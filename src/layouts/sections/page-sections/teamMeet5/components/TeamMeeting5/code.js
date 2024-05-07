import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.5</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 16.3.2024
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
        <li>Dokumentácia ku backendu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Martinov repozitar</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              https://github.com/xdrgonm/TP-BE/blob/feature/entry/
              docs/swagger.yaml
            </li>
          </ul>
        </ul>
        <br />

        <li>
          Úlohy
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Users – POST a GET - treba upraviť</li>
            <li>Login – To do</li>
            <li>Entries – POST a GET - DONE</li>
            <li>ENTRY(json s troma objektami) - treba submission id</li>
            <li>Nasadiť backend</li>
          </ul>
        </li>
        <br />

        <li>Hry na získanie dát</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Slider game: Vybrať hodnotu z rozsahu 0-1</li>
          <li>Mood: Definovať 50 nálad s hodnotami od 0-1</li>
          <li>Reasons: Objekt JSON s možnosťami (Diskusia)</li>
          <li>Tinder game: Vytvoriť súbor otázok</li>
          <li>
            Personalizačná hra – challenges: Návrh 10 výziev pre každú kategóriu
          </li>
        </ul>
        <br />

        <li>XP leveling a notifikácie</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>OXP leveling: Návrh systému pre získavanie úrovní</li>
          <li>Notifikácie: Implementácia cez Firebase</li>
        </ul>
        <br />

        <li>Štatistiky</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Graf za posledných 7 dní</li>
          <li>Zoznam nálad za posledných 7 dní</li>
          <li>Integrácia so serverom</li>
        </ul>
        <br />

        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
