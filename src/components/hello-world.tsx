import { component$, useSignal } from "@builder.io/qwik";

export const HelloWorld = component$(() => {
  const name = useSignal<string>("World");
  return (
    <div>
      <h1>Hello {name.value}</h1>
      <input bind:value={name} />
    </div>
  );
});
