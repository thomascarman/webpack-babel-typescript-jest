module.exports = () => {
  const data = {
    posts: [{ id: 1, title: "json-server", author: "user01" }],
    comments: [{ id: 1, body: "some comment", postId: 1 }],
    profile: { name: "user01" },
  };

  return data;
};
