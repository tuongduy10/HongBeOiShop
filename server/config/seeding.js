const perfume = require("../modules/Perfume/model");

perfume.find().then(function(item){
    if(item.length == 0){
        new perfume({
            Perfume_Name: "Nước hoa 01",
            Perfume_Price: 10000000,
            Perfume_Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhanghieusales.com%2Fqua-trinh-san-xuat-nuoc-hoa-cua-cac-hang-hieu-noi-tieng%2F&psig=AOvVaw0U9MbZ3gqjMt4V3r3N6wHP&ust=1649346937347000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiknKTm__YCFQAAAAAdAAAAABAD",
            Perfume_Description: "Nước hoa quyến rũ tối về ngủ với em",
            Type:{
                "Độ cồn": "5%"
            }
        }).save()

        console.log('seeded')
    }
})