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

import Features5 from "layouts/sections/page-sections/features5/components/Features5";
// Features page components code

import features5Code from "layouts/sections/page-sections/features5/components/Features5/code";
function Features() {
  return (
    <BaseLayout
      title="Meeting 5"
      breadcrumb={[
        {
          label: "Meetings Sections",
          route: "/sections/page-sections/features",
        },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={features5Code}>
        <Features5 />
      </View>
    </BaseLayout>
  );
}

export default Features;
