interface IStatsCardProps {
  title: string;
  value: string;
  icon: any;
}

const StatsCard = ({ title, value, icon }: IStatsCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center space-x-4 transition-colors duration-300">
      <div className="text-4xl text-gray-600 dark:text-gray-300">{icon}</div>
      <div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
