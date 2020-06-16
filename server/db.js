const typeorm = require('typeorm');

class Creator {
    constructor(id, name, img, price, ytURL) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.ytURL = ytURL;
    }
}

const EntitySchema = require("typeorm").EntitySchema;

const CreatorSchema = new EntitySchema({
    name: "Creator",
    target: Creator,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        img: {
            type: "text"
        },
        price: {
            type: "varchar"
        },
        ytURL: {
            type: "text"
        }
    }
});

async function getConnection() {
    return await typeorm.createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "setuptourist",
        synchronize: true,
        logging: false,
        entities: [
            CreatorSchema
        ]
    })
}

async function getAllCreators() {
    const connection = await getConnection();
    const creatorRepo = connection.getRepository(Creator);
    const creators = await creatorRepo.find();
    connection.close();
    return creators;
}


async function insertCreator(name, img, price, ytURL) {
    const connection = await getConnection();

    // create
    const creator = new Creator();
    creator.name = name;
    creator.img = img;
    creator.price = price;
    creator.ytURL = ytURL;

    // save
    const creatorRepo = connection.getRepository(Creator);
    const res = await creatorRepo.save(creator);
    console.log('saved', res);

    // return new list
    const allCreators = await creatorRepo.find();
    connection.close();
    return allCreators;

}



module.exports = {
    getAllCreators,
    insertCreator
}