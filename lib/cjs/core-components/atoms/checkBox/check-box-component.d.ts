import React from 'react';
export interface CheckBoxProps {
  title?: string;
  value?: string;
  list: Array<any>;
  onChange: (item: any) => void;
}
export declare const CheckBox: ({
  title,
  value,
  list,
  onChange,
}: CheckBoxProps) => React.JSX.Element;
