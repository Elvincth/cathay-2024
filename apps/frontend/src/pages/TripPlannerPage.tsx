import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, reload } from "ionicons/icons";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function TripPlanner() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.png)] bg-cover bg-center">
          <div
            className="absolute bottom-0 w-full -z-1 opacity-70"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 50%)",
              height: "137px",
            }}
          />

          <IonToolbar className="pt-8 [--background:transparent]">
            <IonButtons slot="start">
              <IonButton color="dark">
                <IonIcon icon={chevronBack} />
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <div className="z-10 w-full p-4 mt-auto text-white">
            <div className="flex justify-between">
              <div className="p-0">
                <div className="font-bold">Tokyo, Japan</div>
                <div>1 Adults</div>
                <div>19 Nov 2023 - 26 Nov 2023</div>
              </div>

              <div>
                <IonButton color="light" fill="outline">
                  <IonIcon icon={reload} />
                </IonButton>
              </div>
            </div>

            <div className="flex w-full gap-4 mt-2 overflow-auto">
              {[
                "Cultural Immersion",
                "Exploration",
                "Photography",
                "Nature",
              ].map((tag) => (
                <div className="flex w-fit items-center whitespace-nowrap rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div>Activity</div>
        </div>
      </IonContent>
    </IonPage>
  );
}
