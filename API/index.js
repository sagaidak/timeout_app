//import * as axios from "axios/index";



export const api = {
    getCategoryProducts(category){

        let url = `https://timeout.od.ua/${category}/?app=true`;
        //url = 'https://api.coingecko.com/api/v3/coins/list';
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };

        return fetch(url, options)
            .then(res => res.text())
            .then(res => {
                // JSON.parse() - error
                let j  = eval('('+res+')');
                let products = [];
                for(let i in j) {
                    products.push({
                        name: j[i].name,
                        impUrl: j[i].thumb
                    })
                }
                return products;
            });



    }
};

/*
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://timeout.od.ua/',
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
        'Accept-Encoding': 'gzip, compress, deflate, br, identity',
        'Content-Encoding': 'gzip'
    }
});

instance
    .get(`${category}/&app=true`)
    .then(response => {

        let data = response.data;

        console.log(typeof(data));
        console.log(data);


        data.products.map((item) => {
            console.log(item.name);
            products.push({
                name: item.name,
                impUrl: item.thumb
            });
        });

    });
 */