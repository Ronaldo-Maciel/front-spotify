export interface Artist {
  id: string;
  name: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  images: Image[];
  id: string;
  name: string;
  artists: Artist[];
}

export interface Music {
  id: string;
  name: string;
  time?: number;
  preview_url: string;
  track_number: number;
  duration_ms?: number;
}
