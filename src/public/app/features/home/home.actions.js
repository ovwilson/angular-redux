export const HOMES_GET = '[Homes] Get';
export const HOMES_UPDATE = '[Homes] Update';

export const HomeActions = () => {
  const getHomes = homes => {
    return { type: HOMES_GET };
  };
  const updateHome = home => {
    return { type: HOMES_UPDATE, payload: home};
  };
  return { getHomes, updateHome };
};
