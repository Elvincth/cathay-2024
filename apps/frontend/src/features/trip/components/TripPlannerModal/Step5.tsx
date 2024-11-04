import { IonButton, IonButtons, IonIcon, IonToolbar } from "@ionic/react";
import { chevronBack, reload } from "ionicons/icons";
import TripHeader from "./TripHeader";
import { cn } from "~/lib/misc";
import { useState } from "react";

export interface Step5Props {
  onNextStep: () => void;
}

export function DateButton({
  date,
  onClick,
  focused,
}: {
  date: Date;
  onClick: () => void;
  focused?: boolean;
}) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={cn(
        "flex h-[78px]  w-[86px] shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-current text-gray-300",
        { "text-primary": focused },
      )}
    >
      <span className="text-2xl">{date.getDate()}</span>
      <span>{date.toLocaleString("default", { month: "short" })}</span>
    </div>
  );
}

export function Step5({ onNextStep }: Step5Props) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  return (
    <>
      <div>
        <TripHeader />

        <div className="p-4">
          <div className="font-semibold">Trip Itinerary</div>

          <div className="mt-4 flex gap-4 overflow-auto">
            {/* 19 Nov 2024 to 26 Nov 2024 */}
            {[
              new Date("2024-11-19"),
              new Date("2024-11-20"),
              new Date("2024-11-21"),
              new Date("2024-11-22"),
              new Date("2024-11-23"),
              new Date("2024-11-24"),
              new Date("2024-11-25"),
              new Date("2024-11-26"),
            ].map((date, i) => (
              <DateButton
                focused={focusedIndex === i}
                key={date.toISOString()}
                date={date}
                onClick={() => setFocusedIndex(i)}
              />
            ))}
          </div>

          <img src="/images/day1.jpg" className="mt-4 w-full" />

          <div className="mt-2">
            <IonButton className="w-full" onClick={() => onNextStep()}>
              Next
            </IonButton>
          </div>
        </div>
      </div>
    </>
  );
}
