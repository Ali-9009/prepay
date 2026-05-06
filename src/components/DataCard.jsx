import Button from "./Gbtn";

const DataCard = ({ gb, price }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-sm p-3 text-center border border-gray-300">
      <h2 className="text-2xl font-semibold">{gb}</h2>

      <p className="text-2xl font-bold text-red-500 my-2">
        {price}
        <span className="text-gray-800 text-lg font-medium"> /mo</span>
      </p>

      <Button text="Add Data" />
    </div>
  );
};

export default DataCard;
