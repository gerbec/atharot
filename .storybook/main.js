module.exports = {
    stories: ['../**/*.stories.[tj]s', '../**/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register'
    ]
};
