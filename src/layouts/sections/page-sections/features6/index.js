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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components

import Features6 from "layouts/sections/page-sections/features6/components/Features6";
// Features page components code

import features6Code from "layouts/sections/page-sections/features6/components/Features6/code";
function Features() {
  return (
    <BaseLayout
      title="Meeting 6"
      breadcrumb={[
        {
          label: "Meetings Sections",
          route: "/sections/page-sections/features",
        },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={features6Code}>
        <Features6 />
      </View>
    </BaseLayout>
  );
}

export default Features;
