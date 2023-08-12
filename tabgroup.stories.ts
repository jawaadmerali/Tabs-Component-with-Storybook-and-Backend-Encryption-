import { Meta, StoryObj } from '@storybook/vue3';
import TabGroup from './components/tabgroup.vue';

const meta: Meta = {
    title: 'General/Tab Group',
    component: TabGroup,
    tags: ['autodocs'],
    argTypes: {
        textAlign: { control: 'radio', options: ['left', 'center', 'right'] },
    },
    args: {
        tabs: [],
        initialTab: 'For Sale',
        textAlign: 'center'
    },
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

export const Default: Story = {};
