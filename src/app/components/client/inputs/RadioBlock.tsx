"use client";
import { RadioProps } from "@/app/lib/declarations/interfaceComponents";
import { labEquivalents } from "@/app/vars";
import { useState, useEffect, useRef } from "react";
import { assignFormAttrs } from "../../scripts/forms";
import { nInp } from "@/app/lib/declarations/types";
export default function RadioBlock(props: RadioProps): JSX.Element {
  const r = useRef<nInp>(null);
  const [v, setV] = useState<"false" | "true">("false");
  const tLab = props.lab || labEquivalents.get(props.id) || props.id;
  useEffect(() => {
    r.current && assignFormAttrs(r.current, r.current?.closest("form") as HTMLFormElement);
  }, []);
  return (
    <div>
      <label id={`${props.value}Lab`} htmlFor={`${props.value}`} className='form-label' data-control={`${props.value}`}>
        {tLab}
      </label>
      <input
        ref={r}
        type='radio'
        className='form-check-input'
        id={props.value}
        name={`${props.value.replace(/([A-Z])/g, (m, i) =>
          m === props.value.charAt(0) ? `${m.toLowerCase()}` : `_${m.toLowerCase()}`
        )}`}
        required={props.required || false}
        disabled={props.required || props.disabled || false}
        readOnly={props.required || props.disabled || props.readOnly || false}
        autoFocus={false}
        data-required={props.required || false}
        data-group={props.group}
        data-labels={`${props.value}Lab`}
        onChange={ev => setV(ev.currentTarget.checked ? "true" : "false")}
        value={props.defaultValue || v}
      />
    </div>
  );
}
