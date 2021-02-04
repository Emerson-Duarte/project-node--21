import { Router } from "express";

const routes = Router();

routes.post("/users", (request, response) => {
  const { name, surname } = request.body;

  const user = {
    name,
    surname
  };

  return response.json(user);
});

export default routes;
