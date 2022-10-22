export const pageview = (router: string) => {
  (window as any).fbq("track", router);
};

export const event = (name, options = {}) => {
  (window as any).fbq("track", name, options);
};
