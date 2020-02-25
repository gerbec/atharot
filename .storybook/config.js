import {configure, addDecorator} from '@storybook/react';

// import GlobalStyle from '../styles/globalStyles';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const loadStories = () => requireAll(require.context('..', true, /\.stories\.tsx$/));

addDecorator(s => <React.Fragment>{s()}</React.Fragment>);

configure(loadStories, module);
