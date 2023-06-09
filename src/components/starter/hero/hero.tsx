import { component$, useSignal } from "@builder.io/qwik";
import { z } from "@builder.io/qwik-city";
import { formAction$, useForm } from "@modular-forms/qwik";
import styles from "./hero.module.css";

const schema1 = z.object({});
const schema2 = z.object({});

type Form1 = z.infer<typeof schema1>;
type Form2 = z.infer<typeof schema2>;

export const useAction1 = formAction$<Form1>(() =>
  console.log("Form 1 submitted")
);
export const useAction2 = formAction$<Form2>(() =>
  console.log("Form 2 submitted")
);

export default component$(() => {
  const [, { Form: Form1 }] = useForm<Form1>({
    loader: useSignal<Form1>({}),
    action: useAction1(),
  });
  const [, { Form: Form2 }] = useForm<Form2>({
    loader: useSignal<Form2>({}),
    action: useAction2(),
  });

  return (
    <div class={["container", styles.hero]}>
      <Form1>
        <button type="submit">Submit 1</button>
      </Form1>
      <Form2>
        <button type="submit">Submit 2</button>
      </Form2>
    </div>
  );
});
