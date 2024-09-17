import { RadioGroupProps } from "@/app/lib/declarations/interfaceComponents";
import RadioBlock from "../client/inputs/RadioBlock";
export default function RadioGroup(props: RadioGroupProps): JSX.Element {
  const idf = props.id || props.group;
  return (
    <fieldset id={`${idf}RadioGroup`} data-group={idf}>
      <legend id={`${idf}QuestionTitle`} className='questionTitle'>
        <span className='idxBlock'>Questão {props.idx + 1}: </span>
        <span className='descBlock'>{props.desc}</span>
      </legend>
      {props.radios.map((r, i) => (
        <RadioBlock
          key={`radio__${i}__${r.value}`}
          group={idf || ""}
          required={props.required}
          value={r.value}
          lab={r.lab}
          id={`${r.value}__${idf}`}
        />
      ))}
    </fieldset>
  );
}
