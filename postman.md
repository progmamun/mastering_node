#Advanced Postman Setup for api design

`{{URL}}`

Tests:
test>
`pm.environment.set("jwt", pm.response.json().token);`

JWT:
Authorization> Bearer Token `{{jwt}}`
