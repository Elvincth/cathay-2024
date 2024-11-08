import { IonImg, IonCheckbox } from "@ionic/react";
import React from "react";
interface MissionCardProps {
  checked?: boolean;
  src: string;
  title: string;
  boostingRate: number;
  Status: string;
}

export const MissionCard = ({
  checked,
  src,
  title,
  boostingRate,
  Status,
}: MissionCardProps) => {
  return (
    <div className="p-4 opacity-80">
      <div className="flex flex-col ">
        <IonImg src={src} />
        <div className="flex flex-row items-center justify-center rounded-b-xl bg-[#F8F8F8] p-4">
          <div className="flex w-full flex-col ">
            <div className=" text-xs opacity-50">{Status}</div>
            <div className=" flex flex-row gap-2">
              {title}
              <div className=" flex items-center rounded-[4px] border-[1px] border-primary px-1 text-xs font-medium text-primary">
                Boosting {boostingRate}x
              </div>
            </div>
          </div>
          <IonCheckbox
            checked={checked}
            className=" opacity-100"
            disabled
            style={{
              "--ion-color-primary-shade": "var(--ion-color-primary)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
