import Questions from "./components/client/forms/Questions";
import HomeWatcher from "./components/client/watchers/HomeWatcher";
import { QuestionRadioProps } from "./lib/declarations/interfaceComponents";
import { gs, opts } from "./vars";
export default function Home(): JSX.Element {
  return (
    <div id='home'>
      <Questions
        id='questions'
        groups={gs.map((m, i) => {
          const regularGroup = m.name.replace(/([A-Z])/g, (w, i) =>
            i === 0 ? `${w.charAt(0).toUpperCase()}${w.slice(1)}` : ` ${w.toLowerCase()}`
          );
          const caseOpts = opts.get(m.name) ?? [
            {
              idx: -1,
              group: m.name,
              shownGroup: regularGroup,
              value: "undefined",
              lab: "rotulo",
            } as QuestionRadioProps,
          ];
          return {
            idx: i,
            group: m.name,
            shownGroup: regularGroup,
            desc: m.d,
            radios: [...caseOpts],
          };
        })}
      />
      <HomeWatcher />
    </div>
  );
}
