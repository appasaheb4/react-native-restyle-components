import { View } from 'react-native';
import { SearchDropDownList } from './search-drop-down-list.component';
const SearchDropDownListMeta = {
    title: 'Design System/Molecules/SearchDropDownList',
    component: SearchDropDownList,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
    parameters: {
        componentSubtitle: `import { SearchDropDownList } from 'react-native-restyle-components'`,
    },
};
export default SearchDropDownListMeta;
export const Basic = {
    args: {
        title: 'Users',
        list: [
            {
                color: '#5AC47D',
                title: 'Low',
            },
            {
                color: '#F2AD53',
                title: 'Medium',
            },
            {
                color: '#AD3F55',
                title: 'High',
            },
        ],
        displayKey: 'title',
        placeholder: 'Search',
        displayValue: 'Select',
        onSearch: text => {
            console.log({ text });
        },
        onSelect: item => {
            console.log({ item });
        },
    },
};
