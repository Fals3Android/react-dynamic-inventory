const jsonp = require('jsonp-promise');
const placeHolderAPIKEY = '';

class EtsyRetailAPI {
    fetchLatestInventory() {
        const res = jsonp(`https://openapi.etsy.com/v2/listings/active.js?api_key=${placeHolderAPIKEY}&limit=25&offset=0`, null, (err,data) => {
            if (err) {
                console.error(err.message);
              } else {
                return data;
              }
        });
        return res;
    }

    fetchInventoryImage(id) {
        const res = jsonp(`https://openapi.etsy.com/v2/listings/${id}/images.js?api_key=${placeHolderAPIKEY}`, null, (err,data) => {
            if (err) {
                console.error(err.message);
              } else {
                return data;
              }
        });
        return res;
    }
}

export default EtsyRetailAPI;