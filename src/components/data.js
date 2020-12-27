import serviceImg from "../images/Component 8 – 1.png";
import imgChef from "./../images/members/unnamed.png";
import imgHovo from "./../images/members/85016699_2544182229024976_8014093770981113856_n.jpg";
import imgMush from "./../images/members/61054179_2524383591123471_5352405574468239360_o.jpg";


 export const member = [
    {id:1, img: imgChef, text: 'Levon Asatryan', profession:'Web Developer', year:6},
    {id:2, img: imgHovo, text: 'Hovhannes Habeshyan', profession:'Web Developer', year:2},
    {id:3, img: imgMush, text: 'Mush Hajinyan', profession:'Web Developer', year:1},
    {id:4, img: imgChef, text: 'bla bla bla 4', profession:'seo', year:4},
    {id:5, img: imgChef, text: 'bla bla bla 5',profession:'seo', year:1} ,
    {id:6, img: imgChef, text: 'bla bla bla 6',profession:'seo', year:1} ,
    {id:7, img: imgChef, text: 'bla bla bla 7',profession:'qa', year:6} ,
    {id:8, img: imgChef, text: 'bla bla bla 8',profession:'qa', year:5} ,
    {id:9, img: imgChef, text: 'bla bla bla 9',profession:'qa', year:5} ,
    {id:10, img: imgChef, text: 'bla bla bla 10', profession: 'qa', year:8},
    {id:11, img: imgChef, text: 'bla bla bla 11', profession: 'designer', year:8},
    {id:12, img: imgChef, text: 'bla bla bla 12', profession: 'designer', year:8},
    {id:13, img: imgChef, text: 'Gevorg Sargsyan', profession: 'HR', year:2}
]

// import ExternalInfo from "components/ExternalInfo";
 export const breakPoints = [
    {width:500, itemsToShow: 1.1},
    {width:768, itemsToShow: 2},
    {width:1200, itemsToShow: 3},
    {width:1500, itemsToShow: 4},
]


export const aboutData = [
    {
        id: 1,
        title: 'SolArt is an IT company with creative specialists and experienced specialists, which deals with the design, programming and testing of Softwere projects, products.'},
    {
        id: 2,
        title: 'In its work, the SolArt team uses an organized and planned approach to projects in complete and partial cases. The management is carried out by the Scrum framework of Agile methodology, which allows to be in constant contact with the customer, to ensure the best possible result, which will satisfy the customer.'
    },
    {
        id: 3,
        title: 'The team includes specialists who have made significant contributions to the creation of international projects, who will show the same professional approach in the framework of cooperation with you.'
    }
]

export const navLinks = [
    {to: 'about', id: 1, title: 'About'},
    {to: 'services', id: 2, title: 'Services'},
    {to: 'team', id: 3, title: 'Team'},
    {to: 'header', id: 4, title: 'Projects'},
    {to: 'header', id: 5, title: 'Contact'},
];



export const serviceData = [
    {id: 1, title: 'Business Card Website',
        li: [{id:1,li:'Custom design'},{id:2,li:'Logo'},{id:3,li: 'Help setting up domains and hostings, including potential growth of the website.'},],
        img: serviceImg, name:'Create your own business card website with us. A custom design with a logo and general information about your business! A perfect opportunity for your business to start growing!',

     },
    {id: 2, title: 'Social netsadaworking website',
        li: [{id:1,li:'asdasd'},{id:2,li:'asd'},{id:3,li: 'asdsad'},{id:4,li: 'asdsad'},{id:5,li: 'asdsad'},{id:6,li: 'asdsad'},],
        img: serviceImg, name: '22222'},
    {id: 3, title: 'Social networking website',
        li: [{id:1,li:'asdasd'},{id:2,li:'asd'},{id:3,li: 'asdsad'},{id:4,li: 'asdsad'},{id:5,li: 'asdsad'},{id:6,li: 'asdsad'},],
        img: serviceImg, name: '333333'},
    {id: 4, title: 'Social networking website',
        li: [{id:1,li:'asdasd'},{id:2,li:'asd'},{id:3,li: 'asdsad'},{id:4,li: 'asdsad'},{id:5,li: 'asdsad'},{id:6,li: 'asdsad'},],
        img: serviceImg, name: '444444'},
    {id: 5, title: 'Social networking website', img: serviceImg, name: '55555'},
    {id: 6, title: 'Social networking website', img: serviceImg, name: '66666'},
    {id: 7, title: 'Social networking website', img: serviceImg, name: '77777'}
]




