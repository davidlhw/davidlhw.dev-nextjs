import { useState } from "react";

type Object = { [k: string]: any };

export interface Setter<T extends Object> {
  (args: { [V in keyof T]?: T[V] }): void;
}

export default <T extends Object>(init: Readonly<{ [V in keyof T]: T[V] }>) => {
  const form = useState<T>(init);

  const setForm: Setter<T> = (args) => {
    form[1]((prevForm) => {
      const clone = { ...prevForm };

      for (const [k, v] of Object.entries(args)) {
        clone[k as keyof T] = v;
      }

      return clone;
    });
  };

  return { form: form[0], setForm };
};
