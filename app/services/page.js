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
      <div className="container mx-auto">
        <ServiceCard />
      </div>
    </div>
  );
}
