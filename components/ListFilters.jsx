import React from 'react';
import styles from './ListFilters.module.scss';
import Filters from './Filters';
import FilterColor from './FilterColor';

const Motif = ['Motif', 'Uni'];
const Style = ['Luxe', 'Bord de Mer', 'Jardin', 'Déco'];
const Tissu = ['Satin de coton', 'Percale de coton', 'Jacquard de coton', 'Lin lavé'];
const Fils = ['80 fils/cm²', '120 fils/cm²', '200fils/cm²'];
const Couleurs = ['#EB5757', '#F2994A', '#F2C94C', '#219653', '#27AE60', '#6FCF97', '#2F80ED', '#2D9CDB', '#56CCF2', '#9B51E0', '#BB6BD9', '#BDBDBD'];

const ListFilters = () => (
  <div className={styles.listFilters}>
    <Filters title="Motif" arrayFilters={Motif} />
    <FilterColor title="Couleurs" arrayFilters={Couleurs} />
    <Filters title="Style" arrayFilters={Style} />
    <Filters title="Tissu" arrayFilters={Tissu} />
    <Filters title="Nombre de fils/cm²" arrayFilters={Fils} />
  </div>
);

export default ListFilters;
