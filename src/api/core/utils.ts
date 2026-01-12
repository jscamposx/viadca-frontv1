
export const buildPaginatedParams = ({ page = 1, limit = 10, search = "", ...rest }) => {
  const params = new URLSearchParams();
  if (page) params.append("page", page.toString());
  if (limit) params.append("limit", limit.toString());
  if (search) params.append("search", search);

  Object.keys(rest).forEach((key) => {
    if (rest[key] !== undefined && rest[key] !== null && rest[key] !== "") {
      params.append(key, rest[key].toString());
    }
  });

  return params;
};