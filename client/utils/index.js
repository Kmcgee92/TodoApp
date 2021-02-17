export const findByTestAtrr = (component, attr) => {
  const selectedNode = component.find(`[data-test='${attr}']`);
  return selectedNode;
};
