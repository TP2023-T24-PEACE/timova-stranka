import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.6</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 24.4.2024 - 7.5.2024
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
        <li>Dokončené úlohy</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Frontend</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Gamifikované prvky na zaznamenávanie nálad</li>
            <li>Prepojenie s backendom</li>
            <li>Spracovávanie údajov od používateľov a vykresľovanie grafov</li>
            <li>Užívateľské účty - login, logout, register</li>
          </ul>
          <li>Backend</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Plná funkcionalita API pre užívateľské operácie</li>
            <li>Nasadenie backendu na produkčný serve</li>
          </ul>
          <li>Data Science</li>
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Komplexná analýza a spracovanie dát</li>
            <li>Vytváranie a aktualizácia dynamických štatistík</li>
          </ul>
        </ul>
        <br />

        <li>
          Nasadenie aplikácie
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Aplikácia je úspešne nasadená a plne funkčná</li>
            <li>Monitoring a optimalizácia prebieha kontinuálne</li>
          </ul>
        </li>
        <br />

        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
