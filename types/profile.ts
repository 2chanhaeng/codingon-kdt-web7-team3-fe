export interface ProfileType {
  id: string;
  profname: string;
  information: string;
}

export interface PostType {
  id: string;
  profile: ProfileType;
  content: string;
}

export interface CreateProfileType {
  name: string;
  information: string;
}

export interface ProfilesData {
  profiles: ProfileType[];
}

export interface Tag {
  id: string;
  tagname: string;
  information: string;
}

export interface ProfilePageData extends ProfileType {
  posts: PostType[];
  tags: Tag[];
  follows: ProfileType[];
  followers: ProfileType[];
}
