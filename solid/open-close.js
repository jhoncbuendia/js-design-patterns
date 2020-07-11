// open to be extended, close to be modified

const COLOR = {
    RED: 'RED',
    BLUE: 'BLUE'
}

const SIZE = {
    SMALL: 'SMALL',
    LARGE: 'LARGE'
}

class Product {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}

class Filter {
    filterByConditions(items, conditions) {
        let counter = 0;
        let filterResult = items;
        while (conditions.length > counter) {
            const result = filterResult.filter(conditions[counter]);
            if(result.length > 0 ) filterResult = result;
            counter++;
        }
        return filterResult;
    }
}

const products = [new Product(COLOR.BLUE, SIZE.SMALL), new Product(COLOR.RED, SIZE.SMALL), new Product(COLOR.BLUE, SIZE.LARGE)];
const filter = new Filter();

const result = filter.filterByConditions(products,
    [
        (product) => {
           return (product.color === COLOR.BLUE || product.color === COLOR.RED)
        },
        (product) => {
            return product.size !== SIZE.LARGE
        },
    ]
);

console.log(result);
