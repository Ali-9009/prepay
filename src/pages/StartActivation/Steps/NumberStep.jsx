import Button from "../../../components/Gbtn";

function NumberStep({ nextStep }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <p>(512) 743 - 6742</p>

        <Button onClick={nextStep} text="Select your service date" />
      </div>
    </>
  );
}

export default NumberStep;
