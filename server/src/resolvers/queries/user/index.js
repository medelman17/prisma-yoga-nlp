export const getUser = async (parent, args, ctx, info) => {
  try {
    return await ctx.db.query.user(
      {
        ...args
      },
      info
    );
  } catch (err) {
    return err;
  }
};
