import uuid from "uuid/v4"

let inventory = [

  {
    categories: ["pet", "dong da"],
    name: "KIMI",
    price: "2.2",
    image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/126902507_2828512614093227_2165450947260808717_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=aEzukGLcF_EAX9gJE8_&_nc_ht=scontent.fhan2-3.fna&oh=42907be677ee97ce60e7ce57e668f32e&oe=5FE20DF6",
    description: "Kimi Pet với thương hiệu hơn 5 năm là hệ thống siêu thị bán lẻ các sản phẩm cao cấp. Trường dạy cắt tỉa, dịch vụ spa và khách sạn chó mèo Hàng đầu Việt Nam",
    phone: "0918833892",
    shoplocation: "34/360 Xã Đàn, Đống Đa, Hà Nội",
    lat: "21.013920",
    lng: "105.831810",
    brand: "Jason Bourne",
    currentInventory: 8,
    count:"3",
  },
  {
    categories: ["pet", "dong da"],
    name: "LOLIPET",
    price: "5.4",
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/126820553_2828512690759886_7309030570884542238_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=Dd37zQfBXmwAX_0lZav&_nc_ht=scontent.fhan2-5.fna&oh=c60496a142a3877528c5504fd474a84d&oe=5FE3A875",
    description:"LoliPet Chuyên Bán các dòng thú cưng nhỏ : Hamster , Thỏ cảnh , Nhím cảnh , Sóc cảnh ...\n" +
      "Since 2011 - Shop Uy tín - Lâu Năm - Kinh Nghiệm",
    phone: "097.405.1990",
    shoplocation: "Số 10 Ngõ 45 Nguyên Hồng - Đồng Đa - Hà Nội",
    lat: "21.017420",
    lng: "105.812120",
    brand: "Pine",
    currentInventory: 10,
    count:"1",
  },
  {
    categories: ["pet", "hung vuong"],
    name: "NETPET",
    price: "5.8",
    image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/125975114_2828512670759888_3817999116771102654_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=d3ENRvIBg6sAX_u1_7s&_nc_ht=scontent.fhan2-3.fna&oh=ebda26f55694c048ed6b9e2b254a529f&oe=5FE12554",
    description:"369 HÙNG VƯƠNG BẠN SẼ THẤY THIÊN ĐƯỜNG DÀNH CHO THÚ CƯNG CỦA BẠN.\n" +
      "CHUYÊN CUNG CẤP THỨC ĂN--THỰC PHẨM BỔ SUNG--QUẦN ÁO--PHỤ KIỆN THÚ CƯNG SỈ VÀ LẺ HƠN 500 SẢN PHẨM KHÁC NHAU.",
    phone: "097 814 44 44",
    shoplocation: "369 Hùng Vương",
    lat: "21.017420",
    lng: "105.812120",
    brand: "Tony Tit",
    currentInventory: 7,
    count:"1",
  },
  {
    categories: ["pet", "hung vuong"],
    name: "PETBOARDING",
    price: "5.8",
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/127237446_2828512674093221_3436444217408717536_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=7El68PKGtIkAX-ULJWL&_nc_ht=scontent.fhan2-5.fna&oh=d75e45b0a1b6deee44d23a8d6fca7823&oe=5FE31C27",
    description: "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    phone: "097 814 44 44",
    shoplocation: "368 Hùng Vương",
    lat: "21.017420",
    lng: "105.812120",
    brand: "Hung Nguyen",
    currentInventory: 13,
    count:"0",
  },
  {
    categories: ["pet", "tay ho"],
    name: "PETMART",
    price: "6.6",
    image: "https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/127218433_2828512587426563_4374186798126651658_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=QCfpQS8rBKgAX-QTFe4&_nc_ht=scontent.fhan2-6.fna&oh=f24e45784e6d4a518729a228ed7ed3be&oe=5FE1212D",
    description: "Lịch sử của Pet Mart là một câu chuyện thành công khi chúng tôi là tập hợp những người yêu động vật biết nắm lấy cơ hội đúng lúc cùng với tầm nhìn xa phát triển nâng tầm thành một doanh nghiệp. Bắt đầu từ cửa hàng nhỏ đầu tiên tại Hà Nội năm 2012, chúng tôi đã chứng kiến và tạo ra nhiều thay đổi thú vị trong ngành công nghiệp và dịch vụ dành cho thú cưng.",
    phone: "024 7106 9906",
    shoplocation: "Đ. Thanh Niên, Yên Phụ, Tây Hồ, Hà Nội, Vietnam",
    lat: "21.050894",
    lng: "105.840301",
    brand: "Preslyyyyy",
    currentInventory: 9,
    count:"4",
  },
  {
    categories: ["pet", "tay ho"],
    name: "GAIA",
    price: "7.4",
    image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/125837531_2828512630759892_2556439783418599596_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=PZzJszoOCbcAX80d2mY&_nc_ht=scontent.fhan2-3.fna&oh=2caa6793d3f991362cc3726a8ba4eb8b&oe=5FE23E89",
    description: "Gaia có đội ngũ bác sỹ có chuyên môn cao và kinh nghiệm đến từ Nhật Bản, Châu Âu, với trang thiết bị hiện đại, với quy trình chăm sóc, khám chữa bệnh khoa học, đảm bảo điều kiện chăm sóc và điều trị tốt nhất cho thú cưng. Gaia cung cấp giải pháp toàn diện và an toàn chăm sóc sức khỏe:\n" +
      "Tư vấn, chẩn đoán và điều trị bệnh (pets taxi)\n" +
      "Pets Cafe (giao lưu thông tin về pets)\n" +
      "Grooming (spa) chăm sóc thú cưng\n" +
      "Pets Hotel",
    phone: "+84 4 3795 6956",
    shoplocation: "Số 38 - Đường 1 - Khu Quân đội F361 - An Dương - Phường Yên Phụ - Quận Tây Hồ Hà Nội",
    lat: "21.050980",
    lng: "105.844210",
    brand: "Preslyyyyy",
    currentInventory: 4,
    count:"0",

  },
  {
    categories: ["pet", "tu liem"],
    name: "PET LOVERS",
    price: "10.4",
    image: "https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/127220406_2828512574093231_2921362915718670111_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=WH2oqly6qdgAX8Qow7z&_nc_ht=scontent.fhan2-6.fna&oh=e778bbcb50f900f23fc8ddb3107bc71c&oe=5FE1D075",
    description: "Cung Cấp Thức Ăn Phụ Kiện Cho Thú Cưng",
    phone: "034 534 9012",
    shoplocation: "Công Ty TNHH Minh Phúc, Tầng 10, Tòa nhà HH3, KĐT Mỹ Đình, Mễ Trì, Quận Từ Liêm, Hà Nội",
    lat: "21.033310",
    lng: "105.850000",
    brand: "Huyen Tran",
    currentInventory: 24,
    count:"1",
  },
  {
    categories: ["pet", "tu liem"],
    name: "J&P",
    price: "10.9",
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/126338311_2828512577426564_1284514421381477126_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=Xn-_X4_a5AsAX9zx4tP&_nc_ht=scontent.fhan2-5.fna&oh=7f20dabd7e023ce04648cacb5c4f0845&oe=5FE24023",
    description: "J & Pet Shop Spa - Animal Hospital Hà Nội cung cấp dịch vụ Spa, khám chữa bệnh, thức ăn và phụ kiện, pet cafe cho chó mèo, bán chó và mèo.\n" +
      "Chúng tôi tin rằng:\n" +
      "- Với dịch vụ Spa nhằm mang đến cho khách hàng các dịch vụ chất lượng trọn vẹn hơn. Đảm bảo thú cưng của bạn luôn cảm thấy ấm áp trong sự chăm sóc tràn đầy yêu thương của chúng tôi.\n" +
      "- Với dịch vụ khám chữa bệnh. Đội ngũ y bác sĩ cùng các chuyên gia nước ngoài dày dạn kinh nghiệm sẽ đem đến cho bạn cơ hội được trải nghiệm cảm giác thực sự hài lòng về các dịch vụ, chất lượng, giá cả mà J & Pet đang áp dụng.\n" +
      "- Thức ăn và các phụ kiện được nhập khẩu trực tiếp từ Hàn Quốc, Mỹ, Canada, Đức. Chúng tôi cam kết sẽ đảm bảo đúng chất lượng, giá cả cho người tiêu dùng. ",
    phone: "094 455 58 81",
    shoplocation: "Villa D31 The Manor, Mẽ Trì, Từ Liêm, Hà Nội",
    lat: "20.988810",
    lng: "105.798220",
    brand: "Huyen Tran",
    currentInventory: 2,
    count:"0",

  },
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory
