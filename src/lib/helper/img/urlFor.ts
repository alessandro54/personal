import { builder } from '$lib/sanity';

const urlFor = (source: string) => {
  return builder.image(source);
};

export default urlFor;
