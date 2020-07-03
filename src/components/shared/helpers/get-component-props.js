const getComponentProps = (path, idx, result) => {
  if (!result) {
    return {};
  }
  
  const component = result.find((comp) => {
    if (comp.idx && comp.path) {
      return comp.idx === idx.toString() && comp.path === path
    }
    return false;
  });

  return component?.props || {}
}

export default getComponentProps
