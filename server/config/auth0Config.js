import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://room-finder-project-server.vercel.app",
    issuerBaseURL: "https://dev-4pv0mifib4in2xx4.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck
