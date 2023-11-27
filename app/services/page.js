import DownNavbar from "@/components/downNavbar/DownNavbar";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import client from "@/lib/contentfullClient";
const fetchServices = async () => {
  const response = await client.getEntries({ content_type: "services" });
  const data = response.items.map((items) => {
    return {
      iconName: items.fields.iconName,
      title: items.fields.title,
      iconBackground: items.fields.iconBackground,
      iconColor: items.fields.iconColor,
      description: items.fields.description,
    };
  });
  return data;
};

export default async function page() {
  const services = await fetchServices();
  services.reverse();

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
        {services.map((items) => (
          <ServiceCard
            iconName={items.iconName}
            title={items.title}
            desciption={items.description}
            iconBackground={items.iconBackground}
            iconColor={items.iconColor}
          />
        ))}

        {/* <ServiceCard
            iconName="webdev"
            title="Web Development"
            desciption="lorem12 safha odaf h soifsa ghio"
            iconBackground="#D9F4FE"
            iconColor="#58CFFD"
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
        /> */}
      </div>
    </div>
  );
}
