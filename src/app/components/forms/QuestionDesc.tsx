import { DescProps } from "@/app/lib/declarations/interfaceComponents";

export default function QuestionDesc({ idf, children }: DescProps): JSX.Element {
  return (
    <div className='descBlock' id={`${idf}QuestionDesc`}>
      {children}
    </div>
  );
}
