import ResourceCard from "../components/resource/ResourceCard";
export default function ResourcesPage() {
  const mainPoliceCardData = {
    organization: "Honolulu Police Department",
    description: "Main Number",
    imageUrl: "",
    link: "https://www.honolulupd.org",
    phoneNumber: "(808)529-3111",
    address: "",
    icon: { name: "shield", size: 45, color: "blue" },
  };

  return (
    <div>
      <h1 className="text-gray-800">
        Call <span className="text-pink-800 text-lg">911</span> in case of an
        Emergency
      </h1>
      <h1 className="pt-40 text-left text-teal-800 font-libre-baskerville">
        Emergency Contacts
      </h1>
      <div className="grid grid-cols-4">
        <section className="pt-16">
          <ResourceCard {...mainPoliceCardData} />
        </section>
      </div>
    </div>
  );
}
