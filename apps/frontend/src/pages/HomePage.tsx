import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { OfferCard, UserAvatarButton } from "~/features/common";
import { MilesBalanceCard } from "~/features/miles";

export const HomePage = () => {
  return (
    <IonPage>
      <IonHeader
        translucent
        collapse="fade"
        className="pointer-events-none absolute opacity-[var(--opacity-scale)]"
      >
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          className="h-[200px] bg-[url('/images/home-header-bg.svg')] bg-cover bg-no-repeat px-4 
           pb-4 text-white pt-14-safe"
        >
          <IonGrid class="container">
            <IonRow>
              <IonCol size="9">
                <div className="text-2xl font-bold">Good morning, Elvin</div>
                <div className="text-sm opacity-50">Green | 28173993127</div>
              </IonCol>

              <IonCol class="flex justify-end" size="3">
                <UserAvatarButton />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Stack */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="container flex flex-col gap-1">
            <div className="font-bold">Balance Miles</div>
            <MilesBalanceCard />
          </div>

          <div>
            <div className="container mb-2 font-bold">Special Offer</div>
            <Swiper
              className="container w-full p-0"
              freeMode
              slidesOffsetAfter={16}
              slidesOffsetBefore={16}
              modules={[FreeMode]}
              slidesPerView="auto"
              spaceBetween={16}
            >
              <SwiperSlide className="!w-[261px]">
                <OfferCard
                  title="Welcome new user time deposit"
                  apy={2.0}
                  tenurePeriod={6}
                  maxAmount={10000}
                  isLimited
                />
              </SwiperSlide>

              <SwiperSlide className="!w-[261px]">
                <OfferCard
                  title="Welcome new user time deposit"
                  apy={2.0}
                  tenurePeriod={6}
                  maxAmount={10000}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="container">
            <div className="mb-2 font-bold">Daily Task</div>

            <IonList inset className="hx-ion-list">
              <IonItem detail={false}>
                <div className="flex flex-col w-full gap-4">
                  <div className="text-xs">
                    Great job, you got extra{" "}
                    <span className="font-bold">0.01%</span> APY, finish daily
                    task to maintain or upgrade your APY for standard plan.
                  </div>
                  <IonProgressBar value={0.5} className="h-1.5 rounded-lg" />
                </div>
              </IonItem>
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
