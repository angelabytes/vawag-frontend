import SupportCard, {
  type SupportCardProps,
} from "../components/support/SupportCard";

const supportData: SupportCardProps[] = [
  {
    organization: "Honolulu Police Department",
    description: "Main Number",
    imageUrl: "",
    link: "https://www.honolulupd.org",
    phoneNumber: "(808)529-3111",
    address: "",
    icon: { name: "shield", size: 45, color: "blue" },
  },

  {
    organization: "HPD Detective/ Criminal Investigation Division",
    description: "",
    imageUrl: "",
    link: "",
    phoneNumber: "(808)723-3609",
    address: "",
    icon: { name: "shield", size: 45, color: "blue" },
  },
];

export default function SupportPage() {
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
          {supportData.map((card) => (
            <SupportCard key={card.organization} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
