import DownNavbar from "@/components/downNavbar/DownNavbar";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
export default function page() {
  return (
    <div>
      <DownNavbar title="Services" />
      {/* <!-- ADVERTISERS SERVICE CARD --> */}
      <h1
        className=" text-center my-9 text-6xl font-bold"
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      >
        What I Do?
      </h1>
      <div className="container mx-auto flex justify-center my-10 flex-wrap">
        <ServiceCard
          iconName="webdev"
          title="Web Development"
          desciption="lorem12 safha odaf h soifsa ghio"
          iconBackground="#D9F4FE"
          iconColor="#58CFFD"
        />

        <ServiceCard
          iconName="appdev"
          title="App Development"
          desciption="lorem12 safha odaf h soifsa ghio"
          iconBackground="#FFF4E4"
          iconColor="#FFC261"
        />

        <ServiceCard
          iconName="videoediting"
          title="Video Editing"
          desciption="lorem12 safha odaf h soifsa ghio"
          iconBackground="#F4F3FF"
          iconColor="#665AFB"
        />

        <ServiceCard
          iconName="errorfixing"
          title="Bugs & Error fixing"
          desciption="lorem12 safha odaf h soifsa ghio"
          iconBackground="#FFF5F6"
          iconColor="#F66565"
        />
      </div>
    </div>
  );
}
