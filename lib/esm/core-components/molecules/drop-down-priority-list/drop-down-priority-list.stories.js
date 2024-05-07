import { View } from 'react-native';
import { DropDownPriorityList } from './drop-down-priority-list.component';
const DropDownPriorityListMeta = {
    title: 'Design System/Molecules/DropDownPriorityList',
    component: DropDownPriorityList,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
    parameters: {
        componentSubtitle: `import { DropDownPriorityList } from 'react-native-restyle-components'`,
    },
};
export default DropDownPriorityListMeta;
export const Basic = {
    args: {
        title: 'Priority',
        data: [
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
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=drop-down-priority-list.stories.js.map