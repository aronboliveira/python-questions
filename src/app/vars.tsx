import { QuestionRadioProps } from "./lib/declarations/interfaceComponents";
import QuestionDesc from "./components/forms/QuestionDesc";
import AlgoAnswer from "./components/forms/answers/AlgoAnswer";
import { isValidElement } from "react";
import FilesAnswer from "./components/forms/answers/FilesAnswer";
import DjangoAnswer from "./components/forms/answers/DjangoAnswer";
import SearchAnswer from "./components/forms/answers/SearchAnswer";
import SelectAnswer from "./components/forms/answers/SelectAnswer";
export const rc: { [k: string]: { [k: string]: string[] } } = {};
export const labEquivalents: Map<string, string> = new Map([["default", "none"]]);
export const gs = [
  {
    name: "caseAlgo",
    d: (
      <QuestionDesc idf='caseAlgo'>
        <article>
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
        </article>
      </QuestionDesc>
    ),
    labs: [
      <AlgoAnswer p='Bubble Sort' c='Quick Sort' s='Linear Search' key='aa_0' />,
      <AlgoAnswer p='Insertion Sort' c='Selection Sort' s='Hashing' key='aa_1' />,
      <AlgoAnswer p='Selection Sort' c='Merge Sort' s='Binary Search' key='aa_2' />,
      <AlgoAnswer p='Merge Sort' c='Heap Sort' s='Backtracing' key='aa_3' />,
      <AlgoAnswer p='Quick Sort' c='Bubble Sort' s='BFS' key='aa_4' />,
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
    labs: [
      <span key='la_0'>n</span>,
      <span key='la_1'>O(n^2)</span>,
      <span key='la_2'>O(n * m)</span>,
      <span key='la_3'>O(log n + log m)</span>,
      <span key='la_4'>O(log n)</span>,
    ],
    r: 2,
  },
  {
    name: "caseCsv",
    d: (
      <QuestionDesc idf='caseCsv'>
        <article>
          <p>
            <span>
              Um desenvolvedor backend precisa desenvolver um script em <b>.py</b> para converter uma tabela em{" "}
              <b>.xlsx</b> para <b>.csv</b> e então torná-la facilmente transmissível e acessível via requisições online
              pelo client da aplicação.
            </span>
            <br />
          </p>
          <div className='mainBlock'>Para cumprir a tarefa, qual das respostas a seguir é mais adequada?</div>
        </article>
      </QuestionDesc>
    ),
    labs: [
      <FilesAnswer f='os.walk' x='openpyxl' c='pandas' j='JSON' h='HTTP' a='RESTful' key='fa_0' />,
      <FilesAnswer f='os.listdir' x='xlrd' c='csv' j='YAML' h='FTP' a='SOAP' key='fa_1' />,
      <FilesAnswer f='shutil.copy' x='csv' c='openpyxl' j='XML' h='WebSocket' a='GraphQL' key='fa_2' />,
      <FilesAnswer f='os.walk' x='pandas' c='openpyxl' j='JSON' h='SMTP' a='RESTful' key='fa_3' />,
      <FilesAnswer f='subprocess.run' x='openpyxl' c='pandas' j='JSON' h='HTTP' a='SOAP' key='fa_4' />,
    ],
    r: 0,
  },
  {
    name: "caseReplace",
    d: (
      <QuestionDesc idf='caseReplace'>
        <article>
          <p className='addBlock'>
            <span>
              Uma equipe de desenvolvimento busca criar uma aplicação que necessita armazenar em seu banco de dados
              informações sobre a localização geográfica do usuário.
            </span>
            <br />
            <span>
              Para isso, usa-se a interface de Geolocation do JavaScript no Frontend, solicitando ao usuário as devidas
              permissões, e então envia-se ao banco de dados a cada intervalo determinado os dados geográficos
              atualizados.
            </span>
            <br />
            <span>
              A equipe de gerenciamento do banco de dados, no entanto, notou que, em algum ponto na passagem entre o
              client e o servidor no Endpoint designado, os dados estavam perdendo a formatação adequada.
            </span>
          </p>
          <div className='mainBlock'>
            Considerando que o script no endpoint foi criado em Django, qual das opções realiza a correta sanitarização
            e modelagem dos dados?
          </div>
        </article>
      </QuestionDesc>
    ),
    labs: [...["0", "1", "2", "3", "4"].map((_, i) => <DjangoAnswer f={(i + 1).toString()} key={`da_${i}`} />)],
    r: 1,
  },
  {
    name: "caseSearch",
    d: (
      <QuestionDesc idf='caseSearch'>
        <div>
          <p className='addBlock'>
            <span>
              Para permitir que os usuários de um aplicativo possam obter dados sobre sua atividade, uma equipe de
              desenvolvimento está desenvolvendo um algoritmo que implemente as corretas etapas de ETL utilizando
              React.js, Django e SQL.
            </span>
            <br />
            <span>
              Neste sentido, a requisição é obtida a partir da submissão de um formulário construído em uma das páginas
              do sistema.
            </span>
          </p>
          <div className='mainBlock'>
            Marque a opção que descreve, de forma resumida e correta, as etapas necessárias para preencher os
            requisitos, desde a implementação da possibilidade de submissão até o retorno para o client.
          </div>
        </div>
      </QuestionDesc>
    ),
    labs: [
      <SearchAnswer
        f='onsubmit'
        a='Fetch API'
        b='pandas'
        c='Tempo total de sessão, Número de interações, Contagem de eventos, Duração média das interações, Taxa de cliques e Tempo entre ações consecutivas'
        d='INNER JOIN, HAVING, SUM, COUNT e AVG'
        j='CSV'
        key='sa_0'
      />,
      <SearchAnswer
        f='onInput'
        a='Math API'
        b='json'
        c='Média de tempo por sessão, Total de visualizações de página, Bounce rate, Tempo de carregamento médio e Total de páginas únicas acessadas'
        d='LEFT JOIN, ORDER BY, MAX, MIN e SUM'
        j='HTML'
        key='sa_1'
      />,
      <SearchAnswer
        f='onSubmit'
        a='Fetch API'
        b='pandas'
        c='Tempo médio de sessão, Número de acessos únicos, Desvio-padrão de interações, Duração média de ações, Correlação entre eventos e Tempo total de inatividade'
        d='SELECT DISTINCT, AGGREGATE, WHERE, JOIN, SUM e STDDEV'
        j='JSON'
        key='sa_2'
      />,
      <SearchAnswer
        f='onSubmit'
        a='Fetch API'
        b='pandas'
        c='Tempo médio de sessão, Número de acessos únicos e Desvio-padrão de interações'
        d='SELECT DISTINCT, AGGREGATE e WHERE'
        j='JSON'
        key='sa_3'
      />,
      <SearchAnswer
        f='onChange'
        a='Location API'
        b='openpyxl'
        c='Número de logins, Quantidade de transações, Total de erros de autenticação, Tempo médio de resposta do servidor e Média de tentativas de login por sessão'
        d='UNION, LIMIT, COUNT, AVG e ORDER BY'
        j='XML'
        key='sa_4'
      />,
    ],
    r: 3,
  },
  {
    name: "caseSelection",
    d: (
      <article>
        <div className='addBlock'>
          <div style={{ paddingBottom: "0.5rem" }}>
            Um ecólogo busca analisar, através do banco de dados de seu laboratório de genética sobre o gênero de
            insetos <em>Djanguensis</em>, se a evolução da espécie no último milênio tendeu a uma seleção natural
            disruptiva, direcional ou estabilizadora.
          </div>
          <div style={{ paddingBottom: "0.5rem" }}>
            Os critérios para a pontuação são definidos cuidadosamente, mas não são aqui ilustrados. Cada um dos genes
            recebe, no entanto, uma <b>pontuação de divergência</b> com base na sua diferença de bases nitrogenadas.
          </div>
          <div style={{ paddingBottom: "0.5rem" }}>
            Gráficos, então, são montados para cada um dos genes, comparando a distância de cada espécie em relação ao
            valor de <b>mediana</b>.
          </div>
          <div style={{ paddingBottom: "0.5rem" }}>
            Por fim, os gráficos são sobrepostos e um gráfico médio de variação entre as espécies é criado.
          </div>
          <div style={{ paddingBottom: "0.5rem" }}>
            Considere um banco <b>MySQL</b> e o uso de bibliotecas <b>Python</b> para realizar as tarefas desde a
            extração dos dados do bancos até a definição dos índices estatísticos requisitados. Cada espécie possui um
            campo <code>last_seen</code> para representar sua última observação em anos; se for maior que 100, a espécie
            é considerada como extinta e plottada no grupo de extintos, enquanto as demais são plottadas como grupo de
            espécies vivas (ambas são colocadas em comparação para definir a tendência de seleção).
          </div>
        </div>
        <div className='mainBlock'>Qual dos códigos apresentados a seguir melhor atende as demandas do projeto?</div>
      </article>
    ),
    labs: [...["0", "1", "2", "3", "4"].map((_, i) => <SelectAnswer f={(i + 1).toString()} key={`sa_${i}`} />)],
    r: 4,
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
        value: `${g.name}__${btoa(labValue)}`,
        idx,
        r: btoa(r as string),
      };
    }),
  ])
);
