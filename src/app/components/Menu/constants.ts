/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
const MenuVoices = {
  home: {
    regexp: new RegExp('/home'),
    value: (_: any) => 'home',
    text: 'Home',
  },
  myCharacters: {
    regexp: new RegExp('/myCharacters'),
    value: (_: any) => '',
    text: 'I miei personaggi preferiti',
  },
  about: {
    regexp: new RegExp('/about'),
    value: (_: any) => 'about',
    text: 'About',
  },
};

export default MenuVoices;
