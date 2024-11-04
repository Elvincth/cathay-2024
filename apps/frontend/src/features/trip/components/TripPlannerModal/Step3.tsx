import { IonButton, IonDatetime, IonImg, IonSearchbar } from "@ionic/react";
import { destinations } from "~/data/destinations.data";
import { useState } from "react";
import { cn } from "~/lib/misc";

export interface Step3Props {
  onNextStep: () => void;
}

const MinusButton = ({ onClick }: { onClick: () => void }) => (
  <div
    role="button"
    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f2f2f2]"
    onClick={onClick}
  >
    <div className="text-[#666]">-</div>
  </div>
);

const PlusButton = ({ onClick }: { onClick: () => void }) => (
  <div
    role="button"
    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f2f2f2]"
    onClick={onClick}
  >
    <div className="text-[#666]">+</div>
  </div>
);

export function Step3({ onNextStep }: Step3Props) {
  const [adults, setAdults] = useState(1);
  const [childrenNo, setChildrenNo] = useState(0);

  return (
    <>
      <div className="flex h-full flex-col p-4">
        <div className="mt-5 flex flex-col items-center gap-4">
          <IonImg class="h-[60px] w-[60px]" src={"/images/fly.svg"} />
          <div className="text-xl font-light">Travel Details</div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-[16px] font-semibold">Adults</div>
              <div className="text-[14px] font-light">Aged 16+</div>
            </div>

            <div className="flex gap-4">
              <MinusButton
                onClick={() => setAdults((prev) => Math.max(prev - 1, 1))}
              />
              <div className="leading-loose text-[#666]">{adults}</div>
              <PlusButton onClick={() => setAdults((prev) => prev + 1)} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-[16px] font-semibold">Children</div>
              <div className="text-[14px] font-light">Aged 2-15</div>
            </div>

            <div className="flex gap-4">
              <MinusButton
                onClick={() => setChildrenNo((prev) => Math.max(prev - 1, 0))}
              />
              <div className="leading-loose text-[#666]">{childrenNo}</div>
              <PlusButton onClick={() => setChildrenNo((prev) => prev + 1)} />
            </div>
          </div>
        </div>

        <IonButton className="w-full" onClick={() => onNextStep()}>
          Next
        </IonButton>
      </div>
    </>
  );
}
