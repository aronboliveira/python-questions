"use client";
import { QuestionRadioProps } from "@/app/lib/declarations/interfaceComponents";
import { opts } from "@/app/vars";
import { useState, useEffect, useRef } from "react";
import { assignFormAttrs } from "../../scripts/forms";
import { nInp } from "@/app/lib/declarations/types";
export default function RadioBlock(props: QuestionRadioProps): JSX.Element {
  const r = useRef<nInp>(null);
  const [v, setV] = useState<"false" | "true">("false");
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    r.current && assignFormAttrs(r.current, r.current?.closest("form") as HTMLFormElement);
  }, []);
  useEffect(() => {
    if (!r.current) return;
    if (v === "true" && r.current.dataset.value && opts.get(props.group)) {
      const op = opts.get(props.group)?.find(o => o.value === r.current?.dataset.value);
      if (
        op?.r &&
        (`${props.group}__${op.r}` === op.value ||
          (/[^0-9]/g.test(op.r) &&
            /^[A-Za-z0-9+/]+={0,2}$/g.test(op.r) &&
            r.current.dataset.value === props.group + "__" + atob(op.r)))
      )
        r.current.classList.add("correct");
    } else if (r.current.classList.contains("correct")) r.current.classList.remove("correct");
  }, [v, props.group]);
  return (
    <div className='radioBlock' id={`${props.group}__block`}>
      <input
        ref={r}
        type='radio'
        className={`form-check-input`}
        id={`${props.value}__id`}
        name={`${props.group}__opt`}
        required={props.required || false}
        disabled={props.required || props.disabled || false}
        readOnly={props.required || props.disabled || props.readOnly || false}
        autoFocus={false}
        data-required={props.required || false}
        data-group={props.group}
        data-labels={`${props.value}__lab`}
        data-value={props.value}
        onChange={ev => setV(ev.currentTarget.checked ? "true" : "false")}
        value={props.defaultValue || v}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          transform: isPressed ? "translateY(0.3rem)" : "translateY(0.15rem)",
          transition: "transform 0.2s ease",
        }}
      />
      <label
        id={`${props.value}__lab`}
        htmlFor={`${props.value}__id`}
        className='form-label'
        data-control={`${props.value}__id`}
      >
        {props.lab}
      </label>
    </div>
  );
}
