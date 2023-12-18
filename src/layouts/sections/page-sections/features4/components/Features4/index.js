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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/peacebg.jpg";

function FeaturesOne() {
  return (
    <MKBox
      component="section"
      py={{ xs: 3, md: 12 }}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.5),
            rgba(gradients.dark.state, 0.5)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1} color="white">
              Meeting 4 - NEKONAL SA
            </MKTypography>

            <MKTypography variant="h4" color="white" mb={3}>
              Stretnutie priateľov 4.
            </MKTypography>

            <MKTypography variant="body1" color="white" mb={3}>
              <b>Členstvo:</b> Filip, Maroš, Adam, Matej, Andrej, Marcel, Martin
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={3}>
              <b>Vedúci tímu:</b> Jakub Dubec
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
