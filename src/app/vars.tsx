import { Metadata } from "next";
import { QuestionRadioProps } from "./lib/declarations/interfaceComponents";
import QuestionDesc from "./components/forms/QuestionDesc";
import AlgoAnswer from "./components/forms/answers/AlgoAnswer";
export const rc: { [k: string]: { [k: string]: string[] } } = {};
export const metadata: Metadata = {
  title: "Python challenge",
  description: "Form generated for answering question about the Python libraries knowledge",
};
export const labEquivalents: Map<string, string> = new Map([["default", "none"]]);
export const gs = [
  {
    name: "caseAlgo",
    d: (
      <QuestionDesc idf='caseAlgo'>
        <p>
          Um analista de sistema está avaliando o desenvolvimento de um algoritmo pela sua equipe. Ao verificar a
          implementação, notou que duas funções, uma de pesquisa, e outra, de ordenação, eram pouco eficientes, pois
          implementavam:
          <ol>
            <li>Um algoritmo de ordenação em tempo sempre quadrático;</li>
            <li>Um algoritmo linear de pesquisa na lista resultante;</li>
          </ol>
          Analisando o caso, o analista pode tirar qual das seguintes cinco conclusões?
        </p>
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
        <p>
          Qual das seguintes opções representa a complexidade correta para um loop aninhado iterando sobre dois arrays,
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
    labs: [<span>a</span>, <span>O(n^2)</span>, <span>O(n * m)</span>, <span>O(log n + log m)</span>],
    r: 1,
  },
  {
    name: "caseReplace",
    d: <QuestionDesc idf='caseReplace' children={<></>} />,
    labs: ["Primeiro Replace", "Segundo Replace"],
    r: 0,
  },
  {
    name: "caseCsv",
    labs: ["Primeiro Csv", "Segundo Csv"],
    r: 1,
    d: <QuestionDesc idf='caseCsv' children={<></>} />,
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
      const labText = typeof lab === "string" ? lab : lab.props?.p || "";
      const labValue = labText
        .split(" ")
        .reduce(
          (ac: string, w: string, i: number) =>
            i === 0 ? ac + w.toLowerCase() : ac + `${w.charAt(0).toUpperCase()}${w.slice(1).toLowerCase()}`,
          ""
        );
      const rLab = g.labs[g.r || -1];
      const rValue = typeof rLab === "string" ? rLab : rLab && rLab.props && rLab.props.p ? rLab.props.p : "";
      return {
        group: g.name,
        lab: labText,
        value: `${g.name}__${labValue}`,
        idx,
        r: rValue,
      };
    }),
  ])
);
