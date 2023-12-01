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
          color: "#130F49",
        }}
      >
        What I Do?
      </h1>
      <div className="container mx-auto flex justify-center my-10 flex-wrap">
        {services.map((items) => (
          <ServiceCard
            key={items.title}
            iconName={items.iconName}
            title={items.title}
            desciption={items.description}
            iconBackground={items.iconBackground}
            iconColor={items.iconColor}
          />
        ))}
      </div>
    </div>
  );
}
