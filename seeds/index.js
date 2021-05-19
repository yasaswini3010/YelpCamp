const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    /*for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6086f7a05615fc09280a0038',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
	    geometry:{
                	type:"Point",
                	coordinates:[
				cities[random1000].longitude,
				cities[random1000].latitude,
				]
            		},
            images: [
                {
                  url: 'https://res.cloudinary.com/ds2rjrikw/image/upload/v1619680910/imageupload-9/x2ltra1l9nfswktyo1fo.jpg',
                  filename: 'imageupload-9/x2ltra1l9nfswktyo1fo'
                },
                {
                  url: 'https://res.cloudinary.com/ds2rjrikw/image/upload/v1619680910/imageupload-9/jektxp1mesmp6h0ifgty.jpg',
                  filename: 'imageupload-9/jektxp1mesmp6h0ifgty'
                }
              ]
        })
        await camp.save();
    }*/
}

seedDB().then(() => {
   mongoose.connection.close();
})