import { PostType, ProfileType, Tag, ProfilePageData } from "@/types/profile";

const exampleProfiles = [
  {
    id: "1",
    name: "김한솔",
    information: "풋볼을 좋아함",
  },
  {
    id: "2",
    name: "김안나",
    information: "운동을 좋아함",
  },
] as ProfilePageData[];

export default async function getProfilePageData(id: string) {
  return {
    tags: (await getProfileTags(id)) as Tag[],
    posts: (await getProfilePosts(id)) as PostType[],
    follows: (await getFollowingProfile(id)) as ProfileType[],
    followers: (await getFollowerProfile(id)) as ProfileType[],
  };
}

async function getProfilePosts(id: string) {
  try {
    // const response = await axios.get(`/api/profiles/${id}/posts`, {
    //   params: { cursor },
    //   baseURL: "http://localhost:8000",
    // });

    const profilePosts: PostType[] = [{ id: "asd", content: "asfqef" }];
    return profilePosts;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// 유저 로그인 id에 해당하는 태그들 가져오기
async function getProfileTags(id: string, cursor?: string) {
  try {
    // const response = await axios.get(`/api/profiles/${id}/tags`, {
    //   params: { cursor },
    //   baseURL: "http://localhost:8000",
    // });

    const tags = [
      {
        id: "asfaz",
        tagname: "wefds",
      },
    ] as Tag[];
    return tags;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

//백엔드에서 팔로잉 목록 가져오기
async function getFollowingProfile(id: string, cursor?: string) {
  try {
    // await axios.post(`/api/profiles/${id}/follows`, {
    //   profileId,
    //   baseURL: "http://localhost:8000",
    // });

    const profileToFollow: ProfileType[] = exampleProfiles;
    return profileToFollow;
  } catch (error) {
    console.error("Error:", error);
  }
}

//백엔드에서 팔로워 목록 가져오기
async function getFollowerProfile(id: string, cursor?: string) {
  try {
    // await axios.post(`/api/profiles/${id}/follows`, {
    //   profileId,
    //   baseURL: "http://localhost:8000",
    // });

    const profileToFollower: ProfileType[] = exampleProfiles;
    return profileToFollower;
  } catch (error) {
    console.error("Error:", error);
  }
}
