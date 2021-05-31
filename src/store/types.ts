export interface Game {
    id?: string;
    title?: string;
    short_description?: string;
    thumbnail?: string;
    game_url?: string,
    genre?: string;
    platform?: string;
    publisher?: string,
    developer?: string,
    release_date?: string,
    freetogame_profile_url?: string
}
  
  export interface Library {
    library: Game[] | [];
  }
  