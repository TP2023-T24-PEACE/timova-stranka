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
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
//import FeaturesTwo from "layouts/sections/page-sections/featuers/components/FeaturesTwo";
// Features page components code
import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";
//import featuresTwoCode from "layouts/sections/page-sections/featuers/components/FeaturesTwo/code";
function Features() {
  return (
    <BaseLayout
      title="Meetings"
      breadcrumb={[
        { label: "Meetings Sections", route: "/sections/page-sections/features" },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={featuresOneCode}>
        <FeaturesOne />
      </View>
    </BaseLayout>
  );
}

export default Features;
