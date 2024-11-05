import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";
import { useEffect } from "react";

export interface Step7Props {
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Step7({ onNextStep, onPrevStep }: Step7Props) {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);
  return (
    <>
      <div>
        <TripHeader />
        <div className="p-4">
          <div className="flex flex-nowrap overflow-x-auto">
            <img
              src="/images/tinder.png"
              className="mx-2 w-[320px] flex-shrink-0"
            />
            <img
              src="/images/247.png"
              className="mx-2 w-[320px] flex-shrink-0"
            />
            <img
              src="/images/248.png"
              className="mx-2 w-[320px] flex-shrink-0"
            />
          </div>
          <div className="flex">
            <IonButton className="mt-2 w-full" onClick={() => onPrevStep()}>
              Back
            </IonButton>
            <IonButton className="mt-2 w-full" onClick={() => onNextStep()}>
              Next
            </IonButton>
          </div>
        </div>
      </div>
    </>
  );
}
