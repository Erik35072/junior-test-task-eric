export type AdImage = {
    id: string;
    image: string;
    thumbnail: string;
    user: string;
}

export type Ad = {
    id: string;
    title: string;
    description: string;
    city_name: string;
    district_name: string;
    created_at: string;
    views: number;
    user: string;
    price: number;
    images: AdImage[];
}

