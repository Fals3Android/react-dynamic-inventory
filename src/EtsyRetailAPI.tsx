const jsonp = require('jsonp-promise');
const placeHolderAPIKEY = process.env.ETSY_PUBLIC_API_KEY;

class EtsyRetailAPI {
    fetchLatestInventory(limit, offset) {
        return jsonp(`https://openapi.etsy.com/v2/listings/active.js?api_key=${placeHolderAPIKEY}&limit=${limit}&offset=${offset}&includes=MainImage`, null, (err,data) => {
            if (err) {
                console.error(err.message);
            } else {
            return data;
            }
        });
    }
}

export default EtsyRetailAPI;