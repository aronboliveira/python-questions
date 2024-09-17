import { RadioGroupProps } from "@/app/lib/declarations/interfaceComponents";
import RadioBlock from "../inputs/RadioBlock";
export default function RadioGroup(props: RadioGroupProps): JSX.Element {
  return (
    <fieldset id={`${props.id}RadioGroup`} data-form={props.id} data-group={props.id}>
      {props.radios.map((r, i) => (
        <RadioBlock
          key={`radio__${i}__${r.value}`}
          group={props.group || props.id || ""}
          required={props.required}
          value={r.value}
          id={`${r.value}__${props.id}`}
        />
      ))}
    </fieldset>
  );
}
