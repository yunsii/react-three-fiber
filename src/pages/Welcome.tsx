import React from 'react';
import { Card, Alert } from 'antd';

export default (): React.ReactNode => {
  return (
    <Card title="Hello, playground">
      <Alert message="🎨 Code playground of React and Typescript." />
    </Card>
  );
};
