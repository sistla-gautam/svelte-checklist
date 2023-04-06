import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, d as each, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const data = [];
const todo = writable(data);
todo.subscribe((value) => {
});
const AddTodoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex justify-between"><h3 class="text-gray-three text-xl font-bold">Checklist</h3>
	<button type="button" class="border-cream-four bg-green-one text-gray-five outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five group flex items-center rounded-md px-6 py-3 text-lg font-semibold outline outline-2 outline-offset-2">Add Task
		<svg class="text-gray-five group-hover:text-green-five group-focus-visible:text-green-five ml-3 h-4 w-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_35_391)"><path d="M14.4 14.4V8H17.6V14.4H24V17.6H17.6V24H14.4V17.6H8V14.4H14.4ZM16 32C7.1632 32 0 24.8368 0 16C0 7.1632 7.1632 0 16 0C24.8368 0 32 7.1632 32 16C32 24.8368 24.8368 32 16 32ZM16 28.8C19.3948 28.8 22.6505 27.4514 25.051 25.051C27.4514 22.6505 28.8 19.3948 28.8 16C28.8 12.6052 27.4514 9.3495 25.051 6.94903C22.6505 4.54857 19.3948 3.2 16 3.2C12.6052 3.2 9.3495 4.54857 6.94903 6.94903C4.54857 9.3495 3.2 12.6052 3.2 16C3.2 19.3948 4.54857 22.6505 6.94903 25.051C9.3495 27.4514 12.6052 28.8 16 28.8V28.8Z" fill="currentColor"></path></g><defs><clipPath id="clip0_35_391"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg></button></section>`;
});
const TodoInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let completeClass;
  let { todo: todo2 } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo2 !== void 0)
    $$bindings.todo(todo2);
  completeClass = todo2.complete ? "bg-green-three" : "bg-leaf-one";
  return `<div class="border-gray-one flex items-center justify-between rounded-md border-2 px-5 py-4"><div class="flex w-full max-w-lg items-center justify-start"><label${add_attribute("for", `${todo2.id}-checkbox`, 0)} class="sr-only">Complete todo</label>
		<input${add_attribute("id", `${todo2.id}-checkbox`, 0)} type="checkbox" ${todo2.Complete ? "checked" : ""} class="border-gray-three bg-cream-four text-green-four focus: border-green-five foucs:outline-green-five h-4 w-4 rounded border focus:outline focus:outline-2 focus:outline-offset-2">
		<label${add_attribute("for", `${todo2.id}-text`, 0)} class="sr-only">Edit todo</label>
		<input type="text" placeholder="Enter a todo"${add_attribute("id", `${todo2.id}-text`, 0)}${add_attribute("value", todo2.text, 0)} class="border-b-gray-two bg-cream-four fpntfont-normal text-gray-three placeholder: text-gray-two focus:border-gray-three ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-dashed px-0 pb-1 text-base focus:outline-none focus:ring-0">
		<span class="${escape(completeClass, true) + " text-gray-five ml-5 hidden rounded-full px-2 py-0.5 text-sm font-normal md:block"}">${escape(todo2.complete ? "Complete" : "In Progress")}</span></div>
	<button type="button" class="bg-cream-four hover:bg-steel-one focus-visible: outline-green-five group ml-4 flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"><span class="sr-only">Delete todo</span>
		<svg class="text-steel-three group-hover:text-gray-five h-5 w-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_35_392)"><path d="M24 6.4H32V9.6H28.8V30.4C28.8 30.8244 28.6314 31.2313 28.3314 31.5314C28.0313 31.8314 27.6243 32 27.2 32H4.8C4.37565 32 3.96869 31.8314 3.66863 31.5314C3.36857 31.2313 3.2 30.8244 3.2 30.4V9.6H0V6.4H8V1.6C8 1.17565 8.16857 0.768688 8.46863 0.468629C8.76869 0.168571 9.17565 0 9.6 0H22.4C22.8243 0 23.2313 0.168571 23.5314 0.468629C23.8314 0.768688 24 1.17565 24 1.6V6.4ZM25.6 9.6H6.4V28.8H25.6V9.6ZM18.2624 19.2L21.0912 22.0288L18.8288 24.2912L16 21.4624L13.1712 24.2912L10.9088 22.0288L13.7376 19.2L10.9088 16.3712L13.1712 14.1088L16 16.9376L18.8288 14.1088L21.0912 16.3712L18.2624 19.2ZM11.2 3.2V6.4H20.8V3.2H11.2Z" fill="currentColor"></path></g><defs><clipPath id="clip0_35_392"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg></button></div>`;
});
const TodoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $todo, $$unsubscribe_todo;
  $$unsubscribe_todo = subscribe(todo, (value) => $todo = value);
  $$unsubscribe_todo();
  return `<section class="mt-8 space-y-4">${each($todo, (todo2) => {
    return `${validate_component(TodoInput, "TodoInput").$$render($$result, { todo: todo2 }, {}, {})}`;
  })}</section>`;
});
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let completeClass;
  let { title } = $$props;
  let { percentage } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.percentage === void 0 && $$bindings.percentage && percentage !== void 0)
    $$bindings.percentage(percentage);
  completeClass = title === "Completed" ? "bg-green-four" : "bg-leaf-one";
  return `<div><div class="text-gray-three flex justify-between text-base font-normal"><p>${escape(title)}</p>
		<p>${escape(percentage)}%</p></div>
	<div class="bg-gray-one mt-5 h-4 w-full overflow-hidden rounded-full"><div style="${"width: " + escape(percentage, true) + "%"}" class="${escape(completeClass, true) + " h-4 rounded-full transition-all duration-500 ease-out"}"></div></div></div>`;
});
const ProgressSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalCount;
  let completedCount;
  let progressCount;
  let $todo, $$unsubscribe_todo;
  $$unsubscribe_todo = subscribe(todo, (value) => $todo = value);
  let { completePercentage = 0 } = $$props;
  let { progressPercentage = 0 } = $$props;
  if ($$props.completePercentage === void 0 && $$bindings.completePercentage && completePercentage !== void 0)
    $$bindings.completePercentage(completePercentage);
  if ($$props.progressPercentage === void 0 && $$bindings.progressPercentage && progressPercentage !== void 0)
    $$bindings.progressPercentage(progressPercentage);
  totalCount = $todo.length;
  completedCount = $todo.filter((todo2) => todo2.complete).length;
  progressCount = $todo.filter((todo2) => !todo2.complete).length;
  completePercentage = Math.round(completedCount / totalCount * 100) || 0;
  progressPercentage = Math.round(progressCount / totalCount * 100) || 0;
  $$unsubscribe_todo();
  return `<section class="mt-10"><h3 class="text-gray-three text-xl font-bold">Progress</h3>
	<div class="mt-8 space-y-8">${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      title: "In progress",
      percentage: progressPercentage
    },
    {},
    {}
  )}
		${validate_component(ProgressBar, "ProgressBar").$$render(
    $$result,
    {
      title: "Completed",
      percentage: completePercentage
    },
    {},
    {}
  )}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24"><main class="bg-cream-four md:outline-cream-four mx-auto min-h-screen max-w-none rounded-none px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8"><h1 class="text-gray-three text-2xl font-bold">Dashboard</h1>
		<div class="mt-10"></div>
		${validate_component(AddTodoSection, "AddTodoSection").$$render($$result, {}, {}, {})}
		${validate_component(TodoSection, "TodoSection").$$render($$result, {}, {}, {})}
		${validate_component(ProgressSection, "ProgressSection").$$render($$result, {}, {}, {})}</main></div>`;
});
export {
  Page as default
};
