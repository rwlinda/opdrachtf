export default async (event:any) => {
  const id = event.context.params.id
console.log(event)
  const home = await $fetch(
        `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/76666a29898f491480386d966b75f949/koop/${id}`
    );

  return home
}