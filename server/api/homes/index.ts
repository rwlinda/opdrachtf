export default defineEventHandler(async e => {
  const homeObjects = await fetch(`https://partnerapi.funda.nl/feeds/Aanbod.svc/json/76666a29898f491480386d966b75f949/?type=koop`)

  const data = await homeObjects.json()

  return data
}) 