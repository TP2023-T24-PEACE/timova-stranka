import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 3</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 12.10.2023
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Čas: </b> 17:00
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
        <li>Sledovanie Nálady a Správania Používateľa</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskutovalo sa o spôsoboch, ako sledovať náladu a správanie
            používateľa.
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>
                Navrhnutý spôsob: Opýtať sa používateľa na jeho aktuálny pocit
                na základe jeho nálady.
              </li>
              <li>
                Premýšľalo sa o súbore otázok na získanie nálady používateľov.
              </li>
              <li>
                Zvážilo sa, ako umožniť používateľovi prispôsobiť si a nastaviť
                svoje preferencie.
              </li>
            </ul>
          </li>
        </ul>
        <br />

        <li>
          Personalizovaný Sledovač Návykov a Nálady
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Diskutovalo sa o možnostiach personalizovaného sledovača návykov
              spolu s sledovačom nálady
            </li>
            <li>Záznam nálady (s využitím data science metód).</li>
            <li>Sledovanie návykov (s využitím data science metód)</li>
            <li>
              Denná rutina? (Sprav si posteľ, urob 10 drepov/klikov, zhlboka sa
              nadýchni, uprav si izbu, priprav si oblečenie na zajtra, polož si
              k posteli pohár vody, dnes si daj **ovocie**)
            </li>
            <br />
            <li>Vedenie denníka</li>
            <br />
          </ul>
        </li>
        <br />

        <li>Označenie špeciálnych udalostí</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Napríklad: "Ak si dnes bol frustrovaný, vieme ti ponúknuť možnosti,
            ktoré ti zlepšili náladu, keď si bol frustrovaný aj minule."
          </li>
          <li>
            Inšpirácia z aplikácie Tinder (s otázkami ako **ovocie**, pohyb,
            celkový pocit).
          </li>
        </ul>
        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
