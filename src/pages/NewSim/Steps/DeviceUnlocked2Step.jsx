import Button from "../../../components/Gbtn";

function DeviceUnlocked2Step({ nextStep, setNextBranch }) {
  return (
    <div className="max-w-md flex flex-col space-y-2 items-left mx-auto">

      <ul className="space-y-3 text-sm">
        
        <li>
          <p className="font-bold text-2xl text-center">(512) 743 - 6872</p>
        </li>
        
      </ul>

      {/* set the branch type before calling nextStep */}
      <Button
        className="w-full mt-2"
        text="eSim"
        onClick={() => {
          setNextBranch("future");
          nextStep();
        }}
      />
      <Button
        className="w-full mt-2"
        text="pSim"
        onClick={() => {
          setNextBranch("now");
          nextStep();
        }}
      />
    </div>
  );
}

export default DeviceUnlocked2Step;