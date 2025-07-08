import { DynamicIcon } from "lucide-react/dynamic";
interface DynamicIconProps {
  name: string;
  size: number;
  color: string;
}

interface SupportCardProps {
  organization: string;
  description: string;
  imageUrl: string;
  link: string;
  phoneNumber: string;
  address: string;
  icon: DynamicIconProps;
}
const SupportCard = ({
  organization,
  description,
  imageUrl,
  link,
  phoneNumber,
  address,
  icon,
}: SupportCardProps) => {
  return (
    <a
      href={link}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Card Image */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={organization}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--lavendar)] transition-colors duration-300">
          {organization}
        </h3>

        {icon && (
          <p className="flex justify-center items-center mt-2 mb-3">
            {" "}
            <DynamicIcon name={icon.name} size={icon.size} color={icon.color} />
          </p>
        )}
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {description}
          </p>
        )}
        {phoneNumber && (
          <p className="text-gray-700 text-lg line-clamp-3 mb-3">
            {phoneNumber}
          </p>
        )}
        {address && (
          <p className="text-gray-700 text-lg line-clamp-2 mb-3">{address}</p>
        )}
      </div>
    </a>
  );
};

export default SupportCard;
