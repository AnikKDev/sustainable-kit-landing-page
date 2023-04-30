import React from "react";
import ParaTitles from "./ParaTitles";
import demoImg from "../assets/images/bar-chat-2.png";
import PageData from "./PageData";
const GutMicrobiomeProfile = () => {
  return (
    <>
      <div>
        <ParaTitles text="What is the diversity value for your gut microbiome and why is that important?" />
        <p>
          The diversity of your gut microbiome is 3 for Shannon diversity
          (evenness) index value and 89 for observed OTU (richness). Shannon
          diversity (evenness) for a healthy gut microbiome range between 1.2 to
          3 and 60 – 115 for observed OTU (richness). Your evenness and richness
          diversity values are in the realm of health and corresponds to values
          found in healthy reference cohort.
        </p>
        <ParaTitles text="Who are the most abundant members of my profile and what do they do?" />
        <p>
          We found that most dominant members of your gut microbiome are the
          ones that are beneficial and have also been found in our reference
          healthy gut profiles. Notes: The two figures below depict the most
          abundant members of your profile, most of which are bacteria. Most
          abundant bacterial species in your profile are also ones detected in a
          healthy gut.
        </p>
      </div>
      <div>
        <img className="w-11/12 mx-auto" src={demoImg} alt="" />
      </div>
      <p>
        The gut microbiome is involved in healthy processing of the diet we
        consume. These microbes are involved in functions such as fermentation
        of dietary fibres, pathogen defence, synthesis of vitamins and other
        metabolites. Few of the most important metabolites processed by gut
        microbiome include short chain fatty acids, TMAO and cholesterol. Gut
        bacteria can exert both beneficial and harmful effects. During a state
        of imbalance, there would be an opportunity for commensal (that would be
        beneficial in a normal state) to become pathogenic.
      </p>
      {/* ================ */}
      <PageData />
    </>
  );
};

export default GutMicrobiomeProfile;
