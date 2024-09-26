interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  items: {
    title: string;
    icon: React.ReactNode;
    href?: string;
  }[];
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
}

function ProfileCard({
  title,
  icon,
  items,
  gradientFrom,
  gradientTo,
  bgColor,
}: ProfileCardProps) {
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
    >
      <div
        className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-3 md:p-4 flex items-center`}
      >
        <div className="bg-white bg-opacity-30 rounded-full p-1.5 md:p-2 mr-3 md:mr-4">
          {icon}
        </div>
        <h4 className="text-lg md:text-xl font-semibold text-white">{title}</h4>
      </div>
      <ul className="p-4 md:p-6 space-y-2 md:space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="group flex items-center text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1"
          >
            {item.href ? (
              <a href={item.href} className="flex items-center w-full">
                <span
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-3 md:mr-4 ${gradientFrom} group-hover:scale-125 transition-transform duration-300`}
                ></span>
                <span className="font-medium flex-grow text-sm md:text-base">
                  {item.title}
                </span>
                <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
              </a>
            ) : (
              <>
                <span
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-3 md:mr-4 ${gradientFrom} group-hover:scale-125 transition-transform duration-300`}
                ></span>
                <span className="font-medium flex-grow text-sm md:text-base">
                  {item.title}
                </span>
                <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
