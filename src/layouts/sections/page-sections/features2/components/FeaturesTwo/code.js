import { Margin, TextFormat } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
const featuresCode = (
  <>
    <MKTypography variant="body1" color="black" opacity={0.8} pr={6} mr={6}>
      <b>ZÁPISNICA Z MEETINGU 2</b>
      <br />
    </MKTypography>
    <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
      <b>Datum: </b> 4.10.2023
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
        <li>Zber Dát - Možnosti Zberu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskutovalo sa o rôznych možnostiach zberu dát, vrátane odpovedí na
            otázky a dotazníky.
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Otázka: Lepšie ako včera?</li>
              <li>Odpovede: </li>
              <ul style={{ marginLeft: 30 + "px" }}>
                <li>Cítim sa vyčerpaný.</li>
                <li>Cítim sa milovaný.</li>
                <li>??? čo keď nastane rozpor v odpovediach</li>
              </ul>
            </ul>
          </li>
        </ul>
        <br />

        <li>
          Používateľom Definované Udalosti na Zlepšenie Nálady
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Diskutovalo sa o možnostiach, ako používateľ môže definovať
              udalosti na zlepšenie nálady.
            </li>
            <li>??? podarilo sa mi naplniť ciele</li>
            <li>
              ??? Zlepšilo/zhoršilo sa niečo, keď som aplikoval tieto veci do
              života
            </li>
            <br />
            <li>Príklady:</li>
            <ul style={{ marginLeft: 30 + "px" }}>
              <li>Keď začnem skoro vstávať, bude mi lepšie?</li>
              <li>Začnem cvičiť, bude mi lepšie?</li>
            </ul>
          </ul>
        </li>
        <br />

        <li>Zaznamenávanie Aktuálnej Aktivity a Jej Vplyv na Náladu</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskutovalo sa o potrebe zaznamenávania aktuálnej aktivity a jej
            vplyvu na náladu
          </li>
          <li>Riešilo sa pridávanie aktuálnej udalosti do záznamu</li>
        </ul>
        <br />

        <li>Personalizácia pre Používateľa</li>
        <ul style={{ marginLeft: 30 + "px" }}>
          <li>
            Diskutovalo sa o vyššej personalizácii pre používateľa
            <li>
              Používateľ môže vytvoriť svoje udalosti, voči ktorým má sentiment
            </li>
            <li>Možnosť vytvárania a sledovania cieľov</li>
            <li>
              Používateľovi bude k dispozícii otázky typu open-ended s
              hodnotením lepšie/neutrálne/horšie
            </li>
            <li>
              Bude existovať databáza slov na zhodnotenie dňa, pričom každé
              slovo bude mať svoju hodnotu
            </li>
          </li>
        </ul>
        <br />

        <li>
          Notifikácie a Ich Hodnota
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>Diskutovalo sa o nastavení notifikácií pre používateľov</li>
            <li>
              Používateľ si môže nastaviť časovanie notifikácií (ranná, po
              práci, náhodná, pravidelná)
            </li>
            <li>
              Hodnota záznamu bude závisieť aj od toho, či používateľ zaznamená
              udalosti v priebehu dňa
            </li>
          </ul>
        </li>
        <br />

        <li>
          Plán Ďalšieho Postupu
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Rozhodnutie, že práca na vývoji aplikácie začne v decembri, s
              prihliadnutím na technologické možnosti.
            </li>
          </ul>
        </li>
        <br />

        <li>
          Vyhodnotenie Článkov a Nápadov na Rozšírenie Aplikácie
          <ul style={{ marginLeft: 30 + "px" }}>
            <li>
              Účastníci sa dohodli na potrebe vyhodnotenia existujúcich článkov
              a získaní záverov, ktoré budú aplikované v ďalšom vývoji
            </li>
            <li>
              Diskutovalo sa o možnostiach obohatenia aplikácie o nové nápady a
              inovácie
            </li>
          </ul>
        </li>
        <br />
      </ol>
    </MKTypography>
  </>
);

export default featuresCode;
