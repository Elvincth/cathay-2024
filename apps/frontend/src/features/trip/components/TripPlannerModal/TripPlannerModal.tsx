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
  const [step, setStep] = useState(1);
  return (
    <IonModal
      ref={modal}
      presentingElement={routerOutletRef?.current}
      isOpen={opened}
      onIonModalDidDismiss={() => {
        onClosed();
        setStep(1);
      }}
    >
      <IonHeader>
        <IonToolbar className="[--background:#fff]">
          <IonTitle>CaTour</IonTitle>
          <IonButtons slot="end">
            <IonButton color="dark" onClick={() => onClosed()}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {step === 1 && <Step1 onSearch={() => setStep(2)} />}
        {step === 2 && <Step2 onNextStep={() => setStep(3)} onPrevStep={() => setStep(1)} />}
        {step === 3 && <Step3 onNextStep={() => setStep(4)} onPrevStep={() => setStep(2)}/>}
        {step === 4 && <Step4 onNextStep={() => setStep(5)} onPrevStep={() => setStep(3)}/>}
        {step === 5 && <Step5 onNextStep={() => setStep(6)} onPrevStep={() => setStep(4)}/>}
        {step === 6 && <Step6 onNextStep={() => setStep(7)} onPrevStep={() => setStep(5)}/>}
        {step === 7 && <Step7 onNextStep={() => setStep(8)} onPrevStep={() => setStep(5)}/>}
        {step === 8 && <Step8 onNextStep={() => setStep(9)} onPrevStep={() => setStep(7)}/>}
        {step === 9 && <Step9 onNextStep={() => onClosed()}/>}
      </IonContent>
    </IonModal>
  );
};
