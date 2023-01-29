export type Heading = {
  depth: number;
  value: string;
  id: string;
};

export type Toc = Heading[];

export default function getToc({
  callback: Function = (toc: Toc) => console.log(toc),
  depthLimit: number = 2,
}): (tree: any) => void;
