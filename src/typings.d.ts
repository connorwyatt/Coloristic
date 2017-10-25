/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var ntc: NameThatColor;
interface NameThatColor {

  names: Array<Array<string>>;
  init(): void;
  name(color: string): Array<string>;
  hsl(color: string): Array<number>;
  rgb(color: string): Array<number>;

}
