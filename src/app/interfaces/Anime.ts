type AgeRating = 'GeneralAudiences' | 'Parental Guidance Suggested' | 'Restricted' | 'Explicit';
type Subtype = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';
type Status = 'current' | 'finished' | 'tba' | 'unreleased' | 'upcoming';
type ShowType = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';

export interface ImageSizes {
  tiny: Dimensions | string;
  small: Dimensions | string;
  medium: Dimensions | string;
  large: Dimensions | string;
  original?: string;
}

export interface Dimensions {
  width: string;
  height: string;
}

export interface Meta {
  dimensions: {
    tiny: Dimensions;
    small: Dimensions;
    medium: Dimensions;
    large: Dimensions;
  }
}

export interface Anime {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: {
    en: string;
    en_jp: string;
    ja_jp: string;
  },
  abbreviatedTItles: [];
  averageRating: string;
  [ratingFrequencies: number]: string;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: AgeRating;
  ageRatingGuide: string;
  subtype: Subtype;
  status: Status;
  tba: string;
  posterImage: ImageSizes & { meta: Meta };
  coverImage: ImageSizes & { meta: Meta };
  episodeCount: number;
  episodeLength: number;
  youtubeVideoId: string;
  showType: ShowType;
  nsfw: boolean;
}
