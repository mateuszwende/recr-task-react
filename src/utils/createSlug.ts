const createSlug = (str = ""): string => {
  return str.replace(/\W+/g, "-").toLowerCase();
};

export default createSlug;
