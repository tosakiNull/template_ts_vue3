// src/mocks/handlers.js
import { rest } from 'msw';

export default [
  rest.get('/message', (req, res, ctx) => res(
    ctx.json({
      message: 'it works :)',
    }),
  )),
];
