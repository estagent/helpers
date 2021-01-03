import objectPath from 'object-path'

export const getEventDetail = (event, key, def) =>
  event.detail ? objectPath.get(event.detail, key, def) : def

