import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import Button from './Styles/Button';
import FilterBar from './FilterBar';
import Article from './Article';
import ListArticles from './ListArticles';
import Filters from './Filters';

// const duvet = [
//   {
//     name: 'aucun',
//     image: '/static/none.svg',
//     material: '',
//     grammage: '',
//     imageItem: '/static/Bed/none.png',
//     id: '0',
//   },
//   {
//     name: 'Escale',
//     image: '/static/MenuCouettes/escale.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/couette2.png',
//     id: '1',
//   },
//   {
//     name: 'Calypso',
//     image: '/static/MenuCouettes/article.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/couette.png',
//     id: '2',
//   },

// ];

// const smallPillow = [
//   {
//     name: 'Escale',
//     image: '/static/MenuTaies/coussin3.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/petitcoussin.png',
//     id: '0',
//   },
//   {
//     name: 'Calypso',
//     image: '/static/MenuTaies/coussin2.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/petitcoussin3.png',
//     id: '1',
//   },
//   {
//     name: 'Palmea',
//     image: '/static/MenuTaies/coussin1.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/petitcoussin2.png',
//     id: '2',
//   },
// ];

// const centerPillow = [
//   {
//     name: 'Escale',
//     image: '/static/MenuTaies/coussin3.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/centrecoussin.png',
//     id: '0',
//   },
//   {
//     name: 'Calypso',
//     image: '/static/MenuTaies/coussin2.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/centrecoussin2.png',
//     id: '1',
//   },
// ];

// const mediumPillow = [
//   {
//     name: 'Palmea',
//     image: '/static/MenuTaies/coussin3.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/moyencoussin.png',
//     id: '0',
//   },
//   {
//     name: 'Escale',
//     image: '/static/MenuTaies/coussin1.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/moyencoussin2.png',
//     id: '1',
//   },
//   {
//     name: 'Calypso',
//     image: '/static/MenuTaies/coussin2.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/moyencoussin3.png',
//     id: '2',
//   },

// ];

// const bigPillow = [
//   {
//     name: 'Ecume Céladonn',
//     image: '/static/MenuTaies/coussin2.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/groscoussin.png',
//     id: '0',
//   },
//   {
//     name: 'Escale',
//     image: '/static/MenuTaies/coussin1.png',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     imageItem: '/static/Bed/groscoussin2.png',
//     id: '1',
//   },
// ];
// const flatSheet = [
//   {
//     name: 'Aucun',
//     image: '/static/none.svg',
//     material: '',
//     grammage: '',
//     imageItem: '/static/Bed/none.png',
//     id: 0,
//   },
//   {
//     name: 'Bel Ami',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Bel_ami_the-satin-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Bel_ami_the-satin-120.jpg',
//     id: 1,
//   },
//   {
//     name: 'Boudoir',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Boudoir-percale-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Boudoir-percale-120.jpg',
//     id: 2,
//   },
//   {
//     name: 'Herba',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Herba-percale-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Herba-percale-120.jpg',
//     id: 3,
//   },
//   {
//     name: 'Luna',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Luna-satin-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Luna-satin-120.jpg',
//     id: 4,
//   },
//   {
//     name: 'Palmio',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Palmio-satin-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Palmio-satin-120.jpg',
//     id: 5,
//   },
//   {
//     name: 'Triophe',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrap/DP_Triomphe-satin-120.jpg',
//     imageItem: '/static/MenuDrap/DP_Triomphe-satin-120.jpg',
//     id: 6,
//   },
// ];
// const fittedSheet = [
//   {
//     name: 'Aucun',
//     image: '/static/none.svg',
//     material: '',
//     grammage: '',
//     imageItem: '/static/Bed/none.png',
//     id: '0',
//   },
//   {
//     name: 'Calypso',
//     material: 'Satin de coton',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Calypso-satin-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Calypso-satin-120.jpg',
//     id: 1,
//   },
//   {
//     name: 'Eolie',
//     material: 'Percale',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Eolie-percale-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Eolie-percale-120.jpg',
//     id: 2,
//   },
//   {
//     name: 'Odysse',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Odysse-satin-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Odysse-satin-120.jpg',
//     id: 3,
//   },
//   {
//     name: 'Ondee',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Ondee-satin-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Ondee-satin-120.jpg',
//     id: 4,
//   },
//   {
//     name: 'Palmio',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Palmio-satin-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Palmio-satin-120.jpg',
//     id: 5,
//   },
//   {
//     name: 'Riviera',
//     material: 'Satin',
//     grammage: '120 fils/cm²',
//     image: '/static/MenuDrapHousse/DH_Riviera-satin-120.jpg',
//     imageItem: '/static/MenuDrapHousse/DH_Riviera-satin-120.jpg',
//     id: 6,
//   },
// ];


const Menu = (props) => (
  <div className={styles.menu}>
    <h1 className={styles.title}>{props.title}</h1>
    <FilterBar />
    {/* <ListArticles typeItem={props.typeItem} onItemChange={props.onItemChange} /> */}
    <Filters />
  </div>
);

export default Menu;
