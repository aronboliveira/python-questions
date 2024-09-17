import { inpType } from "./types";
export interface FormProps {
  id: string;
  inps?: InpProps[];
  groups?: RadioGroupProps[];
}
export interface InpProps {
  id: string;
  type: inpType;
  lab?: string | React.Element;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: "";
}
export interface InpProps extends InpProps {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  autocomplete?: boolean;
  dataList?: string[];
}
export interface TextInpProps extends InpProps {
  autocapitalize?: boolean;
}
export interface NumInpProps extends InpProps {
  step?: boolean;
}
export interface CheckProps extends InpProps {
  checked: boolean;
}
export interface RadioGroupProps extends Omit<Partial<InpProps>, "type"> {
  group: string;
  desc: string | React.ReactNode;
  idx: number;
  radios: (RadioProps | QuestionRadioProps)[];
  shownGroup?: string;
}
export interface RadioProps extends Omit<InpProps, "type"> {
  group: string;
  value: string;
}
export interface QuestionRadioProps extends RadioProps {
  r?: string;
  id?: string;
  lab?: string | JSX.Element;
}
export interface OptProps {
  value: string;
  text: string;
}
export interface OptGroupProps {
  lab: string;
  opts: OptProps[];
}
export interface SelectProps extends InpProps {
  defV: string;
  type: "select-one" | "select-multiple";
  opts: OptProps[] | OptGroupProps[];
}
export interface DescProps {
  idf: string;
  children: React.ReactNode;
}
export interface AlgoProps {
  p: string;
  c: string;
  s: string;
}
export interface FilesAnswerProps {
  f: string;
  x: string;
  c: string;
  j: string;
  h: string;
  a: string;
}
export interface DjangoProps {
  f: string;
}
