function getProductsList() {
    query('https://fakestoreapi.com/products', function (result, error) {
        if (!error) {
            console.log('All products:', result);
            const product1ID = result[0].id;
            const product2ID = result[1].id;

            query(`https://fakestoreapi.com/products/${product1ID}`, function (result, error) {
                if (!error) {
                    console.log('Single product 1:', result);

                    query(`https://fakestoreapi.com/products/${product2ID}`, function (result, error) {
                        if (!error) {
                            console.log('Single product 2:', result);
                        } else {
                            console.log('Error fetching single product:', error);
                        }
                    });

                } else {
                    console.log('Error fetching single product:', error);
                }
            });

        } else {
            console.log('Error fetching products:', error);
        }
    });
}

getProductsList();


function query(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                callback(data, null);
            }, 2000)
        })
        .catch(error => callback(null, error));
}