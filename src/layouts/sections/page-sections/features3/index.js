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

import FeaturesThree from "layouts/sections/page-sections/features3/components/FeaturesThree";
// Features page components code

import featuresThreeCode from "layouts/sections/page-sections/features3/components/FeaturesThree/code";
function Features() {
  return (
    <BaseLayout
      title="Meeting 3"
      breadcrumb={[
        { label: "Meetings Sections", route: "/sections/page-sections/features" },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={featuresThreeCode}>
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;
