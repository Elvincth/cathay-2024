import { IonButton, IonDatetime, IonImg, IonSearchbar } from "@ionic/react";
import { destinations } from "~/data/destinations.data";
import { useEffect, useState } from "react";
import { cn } from "~/lib/misc";
import TripHeader from "./TripHeader";

export interface Step6Props {
  onNextStep: () => void;
}

export function Step6({ onNextStep }: Step6Props) {
  useEffect(() => {
    setTimeout(() => {
      onNextStep();
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <TripHeader />
        <img
          src="/images/loading.svg"
          className="mx-auto w-[350px] animate-pulse py-5"
        />
      </div>
    </>
  );
}
