import { AlgoProps } from "@/app/lib/declarations/interfaceComponents";
export default function AlgoAnswer({ p, c, s }: AlgoProps): JSX.Element {
  return (
    <>
      <span>O algoritmo feito anteriormente pela equipe usava </span>
      <dfn>
        <b>{p}</b>
      </dfn>
      <span>, podendo ser mais eficientemente substituído por implementações de </span>
      <dfn>
        <b>{c}</b>.
      </dfn>
      <br />
      <span>Além disso, para aumentar a eficiência de pesquisa deve-se utilizar técnicas de </span>
      <dfn>
        <b>{s}</b>
      </dfn>
      <span>, que percorrem a lista do início ao fim.</span>
    </>
  );
}
