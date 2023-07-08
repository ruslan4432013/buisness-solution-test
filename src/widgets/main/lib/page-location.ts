export const setPageToPath = (page: number) => {
  const url = new URL(window.location.href);
  url.searchParams.set('page', page.toString());
  history.pushState({}, '', url);
};

export const getCurrentPage = () => {
  const url = new URL(window.location.href);
  const page = url.searchParams.get('page');
  if (page) {
    return +page;
  }
  return null;
};
