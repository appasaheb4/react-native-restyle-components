import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './style';
import {ArrowBottom, ArrowTop} from '../../../library/assets/icons';

export interface DropDownCheckBoxParentChildProps {
  title?: string;
  list: Array<any>;
  onChange: (item: string) => void;
}

export const DropDownCheckBoxParentChild = ({
  title = '',
  list = [],
  onChange,
}: DropDownCheckBoxParentChildProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const [value, setValue] = useState('Select');
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<any>>([]);

  useEffect(() => {
    setOptionList(list);
  }, [list]);

  return (
    <View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <TouchableOpacity
        style={styles.warperView}
        onPress={() => {
          setIsOpen(!isOpen);
        }}>
        <View style={styles.optionView}>
          <Text>{value}</Text>
          {isOpen ? (
            <ArrowTop color={theme.colors.gray6} />
          ) : (
            <ArrowBottom color={theme.colors.gray6} />
          )}
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.flatListWarperView}>
          <FlatList
            style={styles.flatListView}
            data={optionList}
            renderItem={({item, index}: {item: any; index: number}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginVertical: 6,
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    const list = optionList?.map(
                      (opList: any, opIndex: number) => {
                        let childOption = opList;
                        let isSelected = opList.selected;
                        if (opIndex == index) isSelected = !opList.selected;
                        else isSelected = false;
                        const newArr = childOption[0][
                          Object.keys(childOption[0])[0]
                        ]?.map((ch: any) => {
                          return {...ch, selected: false};
                        });
                        childOption = [
                          {
                            [Object.keys(childOption[0])[0]]: newArr,
                            selected: isSelected,
                          },
                        ];
                        return {...childOption, selected: isSelected};
                      },
                    );
                    onChange(Object.keys(item[0])[0]);
                    setValue(Object.keys(item[0])[0]);
                    setOptionList(JSON.parse(JSON.stringify(list)));
                  }}>
                  <View
                    style={[
                      styles.radioCycle,
                      {
                        backgroundColor: item?.selected
                          ? theme.colors.primary
                          : 'transparent',
                        borderWidth: item?.selected ? 0 : 1,
                      },
                    ]}
                  />
                  <Text style={{marginLeft: 6}}>{Object.keys(item[0])[0]}</Text>
                </TouchableOpacity>
                {item[0][Object.keys(item[0])[0]]?.map((e: any, i: number) => (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginVertical: 6,
                      alignItems: 'center',
                      marginLeft: 30,
                    }}
                    onPress={() => {
                      const list = optionList?.map(
                        (opList: any, opIndex: number) => {
                          let childOption = opList;
                          const newArr = childOption[0][
                            Object.keys(childOption[0])[0]
                          ]?.map((ch: any, chIndex: number) => {
                            if (index == opIndex && chIndex == i)
                              return {...ch, selected: !ch.selected};
                            return {...ch, selected: false};
                            return ch;
                          });
                          childOption = [
                            {
                              [Object.keys(childOption[0])[0]]: newArr,
                              selected: false,
                            },
                          ];
                          return childOption;
                        },
                      );
                      onChange(e.title);
                      setValue(e.title);
                      setOptionList(JSON.parse(JSON.stringify(list)));
                    }}>
                    <View
                      style={[
                        styles.radioCycle,
                        {
                          backgroundColor: e?.selected
                            ? theme.colors.primary
                            : 'transparent',
                          borderWidth: e?.selected ? 0 : 1,
                        },
                      ]}
                    />
                    <Text style={{marginLeft: 6}}>{e.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};
