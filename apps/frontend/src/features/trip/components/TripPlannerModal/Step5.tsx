import { IonButton } from "@ionic/react";
import TripHeader from "./TripHeader";
import { cn } from "~/lib/misc";
import { useState } from "react";
import { MdVerified } from "react-icons/md";

export interface Step5Props {
  onNextStep: () => void;
  onPrevStep: () => void;
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

const activities = [
  {
    name: "Y Y Dumplings",
    time: "8:30AM - 9:30AM | Breakfast",
    imgSrc:
      "https://twoplaidaprons.com/wp-content/uploads/2020/05/Chinese-pork-dumplings-picking-up-a-dumpling-with-chopsticks.jpg",
  },
  {
    name: "Electronics",
    time: "10:00AM - 12:00PM | Shopping",
    imgSrc:
      "https://s3-media0.fl.yelpcdn.com/bphoto/nzXtEaRrNM7jjbJfXnTpTw/1000s.jpg",
  },
  {
    name: "Skewers",
    time: "12:30PM - 1:30PM | Lunch",
    imgSrc:
      "https://thecarrotunderground.com/wp-content/uploads/2024/05/grilled-veggie-skewers-with-potatoes-hero.jpg",
  },
  {
    name: "Dongmen Street",
    time: "2:00PM - 6:00PM | Shopping",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/ShenZhen_Dongmen.jpg/1200px-ShenZhen_Dongmen.jpg",
  },
];

function ActivityList() {
  return (
    <div className="h-64 overflow-y-auto">
      {activities.map((activity, index) => (
        <div
          className="my-2 flex items-center justify-between pr-2"
          key={index}
        >
          <div className="flex">
            <img
              className="mr-3 h-16 w-16 rounded"
              src={activity.imgSrc}
              alt={activity.name}
            />
            <div className="space-y-1">
              <p>{activity.name}</p>
              <p className="text-xs">{activity.time}</p>
              <p className="text-xs font-semibold text-teal-700">
                View Details
              </p>
            </div>
          </div>
          {index === 0 || index === 3 ? <MdVerified style={{color: "#00645A"}}/> : null}
        </div>
      ))}
    </div>
  );
}

export function Step5({ onNextStep, onPrevStep }: Step5Props) {
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

          <ActivityList />

          <div className="mt-2 flex">
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
