import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela';
import { Platform } from 'react-native';
import Cores from '../constantes/Cores';


const LugaresNavigator = createStackNavigator({
    Lugares: ListaDeLugaresTela,
    DetalheDoLugar: DetalhesDoLugarTela,
    NovoLugar: NovoLugarTela,
    Mapa: MapaTela
});

export default createAppContainer(LugaresNavigator);
