import logo from '../assets/logos/logo@2x.png';
import background from '../assets/images/scaffold-bg.jpg';
import brands from '../assets/brands/brands.svg';
import editor from '../assets/images/editor.png';
import code from '../assets/images/code.png';

const details = {
    logo: logo,
    logoAlt: 'SCAFit logo',
    heading: 'Easy component scaffolding for efficient React development',
    background: background,
    backgroundAlt: 'scaffolding on a worksite',
    link: '/editor',
    linkText: 'to the editor',
    cards: [
        {
            heading: 'Foundations',
            info: 'Starting with fundamentals for component construction in React, we use BEM (block__element--modifier) naming methodology, mixed with the power of SCSS for easy styling of a component. ',
            image: brands,
            alt: 'brands of tech used'
        },
        {
            heading: 'Simple Editor',
            info: 'The editor is a simple GUI to quickly scaffold a React component. By clicking on the add, edit and delete icons, you are shown an editor modal for content input. Simply add your required information and a component will appear on screen, ready for output to files',
            image: editor,
            alt: 'easy to use editor',
            mod: 'reversed'
        },
        {
            heading: 'Ready To Use Code',
            info: 'Once you are done entering your components details, you can click the generate files button to be provided with a zip archive of your code ready for quick deployment into your project, with the required js and scss files already linked.',
            image: code,
            alt: 'about this image'
        }
    ]
}

export default details;