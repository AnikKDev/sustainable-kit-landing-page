import React from "react";
import ParaTitles from "./ParaTitles";
import PageData from "./PageData";

const Appendix = () => {
  return (
    <div>
      <h1 className="text-4xl my-4 font-bold uppercase text-[#0C4DA2]">
        Appendix
      </h1>

      {/* ======= */}
      <ParaTitles text="What is the technology employed by BioAro?" />
      <p>
        The human body contains trillions of microorganisms. These
        microorganisms have been known to impact host health in various ways.
        Knowing what microbes are present helps us to understand how our body
        responds to dietary interventions, drugs, or food choices and how we can
        manipulate them to receive maximum health benefits.
      </p>
      {/* ======= */}
      <ParaTitles text="What is the technology employed by BioAro?" />
      <p>
        The human body contains trillions of microorganisms. These
        microorganisms have been known to impact host health in various ways.
        Knowing what microbes are present helps us to understand how our body
        responds to dietary interventions, drugs, or food choices and how we can
        manipulate them to receive maximum health benefits.{" "}
        <span className="font-bold">
          We, at BioAro, care for your health therefore, we try to target every
          microbe in your sample! How do we ensure that?
        </span>{" "}
        We perform comprehensive microbiome analysis by employing state of art
        technology such as shotgun sequencing, which enables detection of all
        kinds of microbes including bacteria, fungi, viruses, and other types of
        eukaryotes. Not only this, but the approach also performs better
        taxonomic resolution and coverage, while simultaneously giving
        information about the functional microbiome profile.
      </p>
      {/* ======= */}
      <ParaTitles text="Some important terms and definitions:" />
      <p className="my-5">
        Alpha-diversity helps us determine the diversity of species within an
        ecosystem. In simple words, it answers the question of ‘How Many?’.
        Alpha diversity can be explained by describing: <br />{" "}
        <b>Species richness:</b> This provides a count of the number of
        different species present in a sample. It does not consider the
        abundance of the species or their relative distributions.{" "}
        <b>Species evenness:</b> This is a measure of relative abundance of
        different species present in a sample. High diversity value of gut
        profile indicates that the microbiome comprises of variety of
        microorganisms (bacteria, fungi, viruses, archaea) that can produce
        variety a wide range of metabolites and can positively affect the
        resilience and stability of the gut microbiome in times of dysbiosis and
        stress. Loss of microbiome diversity (LOMD) is described to be one of
        the most constant factor while studying intestinal dysbiosis or
        imbalance.
      </p>
      <p className="my-5">
        <b>Bacteroidetes and Firmicutesare</b> two most important groups of
        bacteria of the human gut microbiome. The proportion of Firmicutes found
        in the gut, affecting your F/B ratio, is implicated in many health
        conditions. Larger amount of Firmicutes in comparison to Bacteroidetes
        is often found in obese people. Very low amount of Firmicutes (specific
        species) are associated with IBD. These associations need not apply to
        every individual. There are different species in each group with varied
        abilities. Usually fat-rich diet is known to increases the firmicutes in
        your gut and fiber-rich diet could increase the beneficial species of
        Bacteroidetes.
      </p>
      <p className="my-5">
        <b>Keystone Species:</b> Keystone species may be considered as drivers
        of microbiome structure and function. They are mostly the low abundant
        slow growing taxa that set the stage for high abundant often fast
        growers of the community. Keystone species perform key functions
        producing short-chain fatty acids (SCFAs), amino acids, and vitamins,
        supporting the growth of other bacteria and thus defines the whole
        ecosystem. Simply put, the presence of these species, largely affects
        the presence/absence of other organisms in the ecosystem and therefore,
        it is one of the most crucial members of the ecosystem.
      </p>
      <p className="my-5">
        <b>Dysbiosis:</b> It refers to disruption of the normal microbiome which
        causes a change in the functional/metabolic composition of the host
        microbiome leading to overgrowth of organisms that are otherwise
        underrepresented or absent in healthy systems.
      </p>

      {/* ============= */}
      <PageData />
    </div>
  );
};

export default Appendix;
