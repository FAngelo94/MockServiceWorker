import { rest } from "msw";

export default [
  rest.get("https://<url_server_api>", (
    req, res, ctx
  ) => {
    return res(ctx.json(
      {
        /** Reply in json format  */
      }
    ));
  })
];