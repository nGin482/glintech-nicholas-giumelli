import api, { route } from "@forge/api";

const BASEURL = '/rest/api/3';

const fetchData = async endpoint => {
    try {
        const response = await api.asUser().requestJira(route`${BASEURL}/${endpoint}`);

        const data = await response.json();
        if (data?.values && typeof data.values === 'object') {
            return data.values;
        }
        return data;
    }
    catch(err) {
        return [];
    }
};

const deleteComponent = async componentId => {
    try {
        await api.asUser().requestJira(route`${BASEURL}/component/${componentId}`, {
            method: 'DELETE'
        });
    }
    catch(err) {
        return `There was a problem deleting the component. Error: ${err.toString()}`;
    }
}

export {
    fetchData,
    deleteComponent
}