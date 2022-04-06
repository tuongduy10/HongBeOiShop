const perfume = require("../modules/Perfume/model");
const admin = require("../modules/Admins/model");
const contact = require("../modules/Contact/model");
const users = require("../modules/Users/model");


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
        new perfume({
            Perfume_Name: "Nước hoa 02",
            Perfume_Price: 10000000,
            Perfume_Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhanghieusales.com%2Fqua-trinh-san-xuat-nuoc-hoa-cua-cac-hang-hieu-noi-tieng%2F&psig=AOvVaw0U9MbZ3gqjMt4V3r3N6wHP&ust=1649346937347000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJiknKTm__YCFQAAAAAdAAAAABAD",
            Perfume_Description: "Nước hoa quyến rũ tối về ngủ với em",
            Type:{
                "Độ cồn": "5%"
            }
        }).save()

        console.log('Parfume seeded')
    }
})
admin.find().then(function(item){
    if(item.length == 0){
        new admin({
            Ad_Name: "HoangBi",
            Ad_Password: "1",
            Ad_Email: "nnguyenhoang1612@gmail.com",
            Ad_Phone: "0933503866",
            Ad_Position: "A"

        }).save()
        console.log("1 thằng admin đã được sinh ra")
    }
})

contact.find().then(function(item){
    if(item.length == 0 ){
        new contact({
            Cont_Name: " h04ngb1",
            Cont_Email: "emailrac@gmail.com",
            Cont_Tele: "0933503867",
            Cont_Content: "123",
            Cont_Status:"F",
            Cont_DateAdd: "2022-11-16",
            Cont_DateRep: "2022-12-16",
            Ad_Id: "624dbbd86705373e7ca0cd7e"
        }).save()
        console.log("Contact added")
    }
})

users.find().then(function(item){
    if(item.length == 0 ){
        new users({
            User_Name: "h04n9Bjj",
            User_Password: "passla1",
            User_Email: "nhokbi35@gmail.com",
            User_Address: "phường không số, phố không em",
            User_Tele: "0984988888"

        }).save()
        console.log("User Added")
    }
})
