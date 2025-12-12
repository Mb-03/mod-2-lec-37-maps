"use client";

import { useState } from "react";
import geoData from "../data/geo_regions.json";
import { useRegions } from "../hooks/useRegions";
import { Region } from "../types/region.types";
import {
  ComposableMap,
  Geographies,
  Geography,
  Latitude,
  Longitude,
} from "@vnedyalk0v/react19-simple-maps";

const GeorgiaMap = ({ onSelect }: { onSelect: (r: Region | null) => void }) => {
  const { data: regions } = useRegions();

  const [hover, setHover] = useState<Region | null>(null);

  const getRegion = (name: string): Region | null => {
    return (
      regions?.find((r) => r.name.toLowerCase().includes(name.toLowerCase())) ??
      null
    );
  };

  return (
    <div className="w-full min-h-[600px] flex items-center justify-center p-8 overflow-visible">
      {/* Tooltip */}
      {hover && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 shadow-lg rounded z-50 pointer-events-none">
          {hover.name}: <b>{hover.value}</b>
        </div>
      )}

      {/* Map Container */}
      <div className="w-full max-w-5xl">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 5500,
            center: [43.5 as Longitude, 42.3 as Latitude], // Adjusted center more to the west
          }}
          width={1000}
          height={700}
          className="w-full h-auto"
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const regionName =
                  geo.properties.NAME_1 ?? geo.properties.name ?? "";
                const region = getRegion(regionName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => region && setHover(region)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => onSelect(region)}
                    style={{
                      default: {
                        fill: region ? "#3b82f6" : "#d4d4d4",
                        stroke: "#ffffff",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#1d4ed8",
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#1e40af",
                        stroke: "#ffffff",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default GeorgiaMap;
