"use client";

import { useState } from "react";
import { Region } from "../types/region.types";
import GeorgiaMap from "./GeorgiaMap";

const GeorgiaMapContainer = () => {
  const [selected, setSelected] = useState<Region | null>(null);

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Georgia Map</h1>
      <GeorgiaMap onSelect= {setSelected} />
      <div className="bg-white p-4 shadow rounded">
        {selected ? (
          <>
            <h2 className="text-xl font-semibold">{selected.name}</h2>
            <p className="text-gray-700">{selected.value}</p>
          </>
        ) : (
          <p> Click a region to see info</p>
        )}
      </div>
    </main>
  );
};

export default GeorgiaMapContainer;
