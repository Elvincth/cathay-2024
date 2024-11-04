import { useEffect, useState } from "react";
import TripHeader from "./TripHeader";

export interface Step6Props {
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Step6({ onNextStep, onPrevStep }: Step6Props) {
  useEffect(() => {
    setTimeout(() => {
      onNextStep();
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <TripHeader/>
        <img
          src="/images/loading.svg"
          className="mx-auto w-[320px] animate-pulse py-5"
        />
      </div>
    </>
  );
}
