import * as React from 'react';

import AboutMe from './AboutMe';
import ExternalIcon from './ExternalSvg';
import GithubIcon from './GithubSvg';
import Avatar from './Avatar';
import Blob from './Blob';
import Logo from './Logo';

export type SVGNameType = '' | 'external' | 'github' | 'about_me' | 'avatar_blob' | 'avatar' | 'logo';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  name: SVGNameType;
}

const SVGs = ({
  name = '',
  ...props
}: SVGProps)  => {
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

export default SVGs;
