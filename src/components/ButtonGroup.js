import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ButtonGroup() {
  let [categories] = useState({
    All: [],
    Resturants: [],
    Hotels: [],
    Transit: [],
    Parking: [],
    Pharmacies: [],
  });

  return (
    <div
      className=" bottom-0  px-2  sm:px-0"
      style={{
        position: "absolute",
        padding: "0.9rem",
        width: "45%",
        left: "30%",
      }}
    >
      <Tab.Group>
        <Tab.List
          className="flex space-x-1 rounded-xl bg-black bg-opacity-40 
 p-1"
        >
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-xl py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-black focus:outline-none focus:ring-3",
                  selected
                    ? "bg-white shadow"
                    : "text-black hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
