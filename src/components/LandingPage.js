import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import ButtonGroup from "./ButtonGroup";

import { BiSolidDirectionRight } from "react-icons/bi";
import Map from "./MapView";
import { location } from "../data/MapData";
import Playground from "./Playground";

export default function LandingPage() {
  const [selected, setSelected] = useState(location[0]);
  const [direction, setDirection] = useState(false);
  const [query, setQuery] = useState("");

  const LoadImg = (value) => {
    if (value === true) {
      setDirection(true);
    } else {
      setDirection(false);
    }
  };

  const filteredlocation =
    query === ""
      ? location
      : location.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <Playground />

      <button
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          display: ` ${direction ? "block" : "none"}`,
        }}
        onClick={() => LoadImg(false)}
      ></button>

      <div
        style={{
          position: "absolute",
     
          width: "35%",
          left: "30%",
          display: ` ${direction ? "none" : "block"}`,
        }}
      >
        <div class="input-group-prepend  p-1 ">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1 m-3">
              <div className="relative  cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-4 pl-5 pr-10 text-lg leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-10 flex items-center pr-2">
                  <MagnifyingGlassIcon
                    className="h-5 w-7 me-2 text-gray-400"
                    size={"20px"}
                    color="black"
                    aria-hidden="true"
                  />
                      |
                </Combobox.Button>
              
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
             
                 <BiSolidDirectionRight
                    className="  text-blue-400"
                    aria-hidden="true"
                    color=""
                    size={"26px"}
                    onClick={() => LoadImg(true)}
                  />
                </div>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredlocation.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredlocation.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
      <Map location={selected} direction={direction} />
      <ButtonGroup location={selected}/>
    </>
  );
}
