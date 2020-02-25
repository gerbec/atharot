module.exports = {
    stories: [
        '../components/**/*.stories.js',
        '../pages/**/*.stories.js',
        '../src/**/*.stories.js'
    ],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register'
    ]
};
