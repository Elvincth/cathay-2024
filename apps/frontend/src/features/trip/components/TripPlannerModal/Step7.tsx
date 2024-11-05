import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";

export interface Step7Props {
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Step7({ onNextStep, onPrevStep }: Step7Props) {
  const images = ["/images/tinder.png", "/images/247.png", "/images/248.png"];

  return (
    <>
      <div>
        <TripHeader />
        <div className="p-4">
          <div className="relative h-[530px] w-full">
            {images.map((image, index) => (
              <TinderCard key={index} className="absolute inset-0">
                <img
                  src={image}
                  className="h-full w-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </TinderCard>
            ))}
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
