import React, { useState } from 'react';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
//um ActivityIndicator serve para mostrar um símbolo "carregando" na tela
//para o usuário saber que algo está por terminar
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native';

import Cores from '../constantes/Cores'
import PreviewDoMapa from './PreviewDoMapa'

// import { Container } from './styles';

const CapturaLocalizacao = (props) => {

    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();
    const [estaCapturando, setEstaCapturando] = useState(false);

    const verificarPermissoes = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if (resultado.status !== "granted") {
            Alert.alert(
                'Sem permissão para uso do GPS',
                "É preciso liberar acesso ao GPS",
                [{ text: "Ok" }]
            )
            return false;
        }
        return true;
    }

    const capturarLocalizacao = async () => {
        const temPermissao = await verificarPermissoes();
        if (temPermissao) {
            setEstaCapturando(true);
            try {
                const localizacao = await Location.getCurrentPositionAsync({ timeout: 8000 });
                //console.log(localizacao);
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                })
            }
            catch (err) {
                Alert.alert(
                    "Impossível obter localização",
                    "Tente novamente mais tarde ou escolha uma no mapa",
                    [{ text: "Ok" }]
                );
            }
            setEstaCapturando(false);
        }
    };
    return (
        <View style={estilos.capturaLocalizacao}>
            <PreviewDoMapa
                style={estilos.previewDoMapa}
                localizacao={localizacaoSelecionada}>
                {
                    estaCapturando ?
                        <ActivityIndicator
                            size="large"
                            color={Cores.primary}
                        /> :
                        <Text>Nenhuma localização disponível.</Text>
                }
            </PreviewDoMapa>
            <Button
                title="Obter localização"
                color={Cores.primary}
                onPress={capturarLocalizacao}
            />
        </View>
    );
}

const estilos = StyleSheet.create({

    capturaLocalizacao: {
        marginBottom: 15
    },
    previewDoMapa: {
        marginBottom: 10,
        width: '100%',
        height: 400,
        borderColor: '#DDD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

});
export default CapturaLocalizacao;