import { View } from 'react-native';
import { DropDownList } from './drop-down-list.component';
const DropDownListMeta = {
    title: 'Design System/Molecules/DropDownList',
    component: DropDownList,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
};
export default DropDownListMeta;
export const Basic = {
    args: {
        title: 'Task List *',
        data: [
            {
                title: 'HVAC Repair',
            },
            {
                title: 'AC Repair',
            },
            {
                title: 'Fridge Repair',
            },
        ],
        displayKey: 'title',
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=drop-down-list.stories.js.map