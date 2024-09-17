"use client";
import { FormProps } from "@/app/lib/declarations/interfaceComponents";
import RadioBlock from "../inputs/RadioBlock";
import RadioGroup from "./RadioGroup";
export default function Questions({ id, inps, groups }: FormProps): JSX.Element {
  return (
    <form
      id='questionsForm'
      name='questions_form'
      action=''
      method='post'
      encType='application/x-www-form-urlencoded'
      target='_self'
      className='form'
      onSubmit={ev => ev.preventDefault()}
    >
      {inps?.map((inp, idx) => {
        if (inp.type === "radio")
          return (
            <RadioBlock key={`inp__${id}__${idx}`} group={id} required={inp.required} value={inp.id} id={inp.id} />
          );
        else return <input type='text' key={`inp__${id}__${idx}`} />;
      })}
      {groups?.map((g, i) => (
        <RadioGroup group={g.group} radios={g.radios} />
      ))}
    </form>
  );
}
