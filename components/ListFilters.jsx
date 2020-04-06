import React from 'react';
import styles from './ListFilters.module.scss';
import Filters from './Filters';

const Style = ['Luxe', 'Bord de Mer', 'Jardin', 'Déco'];
const Tissu = ['Satin de coton', 'Percale de coton', 'Jacquard de coton', 'Lin lavé'];
const Fils = ['80 fils/cm²', '120 fils/cm²', '200fils/cm²'];

const ListFilters = () => (
  <div className={styles.listFilters}>
    <Filters title="Style" arrayFilters={Style} />
    <Filters title="Tissu" arrayFilters={Tissu} />
    <Filters title="Nombre de fils/cm²" arrayFilters={Fils} />
  </div>
);

export default ListFilters;
