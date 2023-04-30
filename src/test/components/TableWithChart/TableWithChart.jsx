import PageData from "../PageData";
import ParaTitles from "../ParaTitles";
import chartImg from "../../assets/images/chart-2.png";
import TableWithChartTable from "./TableWithChartTable";
const TableWithChart = () => {
  return (
    <div>
      <TableWithChartTable />
      {/* ========== */}
      <ParaTitles text="What is meant by keystone species and are they all present in my samples?" />
      <p>
        There are few very significant members in your gut profile that function
        very uniquely to maintain the balance of the ecosystem. They are highly
        interconnected with other taxa and their depletion can cause
        considerable change in the microbiome structure, stability and function.
        They are usually found to be depleted in a dysbiotic state. Out of eight
        keystone species that we look for, we only found 4 in your sample.
      </p>
      {/* ============= */}
      <div className="my-3">
        <h6 className="font-bold">Recommendation</h6>
        <p>
          Fiber-rich diet acts as a prebiotic for the keystone species. Adding a
          variety of fiber rich food such as fruits, vegetables, nuts, flaxseed,
          legumes, onions, peas, and whole grains to our diet enable the
          maintenance of keystone species. The other lifestyle changes that help
          keystone species of our gut are sleep hygiene, exercise and managing
          stress.
        </p>
        {/* ============= */}
        <img src={chartImg} className="mx-auto" alt="chart image" />
      </div>
      {/* ============= */}
      <div>
        <ParaTitles
          text={
            "Did you find any pathogens in my profile and what can I do about them?"
          }
        />
        <p>
          We found some virulence proteins in your gut which is suggestive of
          presence of some opportunistic pathogens. However, the analysis
          revealed that they are not of significant coverage or read depth to be
          of any concern. It is important to note that certain pathogens and the
          proteins associated with them are found in normal gut microbiome and
          therefore, can function as opportunistic pathogen.
        </p>
        <h6 className="font-bold">Recommendation</h6>
        <p>
          High fiber intake encourages the growth of beneficial species that
          ferment fiber into metabolites as short-chain fatty acids. The high
          abundance of beneficial species keep the pathogens in check even in
          times of health crisis. The available literature suggests that a diet
          dominated by vegetables and fruits, accompanied by healthy fat may be
          effective in promoting a diverse ecosystem of beneficial bacteria to
          support both human gut microbiome and overall health.
        </p>
      </div>
      {/* ============= */}
      <ParaTitles
        text={
          "Did you find any antimicrobial resistance genes in my profile and what does it mean?"
        }
      />
      <p>
        The most significant antimicrobial resistance genes found in your
        profile belonged to the class tetracyclines, aminoglycosides, MLS, beta
        lactams, trimethoprim and multi-drug resistance. These classes of
        antibiotic resistance genes are also found in healthy profiles.
      </p>
      {/* ============= */}
      <PageData />
    </div>
  );
};

export default TableWithChart;
