import { IonImg, IonSearchbar } from "@ionic/react";
import { destinations } from "~/data/destinations.data";
import { useState } from "react";

export interface Step1Props {
  onSearch: (searchText: string) => void;
}

export function Step1({ onSearch }: Step1Props) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="mt-5 flex flex-col items-center gap-4">
        <IonImg class="h-[60px] w-[60px]" src={"/images/fly.svg"} />
        <div className="text-xl font-light">Discover the Greater Bay Area</div>
      </div>
      <div className="p-4">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => {
            setSearchText(e.detail.value!);
            onSearch(e.detail.value!);
          }}
          className="hx-searchbar p-0 text-sm"
          placeholder="Search destination, e.g. Shanghai"
        />
        <div className="mt-4 flex flex-col gap-4">
          <div className="text-xs text-[#aaa]">Suggestions</div>

          {destinations.slice(0, 5).map((destination, i) => (
            <div
              role="button"
              key={i}
              className="active:text-primary-dark text-sm font-light text-primary active:opacity-50"
              onClick={() => onSearch(destination.city)}
            >
              {destination.city}, {destination.country}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
