export class City {
    name: string;
    country: string;
    temperature?: number;
    humidity?: number;
    pressure?: number;
    updatedAt?: Date;
    selected: boolean;
    loading: boolean;
    hasError: boolean;
}