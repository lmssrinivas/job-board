/**
 * Created by lmssrinivas on 4/27/17.
 */


module.exports.getCards = function (req,res,next) {

    let cards = [
        {
            url:'http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg',
            description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            title:'Cat',
            createdDate:new Date().toDateString()
        },
        {
            url:'https://pbs.twimg.com/profile_images/579415786994839552/aE3uhPPr.jpg',
            description:' This content is a little bit longer.',
            title:'Cat',
            createdDate:new Date().toDateString()
        },
        {
            url:'https://www.somosmamas.com.ar/wp-content/uploads/2016/09/mujer-y-naturaleza-fuera-la-tristeza.jpg',
            description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            title:'Cat',
            createdDate:new Date().toDateString()
        }
    ];

    res.json(cards);

    next();
}