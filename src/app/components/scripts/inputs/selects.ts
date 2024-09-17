import { nSl } from "@/app/lib/declarations/types";
import { rc } from "@/app/vars";

export function toggleOption(ev: MouseEvent) {
  try {
    const clickEl = document.elementFromPoint(ev.clientX, ev.clientY);
    if (clickEl instanceof HTMLOptionElement) clickEl.classList.toggle("selected");
  } catch (e) {
    console.error(`Error executing toggleOption:\n${(e as Error).message}`);
  }
}
export function handleClick(ev: MouseEvent) {
  let targ = ev.currentTarget;
  if (!(targ instanceof HTMLSelectElement || targ instanceof HTMLOptionElement)) {
    console.warn(`Event target passed to handleClick is not a select`);
    return;
  }
  const updateOpts = (targ: HTMLSelectElement) => {
    const clickEl = document.elementFromPoint(ev.clientX, ev.clientY);
    try {
      if (clickEl instanceof HTMLOptionElement) {
        if (!clickEl.classList.contains("selected")) clickEl.selected = false;
        if (!rc[targ.id]) rc[targ.id] = {};
        if (!Array.isArray(rc[targ.id]?.lastOpts)) rc[targ.id].lastOpts = [];
        if (!Array.isArray(rc[targ.id]?.lastOpts)) console.warn(`Failed to fetch recent last options for the <select>`);
        else {
          for (const o of Object.values(rc[targ.id].lastOpts)) {
            const sOp = Array.from(targ.options).find(op => op.value === o);
            if (sOp && o !== clickEl.value) {
              sOp.selected = true;
              sOp.ariaSelected = "true";
            }
          }
        }
        pushSelectOpts(targ, targ.id, Array.from(targ.selectedOptions));
      }
    } catch (e) {
      console.error(`Error executing updateOpts:\n${(e as Error).message}`);
    }
  };
  if (targ instanceof HTMLSelectElement) updateOpts(targ);
  else {
    targ = targ.closest("select");
    if (!(targ instanceof HTMLSelectElement)) {
      console.warn(`Failed to fetch parent select`);
      return;
    }
    updateOpts(targ);
  }
}
export function pushSelectOpts(el: nSl, idf: string, opts: HTMLOptionElement[]): void {
  try {
    if (!(el instanceof HTMLSelectElement && (el.type === "select-multiple" || el.dataset.type === "select-multiple")))
      throw new Error(`Invalid type for select`);
    if (typeof idf !== "string") throw new Error(`Invalid type passed as identificator.`);
    if (idf === "" || !document.getElementById(idf)) throw new Error(`Invalid id string passed as identificator.`);
    if (!rc[idf]) rc[idf] = {};
    rc[idf].lastOpts = opts.map(op => op.value);
  } catch (e) {
    console.error(`Error executing pushSelectOpts:\n${(e as Error).message}`);
  }
}
