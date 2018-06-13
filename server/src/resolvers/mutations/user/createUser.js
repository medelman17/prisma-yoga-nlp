export const createUser = async (parent, args, ctx, info) => {
  try {
    return await ctx.db.mutation.createUser(
      {
        ...args
      },
      info
    );
  } catch (err) {
    return err;
  }
};
