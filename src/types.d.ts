type UniversalFeatures = {
  [key: string]: {
    [value: string]: string;
  };
};

interface TokenInfo {
  text: string;
  lemma: string;
  pos: string;
  tag: string;
  dep: string;
  head: {
    text: string;
    pos: string;
  };
  morph: Record<string, string | number>;
}
