import logo from '../assets/logos/logo@2x.png';
import background from '../assets/images/scaffold-bg.jpg';
import sass from '../assets/brands/brand_sass.svg';
import react from '../assets/brands/brand_react.svg';
import bem from '../assets/brands/brand_bem.svg';

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
            heading: 'React',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus pulvinar, gravida arcu eu, bibendum magna. Aliquam ultricies, odio sit amet sodales condimentum, tortor metus tempor ex, vel tempus est nibh ut mi. Etiam ac suscipit tellus. Nunc vitae enim sed turpis blandit accumsan. Nunc eget sodales massa. Aenean ut velit blandit, sodales ipsum nec, lobortis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et suscipit nisi',
            image: react,
            alt: 'about this image'
        },
        {
            heading: 'BEM',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus pulvinar, gravida arcu eu, bibendum magna. Aliquam ultricies, odio sit amet sodales condimentum, tortor metus tempor ex, vel tempus est nibh ut mi. Etiam ac suscipit tellus. Nunc vitae enim sed turpis blandit accumsan. Nunc eget sodales massa. Aenean ut velit blandit, sodales ipsum nec, lobortis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et suscipit nisi',
            image: bem,
            alt: 'about this image',
            mod: 'reversed'
        },
        {
            heading: 'SCSS',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus pulvinar, gravida arcu eu, bibendum magna. Aliquam ultricies, odio sit amet sodales condimentum, tortor metus tempor ex, vel tempus est nibh ut mi. Etiam ac suscipit tellus. Nunc vitae enim sed turpis blandit accumsan. Nunc eget sodales massa. Aenean ut velit blandit, sodales ipsum nec, lobortis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et suscipit nisi',
            image: sass,
            alt: 'about this image'
        }
    ]
}

export default details;