import DownNavbar from "@/components/downNavbar/DownNavbar";
import classes from "./Portfolio.module.css";
import PortfolioCard from "@/components/portfolioCard/PortfolioCard";
import client from "@/lib/contentfullClient";
const fetchProjects = async () => {
  const response = await client.getEntries({ content_type: "portfolio" });
  const data = response.items.map((items) => {
    return {
      image: items.fields.projectImg,
      name: items.fields.projectName,
      link: items.fields.projectLink,
      firstTechnology: items.fields.firstTitle,
      secondTechnology: items.fields.secondTitle,
    };
  });
  return data;
};

export default async function page() {
  const Projects = await fetchProjects();
  console.log(Projects[0].image.fields.file.url);
  return (
    <>
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

          <div className={"ms-5 mt-6 flex gap-7 sm:gap-10 " + classes.worksDiv}>
            <li className="text-xl">All</li>
            <li className="text-xl">Web Designs</li>
            <li className="text-xl">Front-End</li>
            <li className="text-xl">Full-Stack</li>
          </div>

          <div className="my-20 mx-10 flex flex-wrap gap-24 justify-center">
            {Projects.map((items) => (
              <PortfolioCard
                title={items.name}
                imagePath={items.image.fields.file.url}
                firstTech={items.firstTechnology}
                secondTech={items.secondTechnology}
                link={items.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
