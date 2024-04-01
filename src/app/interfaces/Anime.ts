type AgeRating = 'GeneralAudiences' | 'Parental Guidance Suggested' | 'Restricted' | 'Explicit';
type Subtype = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';
type Status = 'current' | 'finished' | 'tba' | 'unreleased' | 'upcoming';
type ShowType = 'ONA' | 'OVA' | 'TV' | 'movie' | 'music' | 'special';

interface Anime {
  createdAt: string,
  updatedAt: string,
  slug: string,
  synopsis: string,
  coverImageTopOffset: number,
  titles: {},
  abbreviatedTItles: [],
  avarageRating: string,
  ratingFrequencies: {},
  userCount: number,
  favoritesCount: number,
  startDate: string,
  endDate: string,
  popularityRank: number,
  ratingRank: number,
  ageRating: AgeRating,
  ageRatingGuide: string,
  subtype: Subtype,
  status: Status,
  tba: string,
  posterImage: {},
  coverImage: {},
  episodeCount: number,
  episodeLength: number,
  youtubeVideoId: string,
  showType: ShowType,
  nsfw: boolean
}
