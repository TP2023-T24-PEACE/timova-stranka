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

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import peace from "assets/images/peace.jpg";
import MKTypography from "components/MKTypography";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKTypography variant="h3" fontWeight={700} mb={3} textAlign="center">
              Informácie o projekte
            </MKTypography>
            <Grid container justifyContent="flex-start">
              <p style={{ fontSize: "1rem", textAlign: "justify" }}>
                Mobilná aplikácia so serverovym riešením na rýchle kolektovanie informácií o
                aktuálnej nálade a sociálnych aktivitách používateľa. Cieľom je sledovať trendy
                nálad a možné korelácie s udalosťami a kontaktmi.
              </p>
              <br />
              <p style={{ fontSize: "1rem", textAlign: "justify" }}>
                Implementujte mobilnú aplikáciu aspoň pre jednu mobilnú platformu, ktorá bude slúžiť
                na JEDNODUCHÉ zaznamenávanie aktuálneho psychického stavu (a iných podstatných
                udalostí). Identifikujte dáta, ktoré majú byť zbierané a akou formou. Navrhnite
                model ich spracovania a vykreslovania výsledkov. Navrhnite a implementujte spôsob
                kolektovania a anonymizácie týchto dát. Preskúmajte publikácie a podobné riešenia v
                tejto oblasti.
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={peace}
              title="Tím č. 24"
              description="Personal Emotional Activity Checking Engine (PEACE)"
              action={{
                type: "internal",
                route: "/about-us",
                color: "info",
                label: "o nás",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
