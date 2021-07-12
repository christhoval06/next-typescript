import PropTypes from 'prop-types';

import IconGithub from '@/components/icons/github';
import IconLinkedin from '@/components/icons/linkedin';
import IconCodepen from '@/components/icons/codepen';
import IconInstagram from '@/components/icons/instagram';
import IconTwitter from '@/components/icons/twitter';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGithub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
