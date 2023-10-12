/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKInput from "components/MKInput";
//import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
//import autocomplete from "assets/theme/components/form/autocomplete";
//import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage from "assets/images/priloha-A.jpg";
function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} sm={10} md={7} lg={6} xl={4}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            ml={{ xs: "auto", lg: "auto", xl: -30 }}
            mr={{ xs: "auto", lg: "auto", xl: -30 }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                PEACE - Informácie o zadaní
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1}>
                Názov témy: Personal Emotional Activity Checking Engine
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Poradové číslo</b>: 17 <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Akronym</b>: PEACE <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Vedúci tímu</b>: Ing. Jakub Dubec <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Súvisiace predmety</b>: MTAA, DBS <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Povinné technológie</b>: Kotlin/Swift <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Odporúčané technológie</b>: PostgreSQL, Python, R<br />
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Cieľ projektu
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                Mobilná aplikácia so serverovym riešením na rýchle kolektovanie informácií o
                aktuálnej nálade a sociálnych aktivitách používateľa. Cieľom je sledovať trendy
                nálad a možné korelácie s udalosťami a kontaktmi.
                <br />
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Prečo si mám vybrať tento projekt
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                Problémy s duševným zdravím a stresom sú fenoménom dnešnej doby. Ak ťa baví dátová
                analytika alebo vývoj mobilných aplikácií tento tímový projekt je práve pre teba!
                Zamyslime sa spolu ako čo najjednoduchšie zaznamenávať udalosti, ktoré ovplyvňujú
                náš každodenný život a aké majú dôsledky na našu náladu a medziľudské vzťahy.
                <br />
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Text zadania
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                Implementujte mobilnú aplikáciu aspoň pre jednu mobilnú platformu, ktorá bude slúžiť
                na JEDNODUCHÉ zaznamenávanie aktuálneho psychického stavu (a iných podstatných
                udalostí). Identifikujte dáta, ktoré majú byť zbierané a akou formou. Navrhnite
                model ich spracovania a vykreslovania výsledkov. Navrhnite a implementujte spôsob
                kolektovania a anonymizácie týchto dát. Preskúmajte publikácie a podobné riešenia v
                tejto oblasti.
                <br />
                <br />
                <br />
              </MKTypography>
            </MKBox>
          </MKBox>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            ml={{ xs: "auto", lg: "auto", xl: -30 }}
            mr={{ xs: "auto", lg: "auto", xl: -30 }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Motivačné listy
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1}>
                Personal Emotional Activity Checking Engine (PEACE)
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Priorita</b>: 1 <br />
              </MKTypography>

              <MKTypography variant="body" color="text" mb={1}>
                Pri projekte nás zaujal cieľ hľadania korelácie, medzi aktuálnou náladou a životnými
                či každodennými situáciami používateľa. Projekt PEACE nám tiež ponúka možnosť
                zdokonaliť sa v oblasti mobilného vývoja a dátovej analýzy, pretože budeme pracovať
                s modernými technológiami ako Kotlin/Swift, PostgreSQL, Python a R. Táto skúsenosť
                bude pre nás cenná v budúcnosti, či už sa rozhodneme ísť do akademického alebo
                priemyselného sektora. Po nazbieraní dostatku dát budeme môcť aj predpovedať náladu
                používateľa v budúcnosti a pri analýze všetkých používateľov aj tipy & triky na
                zlepšenie krátkodobej a dlhodobej nálady používateľov (Vylepšenie aplikácie VOS
                Health od českých vývojárov)
                <br />
                <br />
                <br />
              </MKTypography>

              <MKTypography variant="h2" color="text" mb={1}>
                studuj.fiit.sk [microsite/web app] (studuj.fiit.sk)
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Priorita</b>: 2 <br />
              </MKTypography>

              <MKTypography variant="body" color="text" mb={1}>
                Po správnom zadefinovaní požiadaviek vieme suverénne docieliť vznik projektu
                studuj.fiit.sk, nakoľko máme na realizáciu tohto projektu mnoho znalostí a
                referencií na podobné, už existujúce, nami vytvorené projekty. Uvedomujeme si
                vážnosť a množstvo nových schopností webovej aplikácie a jej reálny dosah nás
                motivuje na realizáciu tohto projektu, nakoľko si aj my pamätáme, keď sme sa hlásili
                do prvého ročníka FIIT, že príklady boli rovnaké a vedeli nám dať iba malé výsledky
                a aplikácia nám neporadila, na čo by sme sa mali viac zamerať. Implementácia API na
                sociálne siete môže byť zaujímavá, ale rozsah funkcií limitovaný, aby to bolo reálne
                na využitie (pre porovnanie doplníme aplikáciu Zoomsphere)
                <br />
                <br />
                <br />
              </MKTypography>

              <MKTypography variant="h2" color="text" mb={1}>
                Simulačná aplikácia na podporu vzdelávania v podnikaní (SAIP II)
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Priorita</b>: 3 <br />
              </MKTypography>

              <MKTypography variant="body" color="text" mb={1}>
                Túto aplikácia si pamätáme z minulého semestra, no pamätáme si aj nedokonalosti
                tejto aplikácie a vidíme viacero jednoduchých spôsobov na jej zlepšenie. Používanie
                tejto aplikácie na cvičení nás, aj ostatných študentov veľmi bavila, a teda má
                zmysel zlepšovanie pôvodnej verzie, nakoľko sa pri nej dajú vysvetliť aj dané
                aspekty, ktoré sa pri výučbe tohto predmetu prednášali a cvičili.
                <br />
                <br />
                <br />
              </MKTypography>
            </MKBox>
          </MKBox>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            ml={{ xs: "auto", lg: "auto", xl: -30 }}
            mr={{ xs: "auto", lg: "auto", xl: -30 }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Vyber hlavných tém
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1}>
                Personal Emotional Activity Checking Engine (PEACE)
              </MKTypography>
              <MKBox
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { linearGradient, rgba },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0),
                      rgba(gradients.dark.state, 0)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <MKTypography variant="h2" color="text" mb={1}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </MKTypography>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
