//export enum Language {
//  Spanish = "Español",
//  English = "English",
//  German = "Deutsch",
//  Italian = "Italiano",
//  French = "Français",
//}

export interface BookProps {
  id: number
  title: string
  description: string
  author: string
  image: string
  year: number
  pages: number
  language: string
}

const books: BookProps[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    description: "To Kill a Mockingbird is a 1962 American coming-of-age legal drama crime film directed by Robert Mulligan. The screenplay by Horton Foote is based on Harper Lee's 1960 Pulitzer Prize–winning novel of the same name. The film stars Gregory Peck as Atticus Finch and Mary Badham as Scout.",
    author: "Harper Lee",
    image: "https://64.media.tumblr.com/ebf8b80e0f455842ad1f5bed688e0760/tumblr_inline_p2g7754DaB1rt5yu5_1280.jpg",
    year: 1960,
    pages: 281,
    language: "English"
  },
  {
    id: 2,
    title: "Fantastic Beasts",
    description: "Fantastic Beasts and Where to Find Them (often referred to as simply Fantastic Beasts) is a 2001 guide book written by British author J. K. Rowling (under the pen name of the fictitious author Newt Scamander) about the magical creatures in the Harry Potter universe.",
    author: "Newt Scamander",
    image: "https://m.media-amazon.com/images/I/A1eEFlU1ftL._AC_UF1000,1000_QL80_.jpg",
    year: 2001,
    pages: 128,
    language: "English"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    description: "The Great Gatsby is a 1974 American historical romantic drama film based on the 1925 novel of the same name by F. Scott Fitzgerald. The film was directed by Jack Clayton, produced by David Merrick, and written by Francis Ford Coppola.",
    author: "F. Scott Fitzgerald",
    image: "https://joshzandman.com/cdn/shop/files/GatsbyCover_08c4c8ed-ec19-40be-ae3e-c61ce3abe96e.png?v=1686709923",
    year: 1925,
    pages: 180,
    language: "English"
  },
  {
    id: 4,
    title: "Brave New World",
    description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.[2] Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy.",
    author: "Aldous Huxley",
    image: "https://prodimage.images-bn.com/pimages/9780060776091_p0_v1_s1200x630.jpg",
    year: 1932,
    pages: 288,
    language: "English"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    description: "The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form in 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.",
    author: "J.D. Salinger",
    image: "https://www.thoughtco.com/thmb/RMO0HbKRcnexZhX5Jj_Cg-Pur5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CiTR_overview-e839cbdfec7443398b1520611287323d.jpg",
    year: 1951,
    pages: 234,
    language: "English"
  },
  {
    id: 6,
    title: "To the Lighthouse",
    description: "Following and extending the tradition of modernist novelists like Marcel Proust and James Joyce, the plot of To the Lighthouse is secondary to its philosophical introspection. Cited as a key example of the literary technique of multiple focalization, the novel includes little dialogue and almost no direct action; most of it is written as thoughts and observations.",
    author: "Virginia Woolf",
    image: "https://m.media-amazon.com/images/I/517Hf-iPmnL.jpg",
    year: 1927,
    pages: 209,
    language: "English"
  },
  {
    id: 7,
    title: "Moby Dick",
    author: "Herman Melville",
    description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    image: "https://www.cidermillpress.com/cdn/shop/files/9781951511302.jpg?v=1692886308&width=1445",
    year: 1851,
    pages: 704,
    language: "English"
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    author: "Jane Austen",
    image: "https://cdn2.penguin.com.au/covers/400/9780241374887.jpg",
    year: 1813,
    pages: 279,
    language: "English"
  },
  {
    id: 9,
    title: "The Hobbit",
    description: "The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children's literature and is one of the best-selling books of all time, with over 100 million copies sold.",
    author: "J.R.R. Tolkien",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2fb0fb7-3668-4e9b-b13b-304ee5e04e55/d8mezqk-a6f65784-2e1a-46f9-936c-4d41284dc5b0.jpg/v1/fill/w_1024,h_1317,q_75,strp/the_hobbit_book_cover_by_dreams_design_d8mezqk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxNyIsInBhdGgiOiJcL2ZcL2IyZmIwZmI3LTM2NjgtNGU5Yi1iMTNiLTMwNGVlNWUwNGU1NVwvZDhtZXpxay1hNmY2NTc4NC0yZTFhLTQ2ZjktOTM2Yy00ZDQxMjg0ZGM1YjAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LyqHU_PtNmqOQ2LmmpwkhMvNAgkaSDlHmPZG0cBNPUA",
    year: 1937,
    pages: 310,
    language: "English"
  },
  {
    id: 10,
    title: "Frankenstein",
    description: "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on 1 January 1818, when she was 20. Her name first appeared in the second edition, which was published in Paris in 1821.",
    author: "Mary Shelley",
    image: "https://i.pinimg.com/1200x/bc/9b/db/bc9bdb32b8a59f4aef4dcdda2e81c2a7.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 11,
    title: "The lord of the rings",
    description: "The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
    author: "Tolkien",
    image: "https://mrbsemporium.com/wp-content/uploads/2021/09/9780261103252.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 12,
    title: "Enoc book",
    description: "The Book of Enoch is an ancient Hebrew apocalyptic religious text, ascribed by tradition to the patriarch Enoch who was the father of Methuselah and the great-grandfather of Noah.",
    author: "Enoc",
    image: "https://prodimage.images-bn.com/pimages/9781948229579_p0_v1_s1200x630.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 13,
    title: "Season of the Bruja",
    description: "Aaron has lived in Portland, OR for over 20 years, but spent his childhood in the desolate high desert of Northern California. He’s worn many hats over the years, going from film production to radio host, writing has always been his love. In addition to his young adult novels, Aaron has written stories for Dark Horse Comics, Image Comics, and Activision. When he’s not at his keyboard, he’s in the kitchen experimenting with traditional Mexican ingredients to rediscover lost dishes.",
    author: "Bruja",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781549308161/season-of-the-bruja-vol-1-9781549308161_hr.jpg",
    year: 1818,
    pages: 280,
    language: "Español"
  },
  {
    id: 14,
    title: "The brothers Grimm",
    description: "The Brothers Grimm (die Brüder Grimm or die Gebrüder Grimm), Jacob (1785–1863) and Wilhelm (1786–1859), were German academics who together collected and published folklore.",
    author: "Grimm",
    image: "https://m.media-amazon.com/images/I/61v+KUMd4JL._SL500_.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 15,
    title: "William Shakespeare",
    description: "William Shakespeare (bapt.Tooltip baptised 26[a] April 1564 – 23 April 1616)[b] was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist.",
    author: "Shakespeare",
    image: "https://covers.storytel.com/jpg-640/9781666106480.faeee1d5-b65f-4b20-9ce7-bef4bb788ac3?optimize=high&quality=70",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 16,
    title: "Macbeth",
    description: "Macbeth (/məkˈbɛθ/, full title The Tragedie of Macbeth) is a tragedy by William Shakespeare. It is thought to have been first performed in 1606.[a] It dramatises the damaging physical and psychological effects of political ambition on those who seek power.",
    author: "Shakespeare",
    image: "https://52lettersinthealphabet.files.wordpress.com/2014/12/cover-macbeth.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  },
  {
    id: 17,
    title: "The odyssey of Homer",
    description: "The Odyssey (/ˈɒdɪsi/;[1] Ancient Greek: Ὀδύσσεια, romanized: Odýsseia)[2][3] is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences. As with the Iliad, the poem is divided into 24 books.",
    author: "Frederico Lourenço",
    image: "https://img.wook.pt/images/a-odisseia-de-homero-adaptada-para-jovens-frederico-lourenco/MXwyMTQwMDY3M3wxNzI3NTM0MHwxNTI2MzA4OTMzMDAw/500x",
    year: 1818,
    pages: 280,
    language: "Español"
  },
  {
    id: 18,
    title: "Leonardo da Vinci",
    description: "Leonardo di ser Piero da Vinci[b] (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
    author: "Walter Isaacson",
    image: "https://covers.shakespeareandcompany.com/97813988/9781398824515.jpg",
    year: 1818,
    pages: 280,
    language: "English"
  }
];

export default books;
