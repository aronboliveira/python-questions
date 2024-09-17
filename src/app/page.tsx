import Questions from "./components/client/forms/Questions";
import HomeWatcher from "./components/client/watchers/HomeWatcher";

export default function Home(): JSX.Element {
  return (
    <div id='home'>
      <Questions
        id='questions'
        groups={["1", "2", "3"].map((m, i) => {
          return {
            id: m,
            group: m,
            radios: [
              {
                id: m,
                group: m,
                value: m,
              },
            ],
          };
        })}
      />
      <HomeWatcher />
    </div>
  );
}
