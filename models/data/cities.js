import "dotenv/config.js";
import "../../config/dataBase.js";
import City from "../../models/City.js";

let cities = [
  {
    Name: "Tokyo",
    Photo:
      "https://es.wikipedia.org/wiki/Monte_Fuji#/media/Archivo:Chuurei-tou_Fujiyoshida_17025277650_c59733d6ba_o.jpg",
    Country: "Japan",
    Continent: "Asia",
    Description:
      "Tokyo, the capital of Japan, is a sprawling metropolis blending cutting-edge technology with deep-rooted cultural traditions. Known for its iconic skyline, vibrant shopping districts, and dynamic pop culture, Tokyo is also home to historic temples, serene parks, and the Imperial Palace. The city is a leading center for innovation, art, and commerce, and offers a seamless mix of the modern and the traditional.",
    Currency: "Yen",
    Language: "Japanese",
    Population: 13929000,
    Economy: "Technology, Finance",
    Security: "High",
    Climate: "Temperate, with hot, humid summers and mild winters.",
    History:
      "Tokyo’s origins trace back to the 12th century when it was a small fishing village named Edo. It became the political center of Japan in the early 17th century under the Tokugawa Shogunate. Renamed Tokyo in 1868, it became the capital when Emperor Meiji moved the imperial court from Kyoto. Since then, Tokyo has grown into one of the most populous and influential cities in the world, surviving major events such as the Great Kanto Earthquake of 1923 and World War II, to become a global powerhouse in economics and culture.",
  },
  {
    Name: "Paris",
    Photo:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
    Country: "France",
    Continent: "Europe",
    Description:
      "Paris, the 'City of Light,' is world-renowned for its rich history, stunning architecture, and influence on art, fashion, and cuisine. With landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre, Paris is a top destination for travelers seeking both culture and romance. The city's quaint cafes, broad boulevards, and vibrant neighborhoods make it a vibrant cultural center.",
    Currency: "Euro",
    Language: "French",
    Population: 2161000,
    Economy: "Tourism, Finance",
    Security: "High",
    Climate:
      "Mild winters and warm summers, making it ideal for year-round tourism.",
    History:
      "Paris has a deep-rooted history dating back to the 3rd century BC, when it was settled by the Parisii, a Celtic tribe. Over centuries, it grew to become the political and cultural heart of France, especially after it became the monarchs’ residence in the 13th century. The French Revolution began here in 1789, further solidifying its historical significance. Paris has since been a center of global influence in art, philosophy, and politics, with an enduring legacy that continues to shape the modern world.",
  },

  {
    Name: "New York City",
    Photo:
      "https://images.ecestaticos.com/53658fMeOfqKPvvtiGn9aVp2-U4=/1x1:1998x1497/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F07d%2Fc11%2Fd3c%2F07dc11d3c1bae66ffcfe469598f61e59.jpg",
    Country: "United States",
    Continent: "North America",
    Description:
      "New York City, often referred to as 'The Big Apple,' is one of the most dynamic cities in the world. Known for its iconic skyline, diverse culture, and vibrant arts scene, NYC is a global center of finance, media, technology, and entertainment. It is home to famous landmarks such as the Statue of Liberty, Central Park, and Times Square, drawing millions of tourists each year.",
    Currency: "USD",
    Language: "English",
    Population: 8419600,
    Economy: "Finance, Media, Technology",
    Security: "Medium",
    Climate:
      "Humid subtropical, characterized by hot summers and cold winters with significant seasonal changes.",
    History:
      "Founded as New Amsterdam by Dutch settlers in 1624, New York City quickly grew into a bustling port and trade hub. It was renamed New York after the British took control in 1664. The city has since played a pivotal role in American history, from the Revolutionary War to becoming a symbol of immigration in the late 19th and early 20th centuries. Today, it is known as a melting pot of cultures, continuously evolving as a center of innovation and global influence.",
  },
  {
    Name: "Cairo",
    Photo:
      "https://www.cloud-europamundo.com/img/carousel/hd/El%20Cairo_20210223144606.jpg",
    Country: "Egypt",
    Continent: "Africa",
    Description:
      "Cairo, the sprawling capital of Egypt, sits along the legendary Nile River and is a gateway to ancient civilizations. It is a bustling metropolis that bridges Africa and the Middle East, renowned for its proximity to the Pyramids of Giza and the Great Sphinx. Cairo blends ancient history with modernity, offering vibrant markets, mosques, and a lively arts and culinary scene.",
    Currency: "Egyptian Pound",
    Language: "Arabic",
    Population: 10230350,
    Economy: "Tourism, Manufacturing",
    Security: "Medium",
    Climate:
      "Desert climate, characterized by extremely hot summers and mild winters.",
    History:
      "Cairo was founded in 969 AD by the Fatimid dynasty and quickly became a major Islamic cultural and political center. Its strategic location near the ancient cities of Memphis and Giza has made it a continuous focal point in Egypt’s history. Cairo grew significantly during the medieval period and later under Ottoman rule. Today, the city stands as a symbol of Egypt's rich heritage and its central role in the Arab world.",
  },
  {
    Name: "Sydney",
    Photo:
      "https://images.gostudy.com.au/w:1400/h:800/q:mauto/f:best/ig:avif/id:1619b76004c98e623b2e00397e8e6d0a/https://gostudyaus.es/SYD_header.jpg",
    Country: "Australia",
    Continent: "Oceania",
    Description:
      "Sydney, Australia's largest and most populous city, is a vibrant cultural and economic hub. It is world-famous for the Sydney Opera House, its beautiful harbor, and stunning beaches like Bondi. The city's diverse population brings a global influence to its cuisine, festivals, and arts scene. Its modern skyline, along with the surrounding natural beauty, makes Sydney a must-visit destination for travelers.",
    Currency: "Australian Dollar",
    Language: "English",
    Population: 5312163,
    Economy: "Finance, Tourism",
    Security: "High",
    Climate:
      "Subtropical, with mild winters and warm summers, making it a year-round tourist destination.",
    History:
      "Sydney was founded in 1788 as the first British colony in Australia. Initially established as a penal colony, it grew rapidly as free settlers arrived and economic opportunities expanded. Over the years, Sydney developed into one of the world's major global cities, playing a central role in both Australia's history and its development as a modern nation. Today, it is a cultural and financial powerhouse in the Asia-Pacific region.",
  },
  {
    Name: "Rio de Janeiro",
    Photo:
      "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
    Country: "Brazil",
    Continent: "South America",
    Description:
      "Rio de Janeiro is a vibrant city known for its stunning natural beauty, famous beaches like Copacabana and Ipanema, and iconic landmarks such as Christ the Redeemer. The city is a melting pot of culture, music, and dance, with samba and bossa nova originating here. Rio’s Carnival festival is world-renowned, attracting millions of visitors every year with its elaborate parades and celebrations.",
    Currency: "Brazilian Real",
    Language: "Portuguese",
    Population: 6748000,
    Economy: "Tourism, Oil, Manufacturing",
    Security: "Medium",
    Climate: "Tropical climate, with hot and humid summers and mild winters.",
    History:
      "Founded in 1565 by Portuguese settlers, Rio de Janeiro was initially a small colonial outpost. Over time, it grew to become the capital of Brazil and one of the most important cities in South America. Rio served as the capital from 1763 until 1960, when Brasília was inaugurated. The city's economy boomed during the 19th century due to the coffee trade, and it has since become a center for Brazilian culture, tourism, and industry.",
  },
  {
    Name: "Berlin",
    Photo: "https://www.visitberlin.de/system/files/image/og_image.jpg",
    Country: "Germany",
    Continent: "Europe",
    Description:
      "Berlin is the vibrant capital of Germany, known for its rich history, modern architecture, and thriving cultural scene. It has become a global hotspot for art, music, and innovation, with countless galleries, museums, and festivals. The city has a diverse and multicultural atmosphere, making it a lively place for residents and tourists alike.",
    Currency: "Euro",
    Language: "German",
    Population: 3644826,
    Economy: "Technology, Manufacturing",
    Security: "High",
    Climate: "Temperate, with cold winters and warm summers.",
    History:
      "Berlin's history is marked by its role as the capital of the Prussian kingdom, the German Empire, and later as the focal point of conflict during the Cold War. The Berlin Wall, erected in 1961, symbolized the division between East and West Germany until its fall in 1989. Since reunification, Berlin has emerged as a symbol of unity, resilience, and progress, becoming one of Europe's most dynamic cities.",
  },

  {
    Name: "Cape Town",
    Photo:
      "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/14/10/2e/1e/cape-town.jpg",
    Country: "South Africa",
    Continent: "Africa",
    Description:
      "Cape Town, a vibrant port city on South Africa’s southwest coast, is famous for its stunning natural beauty, including the iconic Table Mountain and Cape of Good Hope. Known as the 'Mother City,' it boasts a rich cultural scene, diverse architecture, and is a gateway to vineyards, beaches, and nature reserves. Cape Town is a key destination for tourists, blending history and modernity in a unique way.",
    Currency: "South African Rand",
    Language: "English, Afrikaans",
    Population: 433688,
    Economy: "Tourism, Agriculture",
    Security: "Medium",
    Climate:
      "Mediterranean, with dry summers and wet winters, offering mild weather most of the year.",
    History:
      "Cape Town was founded in 1652 by the Dutch East India Company as a supply station for ships traveling between Europe and Asia. It was the first European settlement in South Africa and became a center of colonial power. Over the centuries, Cape Town has played a pivotal role in South Africa’s political and social history, from the days of colonialism and apartheid to becoming a symbol of freedom and democracy after Nelson Mandela's release from prison nearby in 1990.",
  },
  {
    Name: "Bangkok",
    Photo:
      "https://cdn.pixabay.com/photo/2022/06/08/07/25/bangkok-7249957_1280.jpg",
    Country: "Thailand",
    Continent: "Asia",
    Description:
      "Bangkok, Thailand’s bustling capital, is a city of contrasts. From its glittering temples and palaces, such as Wat Arun and the Grand Palace, to its vibrant street life and floating markets, Bangkok offers a unique mix of traditional culture and modernity. The city is renowned for its rich cuisine, nightlife, and shopping, making it one of the most visited destinations in the world.",
    Currency: "Baht",
    Language: "Thai",
    Population: 10539000,
    Economy: "Tourism, Trade, Manufacturing",
    Security: "Medium",
    Climate:
      "Tropical, with hot and humid weather year-round, particularly during the rainy season.",
    History:
      "Bangkok became Thailand’s capital in the late 18th century, following the fall of Ayutthaya to Burmese forces in 1767. The city was established by King Rama I and quickly grew into a major political and economic center. Throughout its history, Bangkok has been the heart of Thailand’s royal and religious life, blending ancient traditions with modern urbanization. Today, it stands as a symbol of Thailand’s rapid development and global integration.",
  },
  {
    Name: "Moscow",
    Photo:
      "https://content.r9cdn.net/rimg/dimg/b0/1c/7746c81c-city-14713-163f5192361.jpg?width=1366&height=768&xhint=1535&yhint=594&crop=true",
    Country: "Russia",
    Continent: "Europe/Asia",
    Description:
      "Moscow, the sprawling capital of Russia, is a city where history and modernity collide. Famous for its imposing Kremlin, Red Square, and St. Basil's Cathedral, Moscow is not only the political center of Russia but also a hub of art, culture, and industry. It is a city that has played an essential role in shaping global history, from the Russian Empire to the Soviet Union and beyond.",
    Currency: "Russian Ruble",
    Language: "Russian",
    Population: 11920000,
    Economy: "Energy, Technology, Finance",
    Security: "Medium",
    Climate:
      "Humid continental, characterized by long, cold winters and short, warm summers.",
    History:
      "Founded in 1147 by Yuri Dolgorukiy, Moscow has grown from a small medieval town into the heart of the Russian state. It became the capital of the Tsars and later the Soviet Union, playing a central role during major world events, including the Napoleonic Wars, World War II, and the Cold War. After the fall of the Soviet Union, Moscow transitioned into a modern city, maintaining its influence as a cultural and political powerhouse in Russia and the world.",
  },
  {
    Name: "Dubai",
    Photo:
      "https://www.cloud-europamundo.com/img/carousel/hd/Dubai_20210328212559.jpg",
    Country: "United Arab Emirates",
    Continent: "Asia",
    Description:
      "Dubai, a global city known for its futuristic skyline, luxurious shopping, and ultramodern architecture, has become one of the most popular tourist and business destinations in the world. From the towering Burj Khalifa to man-made islands like Palm Jumeirah, Dubai offers a unique blend of innovation and tradition, with a rich cultural heritage rooted in its Arabian past.",
    Currency: "UAE Dirham",
    Language: "Arabic",
    Population: 3331400,
    Economy: "Tourism, Real Estate, Trade",
    Security: "High",
    Climate:
      "Desert, with scorching summers and mild winters, making it a popular winter retreat.",
    History:
      "Originally a small fishing and pearl-diving village, Dubai experienced rapid growth after the discovery of oil in the 1960s. Sheikh Rashid bin Saeed Al Maktoum's vision turned Dubai into a major global trade and tourism hub. Today, Dubai continues to evolve, diversifying its economy and positioning itself as a leading city for business, finance, and tourism in the Middle East.",
  },
  {
    Name: "Buenos Aires",
    Photo:
      "https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585836711975-N7XHQ1OEB1VT1Q28Y0NP/BuenosAires-1815x1200.jpg",
    Country: "Argentina",
    Continent: "South America",
    Description:
      "Buenos Aires, the capital of Argentina, is a city known for its rich European-style architecture, passionate tango music, and thriving cultural scene. Often called 'The Paris of South America,' Buenos Aires combines old-world charm with modern vibrancy, offering a unique blend of history, arts, and gastronomic delights. Its diverse neighborhoods, such as Palermo and San Telmo, are filled with cafes, theaters, and museums.",
    Currency: "Argentine Peso",
    Language: "Spanish",
    Population: 3075646,
    Economy: "Tourism, Finance, Agriculture",
    Security: "Medium",
    Climate:
      "Humid subtropical, with hot summers and mild winters, providing a pleasant climate year-round.",
    History:
      "Buenos Aires was founded in 1536 by Spanish explorer Pedro de Mendoza, though it was soon abandoned due to conflicts with local indigenous groups. The city was refounded in 1580 and quickly became a major center of trade and immigration, particularly during the late 19th and early 20th centuries, when millions of Europeans arrived in Argentina. Buenos Aires has since grown into a cosmopolitan city, deeply connected to both its European roots and its vibrant Argentine identity.",
  },

  {
    Name: "Toronto",
    Photo:
      "https://emigraacanada.com/wp-content/uploads/2023/08/1217045260.jpg",
    Country: "Canada",
    Continent: "North America",
    Description:
      "Toronto is Canada’s largest and most dynamic city, known for its diversity and multiculturalism. A major financial and cultural hub, Toronto boasts world-class museums, theaters, and a vibrant food scene. Its iconic skyline is dominated by the CN Tower, and the city offers a rich mix of modernity and historical landmarks, making it a top destination for visitors from around the world.",
    Currency: "Canadian Dollar",
    Language: "English, French",
    Population: 2731579,
    Economy: "Finance, Technology, Media",
    Security: "High",
    Climate:
      "Humid continental, characterized by cold, snowy winters and warm, humid summers.",
    History:
      "Toronto was initially founded as 'York' by British settlers in 1793 as a military outpost. Over time, it grew into a bustling center for trade and commerce. In 1834, it was renamed Toronto, derived from a native Huron word meaning 'meeting place.' Since then, Toronto has emerged as a leading global city, a beacon for immigrants, and a thriving center for finance, arts, and education in Canada.",
  },
  {
    Name: "Seoul",
    Photo:
      "https://media.gadventures.com/media-server/cache/c3/86/c386b09360fce27e0a4f77bcbd796dc3.jpg",
    Country: "South Korea",
    Continent: "Asia",
    Description:
      "Seoul, the bustling capital of South Korea, is a city where cutting-edge technology meets ancient traditions. Known for its towering skyscrapers, high-tech subways, and pop culture, Seoul is also home to serene palaces, historic temples, and tranquil gardens. As a center for innovation, the city blends the energy of a global metropolis with deep-rooted cultural heritage.",
    Currency: "South Korean Won",
    Language: "Korean",
    Population: 9776000,
    Economy: "Technology, Manufacturing, Tourism",
    Security: "High",
    Climate: "Humid continental, with cold winters and hot, humid summers.",
    History:
      "Seoul has been the capital of Korea since the founding of the Joseon dynasty in 1394. It has witnessed the rise and fall of empires, the occupation by Japan in the early 20th century, and the Korean War. After the war, Seoul rapidly rebuilt and transformed into a global city. Today, it is a leading technology and innovation hub, while still retaining its historical significance through landmarks like Gyeongbokgung Palace and Bukchon Hanok Village.",
  },
  {
    Name: "Rome",
    Photo:
      "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
    Country: "Italy",
    Continent: "Europe",
    Description:
      "Rome, often referred to as 'The Eternal City,' is a sprawling metropolis that has played a central role in shaping Western civilization. Known for its nearly 3,000 years of globally influential art, architecture, and culture, Rome is home to world-renowned landmarks like the Colosseum, Vatican City, and the Roman Forum. Its streets are a living museum, blending ancient history with the energy of modern Italy.",
    Currency: "Euro",
    Language: "Italian",
    Population: 2873000,
    Economy: "Tourism, Services",
    Security: "High",
    Climate:
      "Mediterranean, with hot, dry summers and mild winters, offering a pleasant year-round climate.",
    History:
      "Rome was founded in 753 BC, according to legend, by Romulus and Remus. Over the centuries, it grew into the heart of the Roman Republic and later the Roman Empire, influencing law, politics, and culture across Europe and the Mediterranean. After the fall of the Western Roman Empire, Rome remained a significant religious center as the seat of the Catholic Church. Today, it stands as a testament to its imperial past, drawing millions of visitors to its historic sites and vibrant cultural scene.",
  },
];

City.insertMany(cities);
