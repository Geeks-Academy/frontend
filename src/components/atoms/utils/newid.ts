let lastId = 0;

export default function (prefix = 'id'): string {
  lastId += 1;
  return `${prefix}${lastId}`;
}
