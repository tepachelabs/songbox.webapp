export const getBreadcrumbs = (location) =>
  location.pathname
    .replace('/app', '')
    .split('/')
    .reduce((paths, current) => {
      const uri = paths.map((path) => path.title);
      return [
        ...paths,
        {
          title: current,
          uri: `/app${uri.join('/')}/${current}`,
        },
      ];
    }, []);
