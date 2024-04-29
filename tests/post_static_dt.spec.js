const { test,expect} = require('@playwright/test');




test('create new booking.', async ({ request }) => {

    const response = await request.post(`/booking`, {

        data: {

            "firstName": "juancho",
            "lastName": "juanchoAutomation",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checking": "2024-05-06",
                "checkout": "2024-10-08"
            },
            "additionalneeds": "Breakfast"
        }

    });


    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responsebody = await response.json()
    expect(responsebody.booking).toHaveProperty("firstName","juancho");
    expect(responsebody.booking).toHaveProperty("lastName", "juanchoAutomation");
    expect(responsebody.booking).toHaveProperty("totalprice",111);
    expect(responsebody.booking).toHaveProperty("depositpaid", "true");

});