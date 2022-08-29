import { setupServer } from "msw/node";
import handlers from "./handlers";

export const server = setupServer(...handlers);

beforeEach(() => {
  server.listen();
});
  
afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});
  
afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});