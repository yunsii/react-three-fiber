import * as React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';
import { repository } from '../../../package.json';

export default function GlobalFooter() {
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} theprimone 出品`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: repository.url,
          blankTarget: true,
        },
      ]}
    />
  );
}
