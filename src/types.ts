export type TabParamList = {
  welcome: undefined;
  characters: undefined;
  error: undefined;
};

export interface CharacterProps {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  starships: string[];
}

export type itemProps = {
  id: number;
  name: string;
};
