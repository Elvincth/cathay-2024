import {
  IonPage,
  IonTitle,
  IonContent,
  IonImg,
  IonCheckbox,
} from "@ionic/react";
import { useState } from "react";
import { MissionCard } from "~/features/common/components/MissionCard";
const MissionCards = [
  {
    title: "Daily Check In",
    src: "/images/Mission1.png",
    Status: "IN PROGRESS",
    boostingRate: 0.1,
  },
  {
    title: "Share a travel memory",
    src: "/images/Mission2.png",
    Status: "IN PROGRESS",
    boostingRate: 0.3,
  },
];
export const MissionPage = () => {
  const [checked, setChecked] = useState(true);
  return (
    <IonPage>
      <IonContent>
        <div
          className="h-[156px] bg-[url('/images/small-header-bg.svg')] bg-cover bg-no-repeat px-4 
pb-4 text-white pt-14-safe"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <IonTitle size="large">Daily Mission</IonTitle>
            </div>
          </div>
        </div>
        <div className=" p-4 ">
          <div className="flex flex-row items-center justify-between rounded-xl bg-[#F8F8F8] p-4 text-sm ">
            <div className=" flex flex-col  ">
              <div className="">Completed Missions</div>
              <div className=" opacity-50">As 19 Nov 2023</div>
            </div>
            <div className=" flex flex-row text-lg font-bold">
              <div>1</div>
              <div className=" opacity-50">/3</div>
            </div>
          </div>
        </div>
        {MissionCards.map((missionCard) => (
          <MissionCard
            checked={checked}
            src={missionCard.src}
            title={missionCard.title}
            Status={missionCard.Status}
            boostingRate={missionCard.boostingRate}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};
