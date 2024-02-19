export const copyJson = (json: object) => {
  const container = document.body;
  const el = document.createElement("textarea");
  try {
    el.value = JSON.stringify(json, null, "\t");
    container.appendChild(el);
    el.select();
    document.execCommand("copy");
    container.removeChild(el);
    console.log(`:: ${json} copied`);
  } catch (e) {
    console.error(`:: Error copying ${json}`);
  }
};
