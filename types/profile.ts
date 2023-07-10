export interface ProfileType {
  id: string;
  name: string;
  information: string;
}

export interface CreateProfileType {
  name: string;
  information: string;
}

export interface ProfilesData {
  profiles: ProfileType[];
}