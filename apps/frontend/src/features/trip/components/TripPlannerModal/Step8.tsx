import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";

export interface Step8Props {
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Step8({ onNextStep, onPrevStep }: Step8Props) {
  return (
    <>
      <div>
        <TripHeader />

        <div className="p-4">
          <img
            src="/images/acc_pro.svg"
            className="mx-auto w-[350px]"
            onClick={() => onNextStep()}
          />
          <IonButton className="mt-2 w-full" onClick={() => onPrevStep()}>
            Back
          </IonButton>
        </div>
      </div>
    </>
  );
}
