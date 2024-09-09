import { IonCol } from "@ionic/react";
import React from "react";
import { AsiaMilesIcon, UnionIcon } from "./Icons";

export const ItemCard = ({
  title,
  content,
  haveUnionIcon = false,
  onClick,
}: {
  title: string;
  content: React.ReactNode;
  haveUnionIcon?: boolean;
  onClick?: () => void;
}) => {
  return (
    <IonCol
      className=" flex flex-row justify-between rounded-xl  bg-[#F4F4F4]  px-4"
      onClick={onClick}
    >
      <div className="flex flex-col  py-3.5">
        <div className=" opacity-50">{title}</div>
        <div className="pt-0.5 text-lg font-bold">{content} </div>
      </div>
      {haveUnionIcon && (
        <div className="flex flex-col justify-center text-xl">
          <UnionIcon />
        </div>
      )}
    </IonCol>
  );
};
