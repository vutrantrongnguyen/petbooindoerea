import uuid from "uuid/v4"

let inventory = [
  // { categories: ['new arrivals'], name: 'Timber Gray Sofa', price: '1000', image: '../images/products/couch1.png', description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.', brand: 'Jason Bourne', currentInventory: 4 },
  // { categories: ['sofas', 'living room'], name: 'Carmel Brown Sofa', price: '1000', image: '../images/products/couch5.png', description: 'Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa’s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.' , brand: 'Jason Bourne' , currentInventory: 2 },
  // { categories: ['new arrivals', 'sofas'], name: 'Mod Leather Sofa', price: '800', image: '../images/products/couch6.png', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 8 },
  // { categories: ['new arrivals', 'sofas'], name: 'Thetis Gray Love Seat', price: '900', image: '../images/products/couch7.png', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.' , brand: 'Jason Bourne', currentInventory: 10},
  // { categories: ['on sale', 'sofas'], name: 'Sven Tan Matte', price: '1200', image: '../images/products/couch8.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne' , currentInventory: 7 },
  // { categories: ['on sale', 'sofas'], name: 'Otis Malt Sofa', price: '500', image: '../images/products/couch9.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 13},
  // { categories: ['on sale', 'sofas'], name: 'Ceni Brown 3 Seater', price: '650', image: '../images/products/couch10.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 9},
  // { categories: ['sofas', 'living room'], name: 'Jameson Jack Lounger', price: '1230', image: '../images/products/couch11.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 24 },
  {
    categories: ["pet", "dong da"],
    name: "KIMI",
    price: "2.2",
    image: "../images/products/kimi46.jpg",
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
    image: "../images/products/lolipet.jpg",
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
    image: "../images/products/netpet.jpg",
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
    image: "../images/products/petboarding.jpg",
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
    image: "../images/products/petmart.jpg",
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
    image: "../images/products/gaia.jpg",
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
    image: "../images/products/petlovers.jpg",
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
    image: "../images/products/jpkm8.jpg",
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

  // { categories: ['sofas'], name: 'Galaxy Blue Sofa', price: '800', image: '../images/products/couch2.png', description: 'Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.', brand: 'Jason Bourne', currentInventory: 43 },
  // { categories: ['new arrivals', 'sofas'], name: 'Markus Green Love Seat', price: '900', image: '../images/products/couch3.png', description: 'You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.', brand: 'Jason Bourne' , currentInventory: 2},
  // { categories: ['on sale', 'sofas'], name: 'Dabit Matte Black', price: '1200', image: '../images/products/couch4.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', currentInventory: 14 },
  //
  // { categories: ['on sale', 'chairs'], name: 'Embrace Blue', price: '300', image: '../images/products/chair1.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 12 },
  // { categories: ['on sale', 'chairs'], name: 'Nord Lounger', price: '825', image: '../images/products/chair2.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 13},
  // { categories: ['on sale', 'chairs'], name: 'Ceni Matte Oranve', price: '720', image: '../images/products/chair3.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 33},
  // { categories: ['on sale', 'chairs'], name: 'Abisko Green Recliner', price: '2000', image: '../images/products/chair4.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 23 },
  // { categories: ['on sale', 'chairs'], name: 'Denim on Denim Single', price: '1100', image: '../images/products/chair5.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.' , brand: 'Jason Bourne', currentInventory: 13},
  // { categories: ['on sale', 'chairs'], name: 'Levo Tan Lounge Chair', price: '600', image: '../images/products/chair6.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 15 },
  //
  // { categories: ['on sale', 'chairs'], name: 'Anime Tint Recliner', price: '775', image: '../images/products/chair7.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 44 },
  // { categories: ['on sale', 'chairs'], name: 'Josh Jones Red Chair', price: '1200', image: '../images/products/chair8.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 17 },
  // { categories: ['on sale', 'chairs'], name: 'Black Sand Lounge', price: '1600', image: '../images/products/chair9.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 28 },
  // { categories: ['on sale', 'chairs'], name: 'Mint Beige Workchair', price: '550', image: '../images/products/chair10.png', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 31 },  // {

]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory