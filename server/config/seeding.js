const perfume = require("../modules/Perfume/model");
const admin = require("../modules/Admins/model");
const contact = require("../modules/Contact/model");
const users = require("../modules/Users/model");


perfume.find().then(function(item){
    if(item.length == 0){
        new perfume({
            Perfume_Name: "Carolina Herrera Good Girl",
            Perfume_Price: 3200000,
            Perfume_Image: "https://www.thegioinuochoa.com.vn/uploads/default%2F2017%2F09%2F15060463321.jpg",
            Perfume_Description: "Nước hoa quyến rũ tối về ngủ với em",
            Type:{
                "Độ cồn": "5%"
            },
            Gender: "Nu"
        }).save()
        new perfume({
            Perfume_Name: "Creed Aventus",
            Perfume_Price: 8500000,
            Perfume_Image: "https://mifashop.net/wp-content/uploads/2021/01/nuoc-hoa-creed-aventus-for-men-creed-100ml-03.jpg",
            Perfume_Description: "Nước hoa quyến rũ tối về ngủ với em",
            Type:{
                "Độ cồn": "10%"
            },
            Gender: "Nam"
        }).save()
        new perfume({
            Perfume_Name: "Dior Sauvage Eau de Parfum",
            Perfume_Price: 2450000,
            Perfume_Image: "https://orchard.vn/wp-content/uploads/2018/04/dior-sauvage-edp-orchard.jpeg",
            Perfume_Description: "Nước hoa quyến rũ tối về ngủ với em",
            Type:{
                "Độ cồn": "69%"
            },
            Gender: "Unisex"
        }).save()

        new perfume({
            Perfume_Name: "Chanel Bleu De Chanel Parfum",
            Perfume_Price: 2800000,
            Perfume_Image: "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2020/07/nuoc-hoa-chanel-bleu-de-chanel-edp-100ml-1-jpg-1594109724-07072020151524.jpg",
            Perfume_Description: "Được ra mắt vào năm 2018, nước hoa Bleu de Chanel Parfum được sáng tạo bởi Olivier Polge với sự mệnh hoàn thiện bộ ba hoàn hảo của dòng Bleu de Chanel của Nhà mốt Chanel. Bleu de Chanel Parfum đại diện cho màu sắc của sự tự do, thể hiện sự mạnh mẽ và tinh tế. ",
            Type:{
                "Độ cồn": "69%"
            },
            Gender: "Nam"
        }).save()

        new perfume({
            Perfume_Name: "Calvin Klein CK One",
            Perfume_Price: 1100000,
            Perfume_Image: "https://product.hstatic.net/200000223113/product/calvin_klein_ck_one_edt_200ml_2_30c5b0907d624e8b840b712fd52d9308_grande.png",
            Perfume_Description: "Nếu những nhóm nhạc đình đám như Backstreet Boys hay Westlife chỉ cần nhắc tới thôi, mọi tín đồ âm nhạc đều nghĩ đến những năm thập niên 90, thì với những những người yêu thích nước hoa, nhắc đến CK one của hãng Calvin Klein, những cảm xúc thập niên 90 cũng sẽ ùa về. Được ra đời vào năm 1994.",
            Type:{
                "Độ cồn": "1%"
            },
            Gender: "Unisex"
        }).save()

        new perfume({
            Perfume_Name: "Yves Saint Laurent Mon Paris",
            Perfume_Price: 1100000,
            Perfume_Image: "https://blogquatang.com/wp-content/uploads/2021/05/YSL-Mon-Paris-3.jpg",
            Perfume_Description: "Yves Saint Laurent lần đầu tiên giới thiệu về Mon Paris vào giữa năm 2016, lấy cảm hứng từ kinh đô ánh sáng Paris. Mon Paris được công bố với mùi hương đại diện cho vẻ đẹp rạng rỡ của những cô nàng thời thượng đến từ phương Tây, với tình yêu mãnh liệt",
            Type:{
                "Độ cồn": "5%"
            },
            Gender: "Nu"
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
            User_Name: "user",
            User_Password: "user",
            User_Email: "nhokbi35@gmail.com",
            User_Address: "đường không số, phố không em",
            User_Tele: "0984988888"

        }).save()
        console.log("User Added")
    }
})
