/*
=========================================================
* Material Kit 2 React - v2.6.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components

import TeamMeet6 from "layouts/sections/page-sections/teamMeet6/components/TeamMeeting6";
// Features page components code

import TeamMeet6Code from "layouts/sections/page-sections/teamMeet6/components/TeamMeeting6/code";
function Features() {
  return (
    <BaseLayout
      title="Team meeting 2.6"
      breadcrumb={[
        {
          label: "Meetings Sections",
          route: "/sections/page-sections/features",
        },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={TeamMeet6Code}>
        <TeamMeet6 />
      </View>
    </BaseLayout>
  );
}

export default Features;
