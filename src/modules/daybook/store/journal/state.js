export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia veniam obcaecati harum dignissimos recusandae odio expedita suscipit id, aut ex soluta. Reiciendis, saepe totam? Id exercitationem tempore placeat ratione!",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text:
        "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Ut quia veniam obcaecati harum dignissimos recusandae odio expedita suscipit id, aut ex soluta. Reiciendis, saepe totam? Id exercitationem tempore placeat ratione!",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text:
        "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Ut quia veniam obcaecati harum dignissimos recusandae odio expedita suscipit id, aut ex soluta. Reiciendis, saepe totam? Id exercitationem tempore placeat ratione!",
      picture: null,
    },
  ],
});
