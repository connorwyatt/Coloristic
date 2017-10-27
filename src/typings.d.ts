/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare var ntc: NameThatColor;

interface NameThatColor {
  names: Array<{ 0: string; 1: string }>;

  init(): void;

  name(color: string): { 0: string; 1: string };

  hsl(color: string): { 0: number; 1: number; 2: number };

  rgb(color: string): { 0: number; 1: number; 2: number };
}
