import TableRow from "./TableRow";

const TableWithChartTable = () => {
  const dummyArr = [
    {
      name: "Faecalibacteriu m prausnitzii",
      abundance: "20.34%",
      knownFunction:
        "This bacterium is known for its ability to produce short chain fatty acid (SCFA), specifically butyrate. This important bacteria in your gut belonging to Firmicutes phylum is protective against inflammatory bowel diseases, irritable bowel syndrome, colorectal cancer and obesity.",
    },
    {
      name: "Roseburia intestinalis",
      abundance: "13.17%",
      knownFunction:
        "Roseburia intestinalis is a beneficial commensal of our gut microbiome. Roseburiasp., belongs to the phylum Firmicutes,are major producers ofproduce short-chain fatty acids (SCFAs), such as acetate, propionate, and butyrate in our gut. It is reported for its therapeutic role in inflammatory bowel disease, type 2 diabetes mellitus, antiphospholipid syndrome, and atherosclerosis.",
    },
    {
      name: "Bacteroides ovatus",
      abundance: "9.19%",
      knownFunction:
        "In a balanced gut, Bacteroides ovatus acts as any good member of gut microbiome, producing SCFA and GABA. But in people who suffer from IBD, they have the potential to become pathogenic and increasing the inflammation in our gut. Bacteroides ovatus was found to be present at higher levels in healthy controls than in Ulcerative colitis or IBS patients.",
    },
    {
      name: "Phocaeicola vulgatus",
      abundance: "5.04%",
      knownFunction:
        "This species is a major player of the gut. This bacteriodetes bacteria provides protection from pathogens and supply nutrients to other microbial residents of the gut.P. vulgatus, known to be highly effective SCFA, succinate and propionate producers. This species degrades complex polysaccharides and many plant-derived heteropolysaccharides.",
    },
    {
      name: "Blautia obeum",
      abundance: "4.40%",
      knownFunction:
        "Blautia obeum could disable the pathogenic mechanism of Vibrio cholerae, preventing it from colonizing the gut. This is also one of the main butyrate (SCFA) producers found in the intestine.",
    },
    {
      name: "[Ruminococcus] torques",
      abundance: "3.87%",
      knownFunction:
        "Ruminococcus torques may be considered as a commensal in the gut microbiome of healthy adults. However, their increased abundance is associated with severity of irritable bowel syndrome. In kids, they are found to be highly abundant in cohort of children with autism spectrum disorder.",
    },
    {
      name: "Collinsella aerofaciens",
      abundance: "3.36%",
      knownFunction:
        "Literature reports bacteria under genus Collinsella could modify host bile acids and plasma cholesterol levels. Acetic acid, formic acid and lactic acid are the main metabolites produced by genus Collinsella. Collinsella aerofaciens is known to produce butyrate and could play a role in alleviating inflammatory diseases.",
    },
    {
      name: "Prevotella copri",
      abundance: "3.12%",
      knownFunction:
        "Prevotella copri is yet another bacteridetes associated with general health and well being. Higher abundance of P. copri is associated with a lower risk of irritable bowel syndrome (IBS) and higher general health. Prevotella copri ensures favorable postprandial glucose (PPG) metabolism. PPG greatly influences overall glycemic control.",
    },
    {
      name: "Anaerobutyricu m hallii",
      abundance: "3.05%",
      knownFunction:
        "Anaerobutyricum hallii is a member of the achnospiraceae family. Though Lachnospiraceae are among the main producers of short-chain fatty acids in human gut, different taxa of Lachnospiraceae are also correlated in literature with intestinal diseases. Anaerobutyricum hallii is a known butyrate producer and helps in maintaining intestinal metabolic balance.",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="font-bold text-[#0C4DA2]">
            <th>Scientific Name</th>
            <th>Abundance in your</th>
            <th>Known function/effect on gastrointestinal tract</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dummyArr.map((item) => (
            <TableRow data={item} key={Math.random.toString()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithChartTable;
