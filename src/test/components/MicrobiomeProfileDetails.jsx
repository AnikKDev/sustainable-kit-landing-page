import profileImg from "../assets/images/chart.png";
import PageData from "./PageData";
import ParaTitles from "./ParaTitles";
const MicrobiomeProfileDetails = () => {
  return (
    <>
      <div>
        <img className="w-2/3 mx-auto" src={profileImg} alt="" />
      </div>
      <div>
        <ParaTitles
          text={
            "What do the members of my gut microbiome profile do specifically?"
          }
        />
        <p>
          The significant members found in your gut profile are mentioned in the
          following table and are the ones fighting for your health and
          competing against the ones that can harm your health. The following
          table gives you additional information about the organisms in your gut
          and their role and function.
        </p>
      </div>
      <PageData />
    </>
  );
};

export default MicrobiomeProfileDetails;
