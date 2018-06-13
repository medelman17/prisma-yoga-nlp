export const updateUser = async (parent, args, ctx, info) => {
  try {
    return await ctx.db.mutation.updateUser(
      {
        ...args
      },
      info
    );
  } catch (err) {
    return err;
  }
};
