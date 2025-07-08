import ResourceCard from "../components/support/SupportCard";
export default function SupportPage() {
  const mainPoliceCardData = {
    organization: "Honolulu Police Department",
    description: "Main Number",
    imageUrl: "",
    link: "https://www.honolulupd.org",
    phoneNumber: "(808)529-3111",
    address: "",
    icon: { name: "shield", size: 45, color: "blue" },
  };

  const detectiveDivisionCardData = {
    organization: "HPD Detective/ Criminal Investigation Division",
    description: "",
    imageUrl: "",
    link: "",
    phoneNumber: "(808)723-3609",
    address: "",
    icon: { name: "shield", size: 45, color: "blue" },
  };

  return (
    <div className="mt-4">
      <h1 className="text-gray-800">
        Call <span className="text-pink-800 text-lg">911</span> in case of an
        Emergency
      </h1>
      <h1 className="pt-40 text-left text-teal-800 font-libre-baskerville mb-8">
        Emergency Contacts
      </h1>
      <section>
        <div className="grid grid-cols-4 grid-auto-rows-fr gap-10">
          <ResourceCard {...mainPoliceCardData} />
          <ResourceCard {...detectiveDivisionCardData} />
        </div>
      </section>
    </div>
  );
}
