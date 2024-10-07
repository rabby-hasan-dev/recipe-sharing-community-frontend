
const StatsCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <div className="text-4xl">{icon}</div>
            <div>
                <p className="text-lg font-semibold text-gray-700">{title}</p>
                <p className="text-3xl font-bold">{value}</p>
            </div>
        </div>
    );
};
export default StatsCard;
