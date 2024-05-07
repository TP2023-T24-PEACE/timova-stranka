import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2.1</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 11.1.2024
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
        <li>Aktualizácia backendu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Preberanie implementácii API, ktoré umožňuje ukladanie a získavanie
            dát o užívateľoch
          </li>
          <li>
            Diskusia o bezpečnostných opatreniach, vrátane autentifikácie a
            šifrovania dát.
          </li>
        </ul>
        <br />

        <li>
          Analýza dát
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Návrh o vývoji a integrácii predikcie, ktoré analyzujú užívateľské
              dáta a poskytujú personalizované odporúčania na zlepšenie nálady
            </li>
          </ul>
        </li>
        <br />

        <li>Vývoj frontendu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Ukážka dizajnov vo Figme užívateľského rozhrania</li>
          <li>
            Diskusia o implementácii prechodov medzi obrazovakami a zlepšení UX.
          </li>
        </ul>
        <br />

        <li>Záver</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>Odsuhlasenie prechodov aplikacie</li>
        </ul>
        <br />

        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
