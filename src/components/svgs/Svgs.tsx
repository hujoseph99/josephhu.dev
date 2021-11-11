import * as React from 'react';

import AboutMe from './AboutMe';
import ExternalIcon from './ExternalSvg';
import GithubIcon from './GithubSvg';
import Avatar from './Avatar';
import Blob from './Blob';
import Logo from './Logo';

type nameType = '' | 'external' | 'github' | 'about_me' | 'avatar_blob' | 'avatar' | 'logo';

interface SvgsProps extends React.SVGProps<SVGSVGElement> {
  name: nameType;
}

const Svgs = ({
  name = '',
  ...props
}: SvgsProps)  => {
  switch (name) {
    case 'external':
      return <ExternalIcon {...props} />;
    case 'github':
      return <GithubIcon {...props} />;
    case 'about_me':
      return <AboutMe {...props} />;
    case 'avatar_blob':
      return <Blob {...props} />;
    case 'avatar':
      return <Avatar {...props} />;
    case 'logo':
      return <Logo {...props} />;
    default:
      return <></>
  }
}

export default Svgs;
