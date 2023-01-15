import { defineEventHandler } from 'h3';

const pool = defineEventHandler((event) => {
  return {
    test: true
  };
});

export { pool as default };
//# sourceMappingURL=pool.mjs.map
