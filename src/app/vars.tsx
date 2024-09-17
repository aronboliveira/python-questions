import { Metadata } from "next";
import { QuestionRadioProps } from "./lib/declarations/interfaceComponents";
import QuestionDesc from "./components/forms/QuestionDesc";
import AlgoAnswer from "./components/forms/answers/AlgoAnswer";
import { isValidElement } from "react";
import FilesAnswer from "./components/forms/answers/FilesAnswer";
import DjangoAnswer from "./components/forms/answers/DjangoAnswer";
export const rc: { [k: string]: { [k: string]: string[] } } = {};
export const labEquivalents: Map<string, string> = new Map([["default", "none"]]);
export const gs = [
  {
    name: "caseAlgo",
    d: (
      <QuestionDesc idf='caseAlgo'>
        <div>
          <p className='addBlock'>
            Um analista de sistema está avaliando o desenvolvimento de um algoritmo pela sua equipe. Ao verificar a
            implementação, notou que duas funções, uma de pesquisa, e outra, de ordenação, eram pouco eficientes, pois
            implementavam:
          </p>
          <ol>
            <li>Um algoritmo de ordenação em tempo sempre quadrático;</li>
            <li>Um algoritmo linear de pesquisa na lista resultante;</li>
          </ol>
          <div className='mainBlock'>Analisando o caso, o analista pode tirar qual das seguintes cinco conclusões?</div>
        </div>
      </QuestionDesc>
    ),
    labs: [
      <AlgoAnswer p='Bubble Sort' c='Quick Sort' s='Linear Search' />,
      <AlgoAnswer p='Insertion Sort' c='Selection Sort' s='Hashing' />,
      <AlgoAnswer p='Selection Sort' c='Merge Sort' s='Binary Search' />,
      <AlgoAnswer p='Merge Sort' c='Heap Sort' s='Backtracing' />,
      <AlgoAnswer p='Quick Sort' c='Bubble Sort' s='BFS' />,
    ],
    r: 2,
  },
  {
    name: "caseLoop",
    d: (
      <QuestionDesc idf='caseLoop'>
        <p className='addBlock'>
          <span>
            Qual das seguintes opções representa, em Python, a complexidade correta para um loop aninhado iterando sobre
            dois arrays,
          </span>
          <code> arr1</code> e <code>arr2</code>, de tamanhos <code>n</code> e <code>m</code> respectivamente?
        </p>
        <pre>
          <code>
            {`arr1 = [1, 2, 3, ..., n]
  arr2 = [1, 2, 3, ..., m]
  for i in arr1:
     for j in arr2:
        print(i, j)`}
          </code>
        </pre>
      </QuestionDesc>
    ),
    labs: [<span>n</span>, <span>O(n^2)</span>, <span>O(n * m)</span>, <span>O(log n + log m)</span>],
    r: 1,
  },
  {
    name: "caseCsv",
    d: (
      <QuestionDesc idf='caseCsv'>
        <div>
          <p>
            <span>
              Um desenvolvedor backend precisa desenvolver um script em <b>.py</b> para converter uma tabela em{" "}
              <b>.xlsx</b> para <b>.csv</b> e então torná-la facilmente transmissível e acessível via requisições online
              pelo client da aplicação.
            </span>
            <br />
          </p>
          <div className='mainBlock'>Para cumprir a tarefa, qual das respostas a seguir é mais adequada?</div>
        </div>
      </QuestionDesc>
    ),
    labs: [
      <FilesAnswer f='os.walk' x='openpyxl' c='pandas' j='JSON' h='HTTP' a='RESTful' />,
      <FilesAnswer f='os.listdir' x='xlrd' c='csv' j='YAML' h='FTP' a='SOAP' />,
      <FilesAnswer f='shutil.copy' x='csv' c='openpyxl' j='XML' h='WebSocket' a='GraphQL' />,
      <FilesAnswer f='glob.glob' x='pandas' c='openpyxl' j='CSV' h='SMTP' a='REST' />,
    ],
    r: 0,
  },
  {
    name: "caseReplace",
    d: (
      <QuestionDesc
        idf='caseReplace'
        children={
          <div>
            <p className='addBlock'>
              <span>
                Uma equipe de desenvolvimento busca criar uma aplicação que necessita armazenar em seu banco de dados
                informações sobre a localização geográfica do usuário.
              </span>
              <br />
              <span>
                Para isso, usa-se a interface de Geolocation do JavaScript no Frontend, solicitando ao usuário as
                devidas permissões, e então envia-se ao banco de dados a cada intervalo determinado os dados geográficos
                atualizados.
              </span>
              <br />
              <span>
                A equipe de gerenciamento do banco de dados, no entanto, notou que, em algum ponto na passagem entre o
                client e o servidor no Endpoint designado, os dados estavam perdendo a formatação adequada.
              </span>
            </p>
            <div className='mainBlock'>
              Considerando que o script no endpoint foi criado em Django, qual das opções realiza a correta
              sanitarização e modelagem dos dados?
            </div>
          </div>
        }
      />
    ),
    labs: [<DjangoAnswer f='1' />, <DjangoAnswer f='2' />, <DjangoAnswer f='3' />, <DjangoAnswer f='4' />],
    r: 1,
  },
  {
    name: "caseExcel",
    labs: ["Primeiro Excel", "Segundo Excel"],
    r: 0,
    d: <QuestionDesc idf='caseExcel' children={<></>} />,
  },
];
export const opts: Map<string, QuestionRadioProps[]> = new Map(
  gs.map(g => [
    g.name,
    g.labs.map((lab, idx) => {
      const labText =
        typeof lab === "string" || (lab as any)["$$typeof"].toString() === "Symbol(react.element)" ? lab : "";
      const labValue =
        typeof lab === "object" &&
        (lab as any)["$$typeof"].toString() === "Symbol(react.element)" &&
        (typeof lab.props.p === "string" || typeof lab.props.f === "string")
          ? (Object.values(lab.props).reduce((a, p) => a + (p as string).replace(/\s/g, ""), "") as string).replace(
              /\./g,
              "dot"
            )
          : isValidElement(lab) && typeof (lab as any).props.children === "string"
          ? (lab as any).props.children
          : lab;
      const rLab = g.labs[g.r ?? -1];
      const r =
        typeof rLab === "object" && (rLab as any)["$$typeof"].toString() === "Symbol(react.element)"
          ? (Object.values(rLab.props).reduce((a, p) => a + (p as string).replace(/\s/g, ""), "") as string).replace(
              /\./g,
              "dot"
            )
          : rLab;
      return {
        group: g.name,
        lab: labText as string,
        value: `${g.name}__${labValue}`,
        idx,
        r: r as string,
      };
    }),
  ])
);
console.log(opts);
