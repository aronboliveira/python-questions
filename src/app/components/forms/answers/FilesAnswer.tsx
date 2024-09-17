import { FilesAnswerProps } from "@/app/lib/declarations/interfaceComponents";

export default function FilesAnswer({ x, c, f, j, h, a }: FilesAnswerProps): JSX.Element {
  return (
    <>
      <span>O desenvolvedor deve iterar sobre o diretório de trabalho chamando o método </span>
      <dfn>
        <b>{f}</b>
      </dfn>
      <span> e então utilizar a biblioteca </span>
      <dfn>
        <b>{x}</b>
      </dfn>
      <span> para manipular adequadamente as planilhas Excel. Finalmente, chama-se os métodos da biblioteca </span>
      <dfn>
        <b>{c}</b>
      </dfn>
      <span> para gerar os arquivos .csv.</span>
      <br />
      <span>Para transmissão segura e serializável em rede, deve converter os dados em </span>
      <dfn>
        <b>{j}</b>
      </dfn>
      <span>, o que permitirá fácil transmissão no corpo de requisições </span>
      <dfn>
        <b>{h}</b>
      </dfn>
      <span>, como previsto pela arquitetura </span>
      <dfn>
        <b>{a}</b>
      </dfn>
      .
    </>
  );
}
