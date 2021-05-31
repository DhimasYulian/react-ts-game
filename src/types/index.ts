export type Game = {
    id?: string,
    title?: string,
    thumbnail?: string,
    short_description?: string,
    game_url?: string,
    genre?: string,
    platform?: string,
    publisher?: string,
    developer?: string,
    release_date?: string,
    freetogame_profile_url?: string
}

export type Filter = {
    platform: string,
    sortBy: string,
    tag?: string,
    genre?: string
}

export type Screenshot = {
    id: number,
    image: string
}

export type Details = {
    id?: string,
    title?: string,
    thumbnail?: string,
    status?: string,
    description?: string,
    game_url?: string,
    freetogame_profile_url?: string,
    genre?: string,
    platform?: string,
    publisher?: string,
    developer?: string,
    release_date?: string,
    minimum_system_requirements?: {
        os: string,
        processor: string,
        memory: string,
        graphics: string,
        storage: string
    },
    screenshots?: Screenshot[]
}