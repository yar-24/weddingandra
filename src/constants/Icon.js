import React from 'react';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicon from 'react-native-vector-icons/Ionicons';
// import ZocialIcon from 'react-native-vector-icons/Zocial';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import EvilIcon from 'react-native-vector-icons/EvilIcons';
// import FAIcon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import OcticonIcon from 'react-native-vector-icons/Octicons';
// import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
// import FoundationIcon from 'react-native-vector-icons/Foundation';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImAddressBook, ImImages, ImLocation2, ImMusic, ImQuotesLeft, ImMobile} from 'react-icons/im';
import {IoMdTimer} from 'react-icons/io';
import {RiHeartsFill} from 'react-icons/ri'
import {GiLoveLetter} from 'react-icons/gi'

const getIcon = type => {
  switch (type) {
    case 'addressBook':
      return <ImAddressBook color='#adc5b7' fontSize={27} />;
    case 'images':
      return ImImages;
    case 'location':
      return ImLocation2;
    case 'music':
      return ImMusic;
    case 'quote':
      return ImQuotesLeft;
    case 'mobile':
      return ImMobile;
    case 'timer':
      return IoMdTimer;
    case 'heart':
      return RiHeartsFill;
    case 'love':
      return GiLoveLetter;
  }
};

const Icon = ({
  type,
  ...props
}) => {
  const FontIcon = getIcon(type);

  return <FontIcon { ...props
  }
  />;
};

export default Icon;