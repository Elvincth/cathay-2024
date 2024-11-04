import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";

export interface Step8Props {
  onNextStep: () => void;
}

export function Step8({ onNextStep }: Step8Props) {
  return (
    <>
      <div>
        <TripHeader />

        <div>
          <img
            src="/images/acc_pro.svg"
            className="mx-auto w-[350px]"
            onClick={() => onNextStep()}
          />
          
        </div>
      </div>
    </>
  );
}
