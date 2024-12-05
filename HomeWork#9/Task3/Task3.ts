import { Admin } from "./Admin";

const admin = new Admin('admin@gmail.com', 'Qwerty');

admin.changePassword('Weak');

console.log(admin.passwordPreview);

admin.changePassword('Super-Pass');

console.log(admin.passwordPreview);
console.log(admin.id);
