export * from "./characters";
export * from "./dimensions";
export * from "./equipments";
export * from "./conduite";
export * from "./jetons";
export * from "./locomotions";

export const loadOptions = async (input, cb, resources) => {
  const options = resources.filter((r) => r.match(input));
  cb(options.map((option) => ({ label: option, value: option })));
};
