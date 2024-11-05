import { IonButton, IonDatetime, IonImg } from "@ionic/react";
import { useState } from "react";
import { cn } from "~/lib/misc";

export interface Step2Props {
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Step2({ onNextStep, onPrevStep }: Step2Props) {
  const [departDate, setDepartDate] = useState(new Date("2024-11-19"));
  const [returnDate, setReturnDate] = useState(new Date("2024-11-26"));
  const [isDepartDateFocused, setIsDepartDateFocused] = useState(true);

  return (
    <>
      <div className="mt-5 flex flex-col items-center gap-4">
        <IonImg class="h-[60px] w-[60px]" src={"/images/fly.svg"} />
        <div className="text-xl font-light">When do you want to go?</div>
      </div>
      <div className="p-4">
        <div className="mt-4 flex flex-col gap-4">
          <div className="text-xs text-[#aaa]">Select the dates</div>

          <div className="flex items-center justify-center gap-2">
            <div
              onClick={() => setIsDepartDateFocused(true)}
              className={cn(
                "h-[66px] flex-1 rounded-lg border border-gray-200 p-2 text-sm",
                {
                  "border-primary": isDepartDateFocused,
                },
              )}
            >
              <div className="text-[#aaa]">Arrival</div>
              <div className="text-primary">
                {departDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>

            <div
              onClick={() => setIsDepartDateFocused(false)}
              className={cn(
                "h-[66px] flex-1 rounded-lg border border-gray-200 p-2 text-sm",
                {
                  "border-primary": !isDepartDateFocused,
                },
              )}
            >
              <div className="text-[#aaa]">Return</div>
              {/* 19 Nov 2024 */}
              <div className="text-primary">
                {returnDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>

          <IonDatetime
            presentation="date"
            value={
              isDepartDateFocused
                ? departDate.toISOString()
                : returnDate.toISOString()
            }
            onIonChange={(e) =>
              isDepartDateFocused
                ? setDepartDate(new Date(e.detail.value! as string))
                : setReturnDate(new Date(e.detail.value! as string))
            }
            multiple={false}
          />
          <div className="flex">
            <IonButton className="w-full" onClick={() => onPrevStep()}>
              Back
            </IonButton>
            <IonButton className="w-full" onClick={() => onNextStep()}>
              Next
            </IonButton>
          </div>
        </div>
      </div>
    </>
  );
}
