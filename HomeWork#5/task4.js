async function loadUserProfile(id) {
  try {
    const promises = [fetchUserProfile(id), fetchUserPosts(id)];
    const result = await Promise.all(promises);
    return result;
  } catch (error) {
    throw new Error("Error loading user data");
  }
}

async function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, name: "John Doe", age: 30 });
    }, 1000);
  });
}

async function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, content: "Hello, world!" },
        { postId: 2, content: "Loving this app!, No I am not" },
      ]);
    }, 2000);
  });
}

loadUserProfile(1)
  .then(([profile, posts]) => {
    console.log(`{profile: ${JSON.stringify(profile)},`);
    console.log(`posts: ${JSON.stringify(posts)}}`);
  })
  .catch((error) => console.log(error.message));
