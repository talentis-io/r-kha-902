export const postParamHandler = ({params}) => {
    if(isNaN(params.id)) {
      throw new Response("Bad Reaquest", {statusText: "Please Inser the right post ID",status: 400})
    }
    return null
  }