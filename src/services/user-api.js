const delay = 300;

const user = {
  name: "Sandra",
  email: "sandra@paris-school.com",
  avatar: "#",
};

const fetchUser = () =>
  new Promise((res) => setTimeout(() => res(user), delay));

export default { fetchUser };
