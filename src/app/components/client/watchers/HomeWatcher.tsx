"use client";
import { modelScripts, syncAriaStates } from "@/app/lib/model/general";
import { rc } from "@/app/vars";
import { useEffect } from "react";
export default function HomeWatcher(): JSX.Element {
  useEffect(() => {
    modelScripts();
    syncAriaStates(document.querySelectorAll("*"));
    setInterval(() => localStorage.setItem("rc", JSON.stringify(rc)), 500);
  }, []);
  return <span className='watcher' id='homeWatcher'></span>;
}
