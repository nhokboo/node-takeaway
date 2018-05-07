export default {
    parameters: ({
        name,
        companyName = '',
        street,
        countryCode,
        postalCode,
        city,
        vietnamDistrict,
        vietnamCity,
        phone,
        email,
        deliveryTime,
        paymentPart,
        remarks,
        newsLetter,
        restaurantId,
        formattedOrder,
        siteCode,
        language,
        clientId,
        paymentMethod,
        foodTrackerId,
        deliveryArea,
        extraAddress = '',
        email = '',
        credentials = '',
        addressId = '',
        deliveryMethod,
        voucherCode = '',
        latitude,
        longitude,
        productRemarks = '',
        isLocationAccurate = '1'
    }) => [
        paymentMethod === 13 || paymentMethod === '13' ? 'reserveorder' : 'placeorder',
        name,
        companyName,
        street,
        '',
        countryCode === 239 || countryCode === '239' ? vietnamDistrict : postalCode,
        countryCode === 239 || countryCode === '239' ? vietnamCity : city,
        phone,
        email,
        deliveryTime,
        paymentPart,
        remarks,
        newsLetter,
        restaurantId,
        formattedOrder,
        siteCode,
        language,
        countryCode,
        clientId,
        paymentMethod,
        '',
        foodTrackerId,
        countryCode === 239 || countryCode === '239' ? vietnamDistrict : deliveryArea,
        'com.takeaway.android.data',
        extraAddress,
        email,
        credentials,
        addressId,
        deliveryMethod,
        '0',
        paymentMethod === 13 || paymentMethod === '13' ? voucherCode : '',
        latitude,
        longitude,
        productRemarks,
        isLocationAccurate
    ],
    response: {

    }
};