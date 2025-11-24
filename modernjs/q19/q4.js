const user = { info: { email: "alice@mail.com" } };
const { info } = user;
console.log(info?.email);      // Output: alice@mail.com
console.log(user.profile?.age); // Output: undefined