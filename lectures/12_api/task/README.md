## Task:

1. Install [postman](https://www.getpostman.com) or [Insomnia](https://insomnia.rest/download/)
2. Reuse simple koa server from previus lectures (or create new koa server).
3. Create two endpoints: POST `/api/v1/account/login` (public) and GET `/api/v1/me` (authenticated)
4. Add [koa-validate](https://www.npmjs.com/package/koa-validate) middleware and validate login details (both email and password must be specified).
5. Return JWT from server on login request
6. Check authentication and return decrypted JWT payload in response to GET `/api/v1/me`
