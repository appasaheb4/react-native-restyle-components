var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { within, userEvent, expect } from '@storybook/test';
import { Page } from './Page';
const meta = {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};
export default meta;
export const LoggedOut = {};
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
    play: (_a) => __awaiter(void 0, [_a], void 0, function* ({ canvasElement }) {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        yield expect(loginButton).toBeInTheDocument();
        yield userEvent.click(loginButton);
        yield expect(loginButton).not.toBeInTheDocument();
        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        yield expect(logoutButton).toBeInTheDocument();
    }),
};
//# sourceMappingURL=Page.stories.js.map