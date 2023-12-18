/* eslint-disable react/jsx-no-comment-textnodes */
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
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/peacebg.jpg";

function HeaderOne() {
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
          <Grid container flexDirection="row" alignItems="center">
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              py={0.8125}
              mr={2}
            >
              Personal Emotional Activity Checking Engine
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
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
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              py={10}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Tím č.24 - PEACE
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              <b>Výsledky myšlienkových pochodov nášho tímu</b>
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              <b>Dátum stretnutia:</b> 12.10.2023
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              pr={6}
              mr={6}
            >
              <b>Zúčastnení:</b> Adam, Maroš, Matej, Filip, Martin
            </MKTypography>
            <br />
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default HeaderOne;
