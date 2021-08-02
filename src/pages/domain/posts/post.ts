export type PostId = number;

export type PostAuthor = {
  id: PostId;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostId;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type CoverProviderMetadata = {
  public_id: string;
  resource_type: string;
};

export type CoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: CoverProviderMetadata;
};

export type CoverFormats = {
  large: CoverFormat;
  small: CoverFormat;
  medium: CoverFormat;
  thumbnail: CoverFormat;
};

export type PostCover = CoverFormat & {
  id: PostId;
  alternativeText: string;
  caption: string;
  formats: CoverFormats;
  previewUrl: string | null;
  provider: string;
};

export type PostsData = {
  id: PostId;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_at: string;
  update_at: string;
  cover: PostCover;
};
