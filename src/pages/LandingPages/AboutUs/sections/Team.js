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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import pakan from "assets/images/team-5.jpg";
import jankanic from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
import valent from "assets/images/valent.jpg";
import maros from "assets/images/maros.jpg";
import andrej from "assets/images/andre_zitnak.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={pakan}
                name="Matej Pakán"
                position={{ color: "info", label: "App development, Web development" }}
                description="Zaujíma sa o webové stránky od roku 2013 a od 2017 ich tvorí profesionálne
                "
              />
              <MKTypography variant="body1" color="white" mb={3}>
                <b>2021 - 2022</b> - Frontend Developer nahodsa.sk <br />
                <b>2020 - 2023</b> - Frontend Developer vibefest.sk & redroom.sk <br />
                <b>2022 - súčasnosť</b> - Web Developer barneystudio.com <br />
                <b>Absolvované relevantné predmety</b> - MTAA, WTECH, VPWA, VAVJS, DBS, ICP, IAU,
                OOP <br />
                <b>Zapísané inžinierske predmety</b> - KPAIS, IPVIKT, MTS
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jankanic}
                name="Adam Jankanič"
                position={{ color: "info", label: "App development, Web development" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3}>
                Bakalárska téma zameraná na full stack webovú aplikáciu <br />
                <b>Absolvované relevantné predmety</b> - VPWA, MTAA, WTECH, DBS, ICP, OOP, IAU{" "}
                <br />
                <b>Zapísané inžinierske predmety</b> - AS, PDT, MTS, IPVKT <br />
                <b>2022 - súčasnosť</b> - ANASOFT softvérový analytik
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Filip Brat"
                position={{ color: "info", label: "Backend & API" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3}>
                Bakalárska téma zameraná bakalárska práca na vývoj natívnej mobilnej aplikácie{" "}
                <br />
                <b>Absolvované relevantné predmety</b> - MTAA, IAU a povinné predmety v rámci
                bakalárskeho štúdia FIIT
                <br />
                <b>Zapísané inžinierske predmety</b> - AS, PDT, MTS <br />
                <b>2022 - súčasnosť</b> - Backend Developer backbone.sk
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Martin Drgoň"
                position={{ color: "info", label: "Backend & API" }}
                description="Zaujíma sa o tvorbu webových aplikácií od roku 2019"
              />
              <MKTypography variant="body1" color="white" mb={3}>
                Bakalárska práca s vývojom webovej aplikácie <br />
                <b>Absolvované relevantné predmety</b> - MTAA, WTECH, VPWA, DBS, OOP, IAU <br />
                <b>Zapísané inžinierske predmety</b> - TSOFT, NSIETE
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={andrej}
                name="Andrej Žitňák"
                position={{ color: "info", label: "Data science" }}
                description="O dátovú vedu sa zaujíma aj v profesionálnom živote"
              />
              <MKTypography variant="body1" color="white" mb={3}>
                Bakalárska téma zameraná na Data science <br />
                <b>Absolvované relevantné predmety</b> - WTECH, VAVJS, DBS, ICP, IAU, OOP, UI, PAS,
                VAVA
                <br />
                <b>Zapísané inžinierske predmety</b> - VINF, OZNAL, SMVE
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={valent}
                name="Marcel Valent"
                position={{ color: "info", label: "Data science" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3}>
                BP zameraná na Computer vision a data science <br />
                <b>Absolvované relevantné predmety</b> - - IAU, ICP, OOP, DBS <br />
                <b>2021-2023</b> - Kyndryl (customer support, developer)
                <b>2023 - súčasnos</b> -Slovenské elektrárne - developer (data science, web
                development) <br />
                <b>Zapísané inžinierske predmety</b> - VINF, OZNAL, SMVE
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={maros}
                name="Maroš Lukáč"
                position={{ color: "info", label: "Web-development, Automated test developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3}>
                <b>Bakalárska práca</b> - webový portál celoživotného online vzdelávania zameraný na
                starších a zrakovo znevýhodnených používateľov <br />
                <b>Absolvované relevantné predmety</b> - IAU, ICP, OOP, DBS, WTECH, MSOFT
                <br />
                <b>Zapísané inžinierske predmety</b> - VINF, AS, MTS, DSOZB <br />
                <b>2022 - súčasnosť</b> - Asseco Central Europe - vývoj automatických testov pre
                weby
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
