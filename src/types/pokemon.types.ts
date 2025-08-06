export interface Pokemon {
    id: number;
    name: string;
    koreanName: string;
    sprites: { front_default: string };
    types: {
        slot: number;
        type: {
            url: string;
            name: string;
            koreanName: string;
        };
    }[];
}
