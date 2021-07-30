export const getNavigationHeader = () => {
  return [
    {
      label: "Mac",
      link: "/",
      child: [
        { label: "MacBook Air", icon: "fa fa-laptop" },
        { label: 'MacBook Pro 13"', icon: "fa fa-laptop" },
        { label: 'MacBook Pro 16"', icon: "fa fa-laptop" },
        { label: "iMac 24", icon: "fa fa-laptop" },
      ],
    },
    {
      label: "iPad",
      link: "/",
      child: [
        { label: "iPad Pro", icon: "fa fa-tablet" },
        { label: "iPad Air", icon: "fa fa-tablet" },
        { label: "iPad", icon: "fa fa-tablet" },
        { label: "iPad Mini", icon: "fa fa-tablet" },
      ],
    },
    {
      label: "iPhone",
      link: "/",
      child: [],
    },
    {
      label: "Watch",
      link: "/",
      child: [],
    },
    {
      label: "TV",
      link: "/",
      child: [],
    },
    {
      label: "Music",
      link: "/",
      child: [],
    },
  ];
};
