import React from "react";
import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="h-full w-full flex items-start justify-start bg-slate-900">
      <Loader2 className="animate-spin my-30 mx-auto text-slate-400" />
    </div>
  );
};

export default Spinner;
