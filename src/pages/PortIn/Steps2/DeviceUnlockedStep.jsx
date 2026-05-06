import Button from "../../../components/Gbtn";

function DeviceUnlockedStep({ nextStep, setNextBranch }) {
  return (
    <div className="max-w-md flex flex-col space-y-2 items-left mx-auto">
      <h1 className="font-semibold">Your transfer number is in progress</h1>
      <ul className="space-y-3 text-sm">
        <li>
          <p className="font-medium">While you wait, we’ve assigned you a temporary number so you can stay connected without interruption.</p>
        </li>
        <li>
          <p className="font-medium">Your temporary number:</p>
        </li>
        <li>
          <p className="font-bold text-2xl">(512) 743 - 6872</p>
        </li>
        <li>
          <p className="font-medium">We’ll notify you once your number transfer is complete, and automatically switch your service from the temporary number to your chosen number.</p>
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

export default DeviceUnlockedStep;