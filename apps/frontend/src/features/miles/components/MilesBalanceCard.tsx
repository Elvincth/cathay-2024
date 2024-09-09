import { AsiaMilesIcon, UnionIcon } from "../../common/components/Icons";
import { FormatNumber } from "../../common/components/FormatNumber";

// interface MilesBalanceCardProps {
//   milesBalance: number;
//   milesChanges: number;
//   milesAvailable: number;
//   milesLocked: number;
// }

export function MilesBalanceCard() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        {/* Current */}
        <div className="flex flex-1 items-center gap-1">
          <AsiaMilesIcon className="text-2xl" />
          <div className="text-4xl font-bold">101389.11</div>
        </div>

        {/* Changes */}
        <div className="text-right text-sm">
          <div className="flex items-center justify-end gap-1 font-bold text-primary">
            + <AsiaMilesIcon className="text-primary" />
            3.31
          </div>

          <div className="opacity-50">Yesterday</div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 text-xs">
        <div className="flex gap-1.5">
          <span className="justify-center opacity-50">Available</span>
          <div className="flex items-center ">
            <AsiaMilesIcon className="pr-1 " />
            <FormatNumber value={10000} />
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <span className="justify-center opacity-50">Locked</span>
          <div className="flex items-center">
            <AsiaMilesIcon className="pr-1 " />
            <FormatNumber value={81307.11} />
          </div>
          <UnionIcon className="text-sm" />
        </div>
      </div>
    </div>
  );
}
