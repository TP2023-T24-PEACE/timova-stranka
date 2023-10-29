/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import Projectinfo from "layouts/pages/landing-pages/project-info";

// Sections
import BrainHeader from "layouts/sections/page-sections/brainstorming";
import BrainHeader2 from "layouts/sections/page-sections/brainstorming2";
import BrainHeader3 from "layouts/sections/page-sections/brainstorming3";
import BrainHeader4 from "layouts/sections/page-sections/brainstorming4";
import Features from "layouts/sections/page-sections/featuers";
import Features2 from "layouts/sections/page-sections/features2";
import Features3 from "layouts/sections/page-sections/features3";
import Features4 from "layouts/sections/page-sections/features4";
import Features5 from "layouts/sections/page-sections/features5";

import Sprint4 from "layouts/pages/landing-pages/sprint4";

const routes = [
  {
    name: "Linky",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Sekcie",
        collapse: [
          {
            name: "Github organizácia",
            href: "https://github.com/TP2023-T24-PEACE",
          },
          {
            name: "Zadanie projektu",
            route: "/project-info",
            component: <Projectinfo />,
          },
        ],
      },
    ],
  },
  {
    name: "Dokumenty",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Záznamy stretnutí",
        description: "PRVÝ SEMESTER",
        dropdown: true,
        collapse: [
          {
            name: "Meeting 1",
            route: "/meetings/meeting1",

            component: <Features />,
          },
          {
            name: "Meeting 2",
            route: "/meetings/meeting2",
            component: <Features2 />,
          },
          {
            name: "Meeting 3",
            route: "/meetings/meeting3",
            component: <Features3 />,
          },
          {
            name: "Meeting 4",
            route: "/meetings/meeting4",
            component: <Features4 />,
          },
          {
            name: "Meeting 5",
            route: "/meetings/meeting5",
            component: <Features5 />,
          },
        ],
      },
      {
        name: "Brainstormings",
        description: "PRVÝ SEMESTER",
        dropdown: true,
        collapse: [
          {
            name: "Brainstorming 1",
            route: "/brainstormings/brainstorming1",
            component: <BrainHeader />,
          },
          {
            name: "Brainstorming 2",
            route: "/brainstormings/brainstorming2",
            component: <BrainHeader2 />,
          },
          {
            name: "Brainstorming 3",
            route: "/brainstormings/brainstorming3",
            component: <BrainHeader3 />,
          },
          {
            name: "Brainstorming 4",
            route: "/brainstormings/brainstorming4",
            component: <BrainHeader4 />,
          },
        ],
      },
      {
        name: "Šprinty",
        description: "Práca v šprintoch	",
        dropdown: true,
        collapse: [
          {
            name: "Sprint 4",
            route: "/sprints/sprint4",
            component: <Sprint4 />,
          },
        ],
      },
    ],
  },
];

export default routes;
