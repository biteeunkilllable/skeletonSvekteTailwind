import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component, a as subscribe } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { point } = $$props;
  let { option } = $$props;
  let { valueCheck } = $$props;
  if ($$props.point === void 0 && $$bindings.point && point !== void 0)
    $$bindings.point(point);
  if ($$props.option === void 0 && $$bindings.option && option !== void 0)
    $$bindings.option(option);
  if ($$props.valueCheck === void 0 && $$bindings.valueCheck && valueCheck !== void 0)
    $$bindings.valueCheck(valueCheck);
  return `  ${valueCheck != point ? `<button${add_attribute("value", point, 0)} class="duration-300 flex justify-center items-center flex-grow text-[18px] my-2 text-[whitesmoke] hover:bg-pink-800 mx-2 w-fit bg-pink-500 rounded-xl cursor-pointer p-2"><p>${escape(option)}</p></button>` : `<button${add_attribute("value", point, 0)} class="duration-300 flex justify-center items-center flex-grow text-[18px] my-2 text-[whitesmoke] bg-pink-800 mx-2 w-f rounded-xl cursor-pointer p-2"><p>${escape(option)}</p></button>`}`;
});
let Questions = writable([]);
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isTextArea = false } = $$props;
  let { value = "" } = $$props;
  let { counterQ = 0 } = $$props;
  let { question = "how are you?" } = $$props;
  let { options = ["veryGood", "Good", "mid", "bad", "veryBad"] } = $$props;
  if ($$props.isTextArea === void 0 && $$bindings.isTextArea && isTextArea !== void 0)
    $$bindings.isTextArea(isTextArea);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.counterQ === void 0 && $$bindings.counterQ && counterQ !== void 0)
    $$bindings.counterQ(counterQ);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `<div><div class="flex flex-col p-4 rounded-3xl my-16 w-[720px] min-h-[256px] h-fit bg-violet-700 text-[#101010]"><div class="absolute rounded-full w-20 -translate-y-1/2 flex justify-center items-center -translate-x-1/2 h-20 bg-violet-700"><div class="cursor-default rounded-full w-16 h-16 bg-[whitesmoke] flex justify-center items-center text-3xl">${escape(counterQ + 1)}</div></div> <div class="bg-white w-10/12 min-h-[84px] mx-auto rounded-2xl text-2xl"><p class="flex items-center justify-center">${escape(question)}</p></div> <div class="flex-grow w-[95%] min-h-[25%] h-fit items-center flex flex-wrap px-4 bg-white mx-auto rounded-xl mt-8">${isTextArea ? `<textarea class="outline-0 resize-none w-full h-32" cols="30" rows="10" required placeholder="Type Here...">${escape(value || "")}</textarea>` : `${each(options, (option, i) => {
    return `${validate_component(Dot, "Dot").$$render(
      $$result,
      {
        valueCheck: value,
        point: 10 / options.length * (i + 1),
        option
      },
      {},
      {}
    )}`;
  })}`}</div></div></div>`;
});
const button_svelte_svelte_type_style_lang = "";
const css = {
  code: '.cssbuttons-io.svelte-2j518y.svelte-2j518y{position:relative;font-family:inherit;font-weight:500;font-size:18px;letter-spacing:0.05em;border-radius:0.8em;border:none;background:linear-gradient(to right, #8e2de2, #4a00e0);color:ghostwhite;overflow:hidden}.cssbuttons-io.svelte-2j518y span.svelte-2j518y{position:relative;z-index:10;transition:color 0.4s;display:inline-flex;align-items:center;padding:0.8em 1.2em 0.8em 1.05em}.cssbuttons-io.svelte-2j518y.svelte-2j518y::before,.cssbuttons-io.svelte-2j518y.svelte-2j518y::after{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.cssbuttons-io.svelte-2j518y.svelte-2j518y::before{content:"";background:#000;width:120%;left:-10%;transform:skew(30deg);transition:transform 0.4s cubic-bezier(0.3, 1, 0.8, 1)}.cssbuttons-io.svelte-2j518y.svelte-2j518y:hover::before{transform:translate3d(100%, 0, 0)}.cssbuttons-io.svelte-2j518y.svelte-2j518y:active{transform:scale(0.95)}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "button" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<button class="cssbuttons-io svelte-2j518y"><span class="svelte-2j518y">${escape(text)}</span> </button>`;
});
const popUp_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $Questions, $$unsubscribe_Questions;
  $$unsubscribe_Questions = subscribe(Questions, (value) => $Questions = value);
  let values = {};
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main>${each($Questions, (q, i) => {
      return `${validate_component(Question, "Question").$$render(
        $$result,
        {
          counterQ: i,
          isTextArea: q.isTextArea,
          question: q.question,
          options: q.content,
          value: values[i]
        },
        {
          value: ($$value) => {
            values[i] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(Question, "Question").$$render(
      $$result,
      {
        counterQ: 0,
        isTextArea: false,
        question: "how are you today",
        options: ["good", "meh", "shitty"],
        value: values[0]
      },
      {
        value: ($$value) => {
          values[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Question, "Question").$$render(
      $$result,
      {
        counterQ: 1,
        isTextArea: false,
        question: "how are you today",
        options: ["good", "meh", "shitty"],
        value: values[1]
      },
      {
        value: ($$value) => {
          values[1] = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Question, "Question").$$render(
      $$result,
      {
        counterQ: 2,
        isTextArea: true,
        question: "how are you today",
        options: ["good", "meh", "shitty"],
        value: values[2]
      },
      {
        value: ($$value) => {
          values[2] = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="fixed bottom-[5%] left-1/2 -translate-x-1/2">${validate_component(Button, "Button").$$render($$result, { text: " submit " }, {}, {})} </div> ${``} ${``}</main>`;
  } while (!$$settled);
  $$unsubscribe_Questions();
  return $$rendered;
});
export {
  Page as default
};
