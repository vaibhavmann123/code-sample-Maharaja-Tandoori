import calendar from './assets/images/calender.png';
import gender from './assets/images/gender.png';
import location from './assets/images/location.png';
import mail from './assets/images/mail.png';
import menu from './assets/images/menu.png';
import password from './assets/images/password.png';
import phone from './assets/images/phone.png';
import arrow from './assets/images/arrow.png';
import user from './assets/images/user.png';

export default function Icon(props) {
  let icon = null;
  if (props.icon.toLowerCase() === 'calendar') icon = calendar;
  else if (props.icon.toLowerCase() === 'gender') icon = gender;
  else if (props.icon.toLowerCase() === 'location') icon = location;
  else if (props.icon.toLowerCase() === 'mail') icon = mail;
  else if (props.icon.toLowerCase() === 'menu') icon = menu;
  else if (props.icon.toLowerCase() === 'password') icon = password;
  else if (props.icon.toLowerCase() === 'phone') icon = phone;
  else if (props.icon.toLowerCase() === 'arrow') icon = arrow;
  else if (props.icon.toLowerCase() === 'user') icon = user;
  else icon = '';
  return <Image source={icon} />;
}
