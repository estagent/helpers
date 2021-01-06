import objectPath from 'object-path'

export const getEventDetail = (event, key, def) =>
  event.detail ? objectPath.get(event.detail, key, def) : def

export const getEventUser = event => {
  if (!event.detail) if (!user) throw `detail not found in ${event.type}`
  const user = event.detail.user
  if (!user) throw `user not found on ${event.type}`
  if (!(user instanceof Object))
    throw `user is not object in event ${event.type}`
  return user
}
