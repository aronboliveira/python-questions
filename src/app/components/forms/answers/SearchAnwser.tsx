import { SearchAnswerProps } from "@/app/lib/declarations/interfaceComponents";
export default function SearchAnswer({ f, a, b, c, d, j }: SearchAnswerProps): JSX.Element {
  return (
    <div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <span>A camada Frontend deve possuir um listener ativo e preventivo na forma de um atributo funcional </span>
        <code>{f}</code>
        <span>, associado a um HTMLFormElement, a um HTMLButtonElement ou a um HTMLInputElement.</span>
      </div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <span>Quando o usuário dispara o evento de submissão, caso seja validado, usa-se a </span>
        <b>{a}</b>
        <span> da biblioteca base do JavaScript para solicitar, por HTTP, a um endpoint os dados de retorno.</span>
      </div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <span>No servidor Django acessado, usa-se a biblioteca </span>
        <b>{b} </b>
        <span>para calcular os dados relevantes do usuário, como, por exemplo:</span>
        <b>{c}</b>.
      </div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <span>Além disso, no banco de dados são utilizadas funções como </span>
        <b>{d}</b>
      </div>
      <div style={{ paddingBottom: "0.5rem" }}>
        <span>Os dados são então retornados ao client na forma de um </span>
        <b>{j}</b>
      </div>
    </div>
  );
}
