/**
 * Get the HCP path name from the React Router location
 * @param {pathname} response from react router getLocation()
 * @param {hasTrailingSlash} add a trailing slash to the returned string
 */
export const parsePathname = (pathname: string, hasTrailingSlash = false) => {
  const pathArr = pathname.split("/").splice(2, 2);
  const trailingSlash = hasTrailingSlash ? "/" : "";
  return pathArr.length ? `${pathArr.join("/")}${trailingSlash}` : "";
};
