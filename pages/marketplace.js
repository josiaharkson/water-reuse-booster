import React from "react";
import dynamic from "next/dynamic";

import Head from "../components/global/Head";
import { FullBackdrop } from "../components/global/BackDrop";

const MarketPlace = dynamic(() => import("../components/Marketplace"), {
  loading: () => <FullBackdrop />,
});

export default function Indx() {
  return (
    <div>
      <Head title="Water Reuse | Market Place" />
      <MarketPlace />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body::-webkit-scrollbar {
          display: none;
          background-color: #00008000;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </div>
  );
}
