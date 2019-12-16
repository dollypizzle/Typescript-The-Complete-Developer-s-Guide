import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// WORKING ONE without extra collection section

/**
 
import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}

 */
