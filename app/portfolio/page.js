import DownNavbar from "@/components/downNavbar/DownNavbar";
import classes from "./Portfolio.module.css";
import client from "@/lib/contentfullClient";
import Portolios from "@/components/Portfolio/Portolios";

const fetchProjects = async () => {
  const response = await client.getEntries({ content_type: "portfolio" });
  const data = response.items.map((items) => {
    return {
      image: items.fields.projectImg,
      name: items.fields.projectName,
      link: items.fields.projectLink,
      firstTechnology: items.fields.firstTitle,
      secondTechnology: items.fields.secondTitle,
      id: items.fields.id,
    };
  });
  return data;
};

export default async function page() {
  const Projects = await fetchProjects();

  return (
    <div style={{ marginBottom: "400px" }}>
      <DownNavbar title="Portfolio" />
      <div className={classes.mainDiv}>
        <div className={`container sm:mx-auto mt-40 mx-3 `}>
          <h6
            className=" text-2xl text-gray-400 tracking-widest font-medium uppercase"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            portfolio
          </h6>
          <h1
            className=" uppercase text-6xl sm:text-7xl font-bold mt-4"
            style={{ fontFamily: "var(--font-poppins)", color: "#130F49" }}
          >
            Recent Work
          </h1>
          <Portolios Projects={Projects} />
        </div>
      </div>
    </div>
  );
}
