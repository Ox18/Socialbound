import { rest } from "../../lib/modules/controller-manager.module";

type CreateUser = {
  username: string;
  password: string;
};

const controller = rest<CreateUser>()
.handle(async (req) => {
  return [0,0,0, 1, 1]
})
.routes("/s.php")

export default controller;
