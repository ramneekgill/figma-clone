import { useMyPresence, useOthers } from "@liveblocks/react";
import LiveCursors from "./cursor/LiveCursors";

function Live() {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;
  return (
    <div>
      <LiveCursors others={others} />
    </div>
  );
}

export default Live;
