import { render } from '@testing-library/react';
import Component from '.';
import {server} from "../setupTest/_mockedServer";
import { rest } from "msw";

test('render component', () => {
  server.use(rest.get(`https://<url_server_api>`, (
    req, res, ctx
  ) => {
    return res(ctx.json({
      /** Reply in json format  */
    }));
  }));

  render(<Component />);
});
