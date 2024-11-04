import { IonButton, IonIcon } from "@ionic/react";
import { reload } from "ionicons/icons";

export default function TripHeader() {
  return (
    <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.jpg)] bg-cover bg-center">
      <div
        className="-z-1 absolute bottom-0 w-full opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 50%)",
          height: "137px",
        }}
      />

      <div className="z-10 mt-auto w-full p-4 text-white">
        <div className="flex justify-between">
          <div className="p-0">
            <div className="font-bold">Shenzhen, China</div>
            <div>4 Adults</div>
            <div>19 Nov 2024 - 26 Nov 2024</div>
          </div>

          <div>
            <IonButton color="light" fill="outline">
              <IonIcon icon={reload} />
            </IonButton>
          </div>
        </div>

        <div className="mt-2 flex w-full gap-4 overflow-auto">
          {["Cultural Immersion", "Exploration", "Photography", "Nature"].map(
            (tag) => (
              <div className="flex w-fit items-center whitespace-nowrap rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white">
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
