import client from "@sanity/client"

export default client({
    projectId:"lfyw4jna",
    dataset: "production",
    useCdn: true,
    apiVersion:"2022-01-26"
})