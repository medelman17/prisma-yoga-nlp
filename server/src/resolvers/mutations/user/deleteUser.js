export const deleteUser = async (parent, args, ctx, info) => {
  try {
    return await ctx.db.mutation.deleteUser(
      {
        ...args
      },
      info
    );
  } catch (err) {
    return err;
  }
};
