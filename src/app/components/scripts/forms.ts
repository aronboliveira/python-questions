import { nFm, nInp } from "@/app/lib/declarations/types";
export function assignFormAttrs(inp: nInp, fm: nFm): void {
  if (!inp || !fm) return;
  inp.dataset.form = `#${fm.id}`;
  inp.formAction = fm.action;
  inp.formMethod = fm.method;
  inp.formEnctype = fm.enctype;
  inp.formNoValidate = fm.noValidate;
}
