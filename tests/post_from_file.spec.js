const { default: test, expect } = require('@playwright/test');
const bookingData = require('../tdata/data_booking.json');


test('create new booking from json file', async ({ request }) => {


    const response = await request.post(`/booking`, {

        data: bookingData
    });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const resposeBody = await response.json()
    expect(resposeBody.booking).toHaveProperty("firstname", "juancho");
    expect(resposeBody.booking).toHaveProperty("lastname", "automation");
    expect(resposeBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);



})

