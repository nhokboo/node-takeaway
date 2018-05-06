import getServerTime from './getServerTime';
import getConfig from './getConfig';
import getRestaurants from './getRestaurants';
import getMenuCard from './getMenuCard';
import getBanks from './getBanks';

import {reverse} from './util';

const requests = {
    getServerTime,
    getConfig,
    getRestaurants,
    getMenuCard,
    getBanks
};

// Reverse all request definition objects for the parser
for (const request of Object.values(requests)) {
    request.response = reverse(request.response);
}

export default requests;
