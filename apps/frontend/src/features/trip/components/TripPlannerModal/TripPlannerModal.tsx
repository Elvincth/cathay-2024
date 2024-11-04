import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { close } from "ionicons/icons";
import { useRef, useState } from "react";
import { useApp } from "~/features/common";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step4 } from "./Step4";
import { Step3 } from "./Step3";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";
import { Step7 } from "./Step7";
import { Step8 } from "./Step8";
import { Step9 } from "./Step9";

export interface TripPlannerModalProps {
  opened: boolean;
  onClosed: () => void;
}

export const TripPlannerModal = ({
  opened,
  onClosed,
}: TripPlannerModalProps) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { routerOutletRef } = useApp();
  const [step, setStep] = useState(7);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={() => {
        onClosed();
        setStep(7);
      }}
    >
      <IonHeader>
        <IonToolbar className="[--background:#fff]">
          <IonTitle>CaTour</IonTitle>
          {/* <IonButtons slot="start">
            {step === 2 && (
              <IonButton
                color="dark"
                onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            )}
          </IonButtons> */}
          <IonButtons slot="end">
            <IonButton color="dark" onClick={() => onClosed()}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* header */}

        {step === 1 && <Step1 onSearch={() => nextStep()} />}
        {step === 2 && <Step2 onNextStep={() => nextStep()} />}
        {step === 3 && <Step3 onNextStep={() => nextStep()} />}
        {step === 4 && <Step4 onNextStep={() => nextStep()} />}
        {step === 5 && <Step5 onNextStep={() => nextStep()} />}
        {step === 6 && <Step6 onNextStep={() => nextStep()} />}
        {step === 7 && <Step7 onNextStep={() => nextStep()} />}
        {step === 8 && <Step8 onNextStep={() => nextStep()} />}
        {step === 9 && <Step9 onNextStep={() => onClosed()} />}
      </IonContent>
    </IonModal>
  );
};
