import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";

export interface Step7Props {
  onNextStep: () => void;
}

export function Step7({ onNextStep }: Step7Props) {
  return (
    <>
      <div>
        <TripHeader />

        <div className="p-4">
          <img src="/images/tour.png" className="mx-auto w-[320px]" />

          <IonButton className="mt-2 w-full" onClick={() => onNextStep()}>
            Next
          </IonButton>
        </div>
      </div>
    </>
  );
}
