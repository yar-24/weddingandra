
import {ImAddressBook, ImImages, ImLocation2, ImMusic, ImMobile} from 'react-icons/im';
import {IoMdTimer} from 'react-icons/io';
import {RiHeartsFill,RiMoneyDollarCircleFill} from 'react-icons/ri'
import {GiLoveLetter} from 'react-icons/gi'



const fiturs =[
    {
        icon: <IoMdTimer  />,
        titles: 'Waktu Countdown',
        subtitle: 'Anda dapat melihat hitung mundur acara pernikahan',
    },
    {
        icon: <ImLocation2  />,
        titles: 'Lokasi Acara',
        subtitle: 'Anda dengan mudah memasang lokasi acara anda dan dibagikan melalui Google Maps',
    },
    {
        icon: <ImImages  />,
        titles: 'Galeri',
        subtitle: 'Upload Banyak photo slide yang dapat bergerak sehingga website anda semakin menarik',
    },
    {
        icon: <ImMusic  />,
        titles: 'Musik',
        subtitle: 'Lengkapi website anda dengan sebuah musik pilihanmu prewedding anda, website anda semakin indah',
    },
    {
        icon: <RiMoneyDollarCircleFill  />,
        titles: 'Harga Terjangkau',
        subtitle: 'Dengan biaya terjangkau anda dapat membuat dengan kualitas yang setara',
    },
    {
        icon: <RiHeartsFill  />,
        titles: 'Timeline',
        subtitle: 'Ceritakan Kisah cintamu kepada para undangan',
    },
    {
        icon: <ImMobile  />,
        titles: 'Mobile Friendly',
        subtitle: 'Akses undangan dari perangkat apapun dengan cepat',
    },
    {
        icon: <GiLoveLetter  />,
        titles: 'Amplop Digital',
        subtitle: 'Terima Amplop dari tamu secara digital via transfer atau e-money ',
    },
];


export default {fiturs};

// export default{
//     ImAddressBook,
//     ImImages,
//     ImLocation2,
//     IoMdTimer,
//     ImMusic,
//     ImQuotesLeft,
//     RiHeartsFill,
//     ImMobile,
//     GiLoveLetter
// }