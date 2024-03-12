export default function optionsGenerator(val: any) {
  return val.map(({ id, name }: any) => ({
    label: name,
    value: id,
  }));
}
