export interface FetchResultOK {
  results: Character[];
}

export interface FetchResultNotOK {
  error: string
}

export interface Character {
    name:        Name;
    images:      Images;
    gender:      Gender;
    species:     string;
    homePlanet?: string;
    occupation:  string;
    sayings:     string[];
    id:          number;
    age:         string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Images {
    "head-shot": string;
    main:        string;
}

export interface Name {
    first:  string;
    middle: string;
    last:   string;
}
