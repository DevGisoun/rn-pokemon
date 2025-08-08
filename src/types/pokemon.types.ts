export interface Pokemon {
    id: number;
    name: string;
    koreanName: string;
    sprites: { front_default: string };
    genus: string;
    koreanGenus: string;
    height: number;
    weight: number;
    types: {
        slot: number;
        type: {
            url: string;
            name: string;
            koreanName: string;
        };
    }[];
    abilities: {
        slot: number;
        ability: {
            url: string;
            name: string;
            koreanName: string;
        };
    }[];
}
